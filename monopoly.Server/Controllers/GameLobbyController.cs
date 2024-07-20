using Microsoft.AspNetCore.Mvc;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/gameLobby")]
    public class GameLobbyController(ILogger<GameLobbyController> logger) : Controller
    {
        private readonly ILogger<GameLobbyController> _logger = logger;

        [HttpGet("create")]
        public async Task<IActionResult> CreateLobby()
        {
            _logger.Log(LogLevel.Information, "Game lobby created!");
            return Ok(new Response(true, $"{Guid.NewGuid():N}"));
        }
    }
}
