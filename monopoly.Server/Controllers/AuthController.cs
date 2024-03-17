using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.CLient;
using monopoly.Server.Services.UserService;
using monopoly.Server.Utils;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/auth")]
    public class AuthController(IUserService userService) : Controller
    {
        private readonly IUserService _userService = userService;

        [HttpPost("signin")]
        public async Task<IActionResult> SignInAsync([FromBody] UserModel userModel)
        {
            var users = await _userService.GetAllAsync();
            var user = users.FirstOrDefault(u => u.Name == userModel.Name);

            if (user is null)
            {
                return BadRequest(new Response(false, "Пользователь не найден!"));
            }

            var hash = CryptoUtils.HashPasword(userModel.Password, out var salt);
            if (!CryptoUtils.VerifyPassword(userModel.Password, hash, salt))
            {
                return BadRequest(new Response(false, "Пароль не прошёл верификацию!"));
            }

            var claims = new List<Claim>() 
            { 
                new(type: ClaimTypes.Name, value: userModel.Name)
            };

            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(identity),
                new AuthenticationProperties
                {
                    IsPersistent = true,
                    AllowRefresh = true,
                    ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10)
                });

            return Ok(new Response(true, "Вход в систему успешно выполнен!"));
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] UserModel userModel)
        {
            try
            {
                var hash = CryptoUtils.HashPasword(userModel.Password, out var salt);

                var user = new User()
                {
                    Id = new Guid(),
                    Name = userModel.Name,
                    PasswordHash = hash,
                    PasswordSalt = salt,
                    IsActive = true,
                    DateCreated = DateTime.UtcNow,
                    DateUpdated = DateTime.UtcNow
                };

                var id = await _userService.AddAsync(user);
                return Ok(new Response(true, $"Пользователь с id: {id} успешно добавлен!"));
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpGet("user")]
        public IActionResult GetUser()
        {
            var userClaims = User.Claims.Select(u => new UserClaim(u.Type, u.Value)).ToList();
            return Ok(userClaims);
        }

        [Authorize]
        [HttpGet("signout")]
        public async Task SignOutAsync()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }
    }

    public record Response(bool IsSuccess, string Message);
    public record UserClaim(string Type, string Value);
}
