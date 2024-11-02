using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.PlayerActionService;

public interface IPlayerActionService
{
    string CalculateTargetPosition(Dice firstDice, Dice secondDice, string currentPlayerPosition);
}
