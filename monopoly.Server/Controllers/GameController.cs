using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using AutoMapper;

using monopoly.Server.Hubs;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.Client;
using monopoly.Server.Services.GameLobbyService;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.PlayerService;
using monopoly.Server.Services.PlayerActionService;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("/api/game")]
    public class GameController(
        IGameLobbyService gameLobbyService,
        ICellService cellService,
        IPlayerService playerService,
        IPlayerActionService movePlayerService,
        IHubContext<GameHub> hub,
        IMapper mapper,
        ILogger<GameController> logger
    ) : Controller
    {
        private readonly IGameLobbyService _gameLobbyService = gameLobbyService;
        private readonly ICellService _cellService = cellService;
        private readonly IPlayerService _playerService = playerService;
        private readonly IPlayerActionService _playerActionService = movePlayerService;

        private readonly IMapper _mapper = mapper;
        private readonly IHubContext<GameHub> _hub = hub;
        private readonly ILogger<GameController> _logger = logger;

        [HttpPost("create")]
        public async Task<IActionResult> CreateLobby()
        {
            var lobby = new GameLobby
            {
                Id = Guid.NewGuid(),
                IsActive = true,
                DateCreated = DateTime.UtcNow,
                DateUpdated = DateTime.UtcNow
            };
            lobby.Players.Add(new()
            {
                Name = "Игрок #1",
                Color = "Red",
                IsActive = true,
                DateCreated = DateTime.UtcNow,
                DateUpdated = DateTime.UtcNow
            });

            await _gameLobbyService.AddAsync(lobby);
            _logger.LogInformation($"Лобби id: {lobby.Id} создано!");
            return Ok(_mapper.Map<GameLobby, GameLobbyModel>(lobby));
        }

        [HttpGet("{lobbyId:guid}")]
        public async Task<IActionResult> GetPlayersByLobbyId(Guid lobbyId) {
            var lobby = await _gameLobbyService.GetAsync(lobbyId);
            _logger.LogInformation($"Игроки лобби {lobbyId}");
            return Ok(_mapper.Map<List<Player>, List<PlayerModel>>(lobby?.Players ?? []));
        }

        [HttpPut("player/{lobbyId:guid}")]
        public async Task<IActionResult> AddNewPlayer(Guid lobbyId)
        {
            var lobby = await _gameLobbyService.GetAsync(lobbyId);
            if (lobby is null)
            {
                _logger.LogInformation($"Лобби id: {lobby} не найдено!");
                return BadRequest();
            }

            var playersBeforeCreate = lobby.Players;
            if (playersBeforeCreate.Count >= 8)
            {
                _logger.LogInformation($"В лобби {lobbyId} нельзя больше добавить игроков");
                return Ok(_mapper.Map<List<Player>, List<PlayerModel>>(playersBeforeCreate));
            }

            var player = new Player()
            {
                Name = $"Игрок #{playersBeforeCreate.Count + 1}",
                Color = "Red",
                GameLobbyId = lobbyId
            };

            lobby.Players.Add(player);

            await _gameLobbyService.UpdateAsync(lobby);
            await _playerService.AddAsync(player);
            
            var playersAfterCreate = lobby.Players;
            _logger.LogInformation($"Добавлен новый игрок в лобби {lobbyId}");

            return Ok(_mapper.Map<List<Player>, List<PlayerModel>>(playersAfterCreate));
        }

        [HttpPut("setPlayerPosition/{lobbyId:guid}/{playerId:guid}")]
        public async Task<IActionResult> MovePlayer(Guid lobbyId, Guid playerId, [FromBody]DiceValues diceValues)
        {
            try
            {
                var lobby = await _gameLobbyService.GetAsync(lobbyId);
                if (lobby is null)
                {
                    _logger.LogInformation($"Лобби id: {lobbyId} не найдено!");
                    return BadRequest();
                }

                var player = lobby.Players.Where(x => x.Id == playerId).FirstOrDefault();
                if (player is null)
                {
                    _logger.LogInformation($"Игрок id: {playerId} не найден!");
                    return BadRequest();
                }

                var firstDice = new Dice() { Value = diceValues.FirstValue };
                var secondDice = new Dice() { Value = diceValues.SecondValue };

                var targetCardId = _playerActionService.CalculateTargetPosition(firstDice, secondDice, player.CurrentPosition);

                _logger.LogInformation($"В лобби {lobbyId} найден игрок {playerId} и перемещен на {targetCardId}");
                player.CurrentPosition = targetCardId;
                await _playerService.UpdateAsync(player);
                await _hub.Clients.All.SendAsync("PlayerMoved", playerId, targetCardId);

                return Ok();
            }
            catch {
                _logger.LogError($"В лобби {lobbyId} не найден игрок {playerId}");
                return BadRequest();
            }
        }

        [HttpGet("cells")]
        public IActionResult GetGameArea()
        {
            var gameArea = _cellService.GetCells();
            _logger.LogInformation("Данные об игровом поле созданы!");
            return Ok(_mapper.Map<List<Cell>, List<CellModel>>(gameArea));
        }

        [HttpPost("rollDice/{lobbyId:guid}/{playerId:guid}")]
        public async Task<IActionResult> RollDice(Guid lobbyId, Guid playerId)
        {
            var firstDice = new Dice();
            firstDice.Roll();
            var secondDice = new Dice();
            secondDice.Roll();

            var lobby = await _gameLobbyService.GetAsync(lobbyId);
            if (lobby is null) {
                _logger.LogInformation($"Лобби id: {lobbyId} не найдено!");
                return BadRequest();
            }

            var player = lobby.Players.Where(x => x.Id == playerId).FirstOrDefault();
            if (player is null)
            {
                _logger.LogInformation($"Игрок id: {playerId} не найден!");
                return BadRequest();
            }

            return Ok(new DiceValues() { 
                FirstValue = firstDice.Value,
                SecondValue = secondDice.Value 
            });
        }
    }
}
