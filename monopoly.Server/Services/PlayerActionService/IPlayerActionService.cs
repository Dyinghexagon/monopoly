using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.PlayerActionService;

public interface IPlayerActionService
{
    Task MovePlayer(Dice firstDice, Dice secondDice, List<Player> players, Guid targetPlayerId);
}
