using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using AutoMapper;

using monopoly.Server.Hubs;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/gameLobby")]
    public class GameLobbyController(
        IHubContext<GameHub> hub,
        IMapper mapper,
        ILogger<GameLobbyController> logger
    ) : Controller
    {
        private readonly IMapper _mapper = mapper;
        private readonly IHubContext<GameHub> _hub = hub;
        private readonly ILogger<GameLobbyController> _logger = logger;

        [HttpPost("create")]
        public async Task<IActionResult> CreateLobby()
        {
            var gameLobby = new GameLobby();

            return Ok(
                new Response<GameLobbyModel>(true, 
                    new ResponseData<GameLobbyModel>(
                        "Лобби создано!", 
                        _mapper.Map<GameLobby, GameLobbyModel>(gameLobby))
                    )
                );
        }

        [HttpGet("send")]
        public async Task<IActionResult> Send()
        {
            await _hub.Clients.All.SendAsync("SendFromBackednd", "Messange from Backednd!");
            return Ok(new Response<string>(true, new ResponseData<string>("Сообщение успещно отправлено!", null)));
        }
    }
}
