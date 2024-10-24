using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.PlayerService
{
    public interface IPlayerService : IService<Player>
    {
        Task<List<Player>> GetPlayersByLobbyIdAsync(Guid lobbyId);
    }
}
