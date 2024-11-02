using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.Client;
using monopoly.Server.Services.AccountService;
using monopoly.Server.Utils;
using System.Security.Claims;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/auth")]
    public class AuthController(
        IAccountService accountService,
        ILogger<AuthController> logger
    ) : Controller
    {
        private readonly IAccountService _accountService = accountService;
        private readonly ILogger<AuthController> _logger = logger;

        [HttpPost("signin")]
        public async Task<IActionResult> SignInAsync([FromBody] AccountModel accountModel)
        {
            var accounts = await _accountService.GetAllAsync();
            var account = accounts.FirstOrDefault(u => u.Name == accountModel.Name);

            if (account is null)
            {
                _logger.LogError($"Пользователь по name: {accountModel.Name} не найден!");
                return BadRequest();
            }

            var hash = CryptoUtils.HashPasword(accountModel.Password, out var salt);
            if (!CryptoUtils.VerifyPassword(accountModel.Password, hash, salt))
            {
                _logger.LogError($"Пароль не прошёл верификацию по name: {accountModel.Name}");
                return BadRequest();
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

            _logger.LogInformation($"Вход в систему для пользователя: {account.Id} успешно выполнен!");
            return Ok();
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
                
                _logger.LogInformation($"Пользователь с id: {id} успешно добавлен!");
                return Ok();
            } catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
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

    public record UserClaim(string Type, string Value);
}
