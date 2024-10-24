using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using AutoMapper;

using monopoly.Server.Hubs;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.Client;
using monopoly.Server.Services.GameLobbyService;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.PlayerService;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/game")]
    public class GameController(
        IGameLobbyService gameLobbyService,
        ICellService cellService,
        IPlayerService playerService,
        IHubContext<GameHub> hub,
        IMapper mapper,
        ILogger<GameController> logger
    ) : Controller
    {
        private readonly IGameLobbyService _gameLobbyService = gameLobbyService;
        private readonly ICellService _cellService = cellService;
        private readonly IPlayerService _playerService = playerService;

        private readonly IMapper _mapper = mapper;
        private readonly IHubContext<GameHub> _hub = hub;
        private readonly ILogger<GameController> _logger = logger;

        [HttpPost("create")]
        public async Task<IActionResult> CreateLobby()
        {
            var gameLobby = new GameLobby
            {
                Id = Guid.NewGuid()
            };
            gameLobby.Players.Add(new()
            {
                Name = "Игрок #1",
                Color = "Red"
            });

            await _gameLobbyService.AddAsync(gameLobby);

            return Ok(
                new Response<GameLobbyModel>(true, 
                    new ResponseData<GameLobbyModel>(
                        "Лобби создано!",
                         _mapper.Map<GameLobby, GameLobbyModel>(gameLobby)
                    )
                )
            );
        }

        [HttpGet("send")]
        public async Task<IActionResult> Send()
        {
            await _hub.Clients.All.SendAsync("SendFromBackednd", "Messange from Backednd!");
            return Ok(new Response<string>(true, new ResponseData<string>("Сообщение успещно отправлено!", null)));
        }

        [HttpGet("cells")]
        public IActionResult GetGameArea() {
            var gameArea = _cellService.GetCells();
            return Ok(
                new Response<List<CellModel>>(true,
                    new ResponseData<List<CellModel>>(
                        "Данные об игровом поле!",
                         _mapper.Map<List<Cell>, List<CellModel>>(gameArea)
                    )
                )
            );
        }

        [HttpGet("{lobbyId:guid}")]
        public async Task<IActionResult> GetPlayersByLobbyId(Guid lobbyId) {
            var players = await _playerService.GetPlayersByLobbyIdAsync(lobbyId);

            return Ok(
                new Response<List<PlayerModel>>(true,
                    new ResponseData<List<PlayerModel>>(
                        $"Игроки лобби {lobbyId}",
                         _mapper.Map<List<Player>, List<PlayerModel>>(players)
                    )
                )
            );
        }

        [HttpPut("player/{lobbyId:guid}")]
        public async Task<IActionResult> AddNewPlayer(Guid lobbyId)
        {
            var playersBeforeCreate = await _playerService.GetPlayersByLobbyIdAsync(lobbyId);
            if (playersBeforeCreate.Count >= 8)
            {
                return Ok(
                    new Response<List<PlayerModel>>(true,
                        new ResponseData<List<PlayerModel>>(
                            $"В лобби {lobbyId} нельзя больше добавить игроков",
                            _mapper.Map<List<Player>, List<PlayerModel>>(playersBeforeCreate)
                        )
                    )
                );
            }

            var player = new Player()
            {
                Name = $"Игрок #{playersBeforeCreate.Count + 1}",
                Color = "Red",
                GameLobbyId = lobbyId
            };

            await _playerService.AddAsync(player);
            var playersAfterCreate = await _playerService.GetPlayersByLobbyIdAsync(lobbyId);

            return Ok(
                new Response<List<PlayerModel>>(true,
                    new ResponseData<List<PlayerModel>>(
                        $"Добавлен новый игрок в лобби {lobbyId}",
                         _mapper.Map<List<Player>, List<PlayerModel>>(playersAfterCreate)
                    )
                )
            );
        }

        [HttpPut("move/{lobbyId:guid}/{playerId:guid}/{targetPosition}")]
        public async Task<IActionResult> MovePlayer(Guid lobbyId, Guid playerId, string targetPosition)
        {
            var players = await _playerService.GetPlayersByLobbyIdAsync(lobbyId);
            var player = players.Where(x => x.Id == playerId).FirstOrDefault();

            if (player is null) {
                return BadRequest(
                    new Response<string>(true,
                        new ResponseData<string>(
                            $"В лобби {lobbyId} не найден игрок {playerId}",
                             $"В лобби {lobbyId} не найден игрок {playerId}"
                        )
                    )
                );
            }

            player.CurrentPosition = targetPosition;
            await _playerService.UpdateAsync(player, playerId);

            return Ok(
                new Response<PlayerModel>(true,
                    new ResponseData<PlayerModel>(
                        $"В лобби {lobbyId} найден игрок {playerId} и перемещен на {targetPosition}",
                        _mapper.Map<Player, PlayerModel>(player)
                    )
                )
            );
        }
    }
}
