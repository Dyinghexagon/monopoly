using monopoly.Server.Context;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.PlayerService
{
    public class PlayerService(ApplicationContext context) : BaseEntityService<Player>(context), IPlayerService
    {
        public async Task<Player?> GetAsync(Guid id)
        {
            var player = await GetAsync(id);
            return player;
        }

        public async Task<List<Player>> GetPlayersByLobbyIdAsync(Guid lobbyId)
        {
            var players = await GetAllAsync();
            return [.. players.Where(player => player.GameLobbyId == lobbyId)];
        }
    }
}
