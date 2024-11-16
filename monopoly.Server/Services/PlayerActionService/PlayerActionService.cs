using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Hubs;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.Exceptions;
using monopoly.Server.Models.SignalR;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.PlayerService;

namespace monopoly.Server.Services.PlayerActionService;

public class PlayerActionService(
    IPlayerService playerService,
    IHubContext<GameHub> hub,
    ICellService cellService,
    ILogger<PlayerActionService> logger
) : IPlayerActionService
{
    private readonly IPlayerService _playerService = playerService;
    private readonly IHubContext<GameHub> _hub = hub;
    private readonly List<Cell> _cells = cellService.GetCells();
    private readonly ILogger<PlayerActionService> _logger = logger;

    public async Task MovePlayer(Dice firstDice, Dice secondDice, List<Player> players, Guid targetPlayerId)
    {
        var targetPlayer = players.Where(player => player.Id == targetPlayerId).FirstOrDefault() ?? throw new PlayerNotFoundException(targetPlayerId);
        var prevPlayerPositionId = targetPlayer.CurrentPosition;
        var targetCardId = CalculateTargetPosition(firstDice, secondDice, prevPlayerPositionId);

        targetPlayer.CurrentPosition = targetCardId;
        await _playerService.UpdateAsync(targetPlayer);
        await _hub.Clients.All.SendAsync("MovePlayer", targetPlayer.Id, targetCardId);
        await _hub.Clients.All.SendAsync("PromptToBuyProperty", new PromptToBuyPropertyInfo()
        {
            TargetPlayerId = targetPlayer.Id,
            CardInfo = GetCardInfo(players, targetCardId)
        });
        _logger.LogInformation($"Игрок: {targetPlayer.Id} перемещен с {prevPlayerPositionId} на {targetCardId}");
    }
    
    private string CalculateTargetPosition(Dice firstDice, Dice secondDice, string idCurrentPlayerPosition)
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

    private CardInfo GetCardInfo(List<Player> players, string cardId) {
        return new()
        {
            Id = cardId,
            OwnerId = players.Where(player => player.Property.Contains(cardId))?.FirstOrDefault()?.Id,
            Price = _cells.Find(x => x.Id == cardId)?.Price ?? 0.0f,
        };
    }
}
