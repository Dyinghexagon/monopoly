using monopoly.Server.Models.Backend;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.PlayerService;

namespace monopoly.Server.Services.MovePlayerService
{
    public class PlayerActionService(
        IPlayerService playerService,
        ICellService cellService
    ) : IPlayerActionService
    {
        private readonly IPlayerService _playerService = playerService;
        private readonly List<Cell> _cells = cellService.GetCells();

        public async Task<Player> MovePlayer(Guid lobbyId, Guid playerId, string targetPosition)
        {
            var players = await _playerService.GetPlayersByLobbyIdAsync(lobbyId);
            var player = players.Where(x => x.Id == playerId).FirstOrDefault();

            if (player is null)
            {
                throw new ArgumentNullException(nameof(player));
            }

            var propertys = players.Where(player => player.Id != playerId).SelectMany(player => player.Property).ToList();
            if (propertys.Contains(targetPosition))
            {
                //ячейка принадлежит кому-то
            }

            player.CurrentPosition = targetPosition;
            var targetCell = _cells.Where(cell => cell.Id == targetPosition).FirstOrDefault();
            Console.Write(targetCell);
            await _playerService.UpdateAsync(player);
            return player;
        }
    }
}
