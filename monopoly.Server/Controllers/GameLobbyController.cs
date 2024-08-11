using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/gameLobby")]
    public class GameLobbyController(IMapper mapper, ILogger<GameLobbyController> logger) : Controller
    {
        private readonly IMapper _mapper = mapper;
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
    }
}
