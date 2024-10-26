using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.MovePlayerService
{
    public interface IPlayerActionService
    {
        Task<Player> MovePlayer(Guid lobbyId, Guid playerId, string targetPosition);
    }
}
