using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.CLient;
using monopoly.Server.Services.UserService;
using monopoly.Server.Utils;
using System.Security.Claims;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/auth")]
    public class AuthController(IAccountService accountService) : Controller
    {
        private readonly IAccountService _accountService = accountService;

        [HttpPost("signin")]
        public async Task<IActionResult> SignInAsync([FromBody] AccountModel accountModel)
        {
            var accounts = await _accountService.GetAllAsync();
            var account = accounts.FirstOrDefault(u => u.Name == accountModel.Name);

            if (account is null)
            {
                return BadRequest(new Response<string>(false, new ResponseData<string>("Пользователь не найден!", null)));
            }

            var hash = CryptoUtils.HashPasword(accountModel.Password, out var salt);
            if (!CryptoUtils.VerifyPassword(accountModel.Password, hash, salt))
            {
                return BadRequest(new Response<string>(false, new ResponseData<string>("Пароль не прошёл верификацию!", null)));
            }

            var claims = new List<Claim>() 
            { 
                new(type: ClaimTypes.Name, value: accountModel.Name)
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

            return Ok(new Response<string>(true, new ResponseData<string>("Вход в систему успешно выполнен!", null)));
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] AccountModel userModel)
        {
            try
            {
                var hash = CryptoUtils.HashPasword(userModel.Password, out var salt);

                var accoumt = new Account()
                {
                    Id = new Guid(),
                    Name = userModel.Name,
                    PasswordHash = hash,
                    PasswordSalt = salt,
                    IsActive = true,
                    DateCreated = DateTime.UtcNow,
                    DateUpdated = DateTime.UtcNow
                };

                var id = await _accountService.AddAsync(accoumt);
                return Ok(new Response<string>(true, new ResponseData<string>($"Пользователь с id: {id} успешно добавлен!", null)));
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpGet("account")]
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

    public record Response<T>(bool IsSuccess, ResponseData<T> Data);

    public class ResponseData<T>(string message, T? data)
    {
        public string Message { get; set; } = message;
        public T? Data { get; set; } = data;
    }

    public record UserClaim(string Type, string Value);
}
