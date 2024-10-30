using Microsoft.EntityFrameworkCore;
using monopoly.Server.Context;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.GameLobbyService
{
    public class GameLobbyService(ApplicationContext context) : BaseEntityService<GameLobby>(context), IGameLobbyService
    {
        private readonly ApplicationContext _context = context;

        public override async Task<IList<GameLobby>> GetAllAsync()
        {   
            return await Task.Run(() => _context.GameLobbies.Include(x => x.Players).ToList());
        }

        public override async Task<GameLobby?> GetAsync(Guid id)
        {
            var gameLobbies = await GetAllAsync();
            return gameLobbies.Where(x => x.Id == id).FirstOrDefault();
        }
    }
}
