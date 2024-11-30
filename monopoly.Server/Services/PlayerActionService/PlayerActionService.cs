using monopoly.Server.Models.Backend;
using monopoly.Server.Models.Exceptions;
using monopoly.Server.Models.SignalR;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.GameHubClient;
using monopoly.Server.Services.PlayerService;

namespace monopoly.Server.Services.PlayerActionService;

public class PlayerActionService(
    IPlayerService playerService,
    ICellService cellService,
    IGameHubClient gameHubClient,
    ILogger<PlayerActionService> logger
) : IPlayerActionService
{
    private readonly IPlayerService _playerService = playerService;
    private readonly IGameHubClient _gameHubClient = gameHubClient;
    private readonly ICellService _cellService = cellService;

    private readonly List<Cell> _cells = cellService.GetCells();
    private readonly ILogger<PlayerActionService> _logger = logger;


    public async Task ProcessPurchaseDecision(PurchaseOfferDecision purchaseOfferDecision)
    {
        var player = await _playerService.GetAsync(purchaseOfferDecision.BuyerPlayerId) ?? throw new PlayerNotFoundException(purchaseOfferDecision.BuyerPlayerId);
        player.Property.Add(purchaseOfferDecision.PropertyId);
        var card = _cells.FirstOrDefault(c => c.Id == purchaseOfferDecision.PropertyId);
        player.Balance -= card?.Price ?? 0;
        await _playerService.UpdateAsync(player);
    }

    public async Task MovePlayer(Dice firstDice, Dice secondDice, List<Player> players, Guid targetPlayerId)
    {
        var targetPlayer = players.Where(player => player.Id == targetPlayerId).FirstOrDefault() ?? throw new PlayerNotFoundException(targetPlayerId);
        var prevPlayerPositionId = targetPlayer.CurrentPosition;
        var targetCardId = CalculateTargetPosition(firstDice, secondDice, prevPlayerPositionId);

        targetPlayer.CurrentPosition = targetCardId;
        await _playerService.UpdateAsync(targetPlayer);


        await _gameHubClient.SendMovePlayer(targetPlayer.Id, targetCardId, new()
        {
            TargetPlayerId = targetPlayer.Id,
            OwnerId = players.Where(player => player.Property.Contains(targetCardId))?.FirstOrDefault()?.Id,
            CellDetailInfo = _cellService.GetCellDetailInfo(targetCardId)
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
}
