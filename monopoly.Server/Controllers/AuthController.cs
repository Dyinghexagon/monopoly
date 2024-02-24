using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.CLient;
using System.Security.Claims;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/auth")]
    public class AuthController : Controller
    {
        private readonly List<User> _users =
        [
            new()
            {
                Id = new Guid(),
                Name = "user1",
                Password = "password1",
            },
            new()
            {
                Id = new Guid(),
                Name = "user2",
                Password = "password2",
            },
        ];

        [HttpPost("signin")]
        public async Task<IActionResult> SignInAsync([FromBody] UserModel userModel)
        {
            var user = _users.FirstOrDefault(u => u.Id == userModel.Id && u.Name == userModel.Name && u.Password == userModel.Password);

            if (user is null)
            {
                return BadRequest(new Response(false, "user is null"));
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

            return Ok(new Response(true, "Signed in successfully"));
        }

        [HttpPost("signup")]
        public IActionResult SignUp([FromBody] UserModel userModel)
        {
            var user = new User() { 
                Id = new Guid(), 
                Name = userModel.Name,
                Password = userModel.Password
            };

            _users.Add(user);
            return Ok(new Response(true, "Пользователь успешно добавлен!"));
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
