using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Hubs;
using monopoly.Server.Models.Backend;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.PlayerService;

namespace monopoly.Server.Services.PlayerActionService
{
    public class PlayerActionService(
        IPlayerService playerService,
        IHubContext<GameHub> hubContext,
        ICellService cellService
    ) : IPlayerActionService
    {
        private readonly IPlayerService _playerService = playerService;
        private readonly IHubContext<GameHub> _hubContext = hubContext;
        private readonly List<Cell> _cells = cellService.GetCells();


        public string CalculateTargetPosition(Dice firstDice, Dice secondDice, string idCurrentPlayerPosition)
        {
            var nextNodeValue = firstDice.Value + secondDice.Value;
            var currentPosition = _cells.Where(x => x.Id == idCurrentPlayerPosition).FirstOrDefault();
            if (currentPosition is null)
            {
                return idCurrentPlayerPosition;
            }

            var currentPositionIndex = _cells.IndexOf(currentPosition);
            var targetPosition = currentPositionIndex + nextNodeValue;
            if (targetPosition >= _cells.Count)
            {
                targetPosition -= _cells.Count;
            }

            return _cells[targetPosition].Id;
        }
    }
}
