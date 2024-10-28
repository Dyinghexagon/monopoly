using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.PlayerService
{
    public interface IPlayerService : IBaseEntityService<Player>
    {
        Task<List<Player>> GetPlayersByLobbyIdAsync(Guid lobbyId);
    }
}
