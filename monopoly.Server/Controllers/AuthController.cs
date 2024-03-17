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
        /*
 Console.WriteLine($"Password hash: {hash}");
Console.WriteLine($"Generated salt: {Convert.ToHexString(salt)}");
 */
        private readonly IUserService _userService = userService;

        [HttpPost("signin")]
        public async Task<IActionResult> SignInAsync([FromBody] UserModel userModel)
        {
            var users = await _userService.GetAllAsync();
            var user = users.FirstOrDefault(u => u.Name == userModel.Name && u.PasswordHash == userModel.Password);

            if (user is null)
            {
                return BadRequest(new Response(false, "Пользователь не найден"));
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

            return Ok(new Response(true, "Вход в систему успешно выполнен"));
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] UserModel userModel)
        {
            var hash = CryptoUtils.HashPasword(userModel.Password, out var salt);

            var user = new User() {
                Id = new Guid(),
                Name = userModel.Name,
                PasswordHash = hash,
                PasswordSalt = salt,
                IsActive = true,
                DateCreated = DateTime.Now,
                DateUpdated = DateTime.Now
            };

            var id = await _userService.AddAsync(user);
            return Ok(new Response(true, $"Пользователь с id: {id} успешно добавлен!"));
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

        private static string MD5Hash(string src)
        {
            var result = MD5.HashData(Encoding.ASCII.GetBytes(src));
            return Encoding.ASCII.GetString(result);
        }
    }

    public record Response(bool IsSuccess, string Message);
    public record UserClaim(string Type, string Value);
}
