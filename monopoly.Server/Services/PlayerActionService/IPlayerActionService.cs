using monopoly.Server.Models.Backend;
using monopoly.Server.Models.SignalR;

namespace monopoly.Server.Services.PlayerActionService;

public interface IPlayerActionService
{
    Task MovePlayer(Dice firstDice, Dice secondDice, List<Player> players, Guid targetPlayerId);
    Task ProcessPurchaseDecision(PurchaseOfferDecision purchaseOfferDecision);
}
