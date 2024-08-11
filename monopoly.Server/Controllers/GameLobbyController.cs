using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Hubs;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/gameLobby")]
    public class GameLobbyController(IHubContext<GameHub> hub, ILogger<GameLobbyController> logger) : Controller
    {
        private readonly IHubContext<GameHub> _hub = hub;
        private readonly ILogger<GameLobbyController> _logger = logger;

        [HttpGet("create")]
        public async Task<IActionResult> CreateLobby()
        {
            _logger.Log(LogLevel.Information, "Game lobby created!");
            return Ok(new Response(true, $"{Guid.NewGuid():N}"));
        }

        [HttpGet("send")]
        public async Task<IActionResult> Send()
        {
            await _hub.Clients.All.SendAsync("SendFromBackednd", "Messange from Backednd!");
            return Ok(new Response(true, "Сообщение успещно отправлено!"));
        }
    }
}
