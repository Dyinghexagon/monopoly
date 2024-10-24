using Microsoft.EntityFrameworkCore;
using monopoly.Server.Models.Backend;
using monopoly.Server.Repositories;

namespace monopoly.Server.Services.GameLobbyService
{
    public class GameLobbyService(IDbRepository dbRepository) : IGameLobbyService
    {
        private readonly IDbRepository _dbRepository = dbRepository;

        public async Task<Guid> AddAsync(GameLobby entity)
        {
            var id = await _dbRepository.AddAsync(entity);
            await _dbRepository.SaveChangesAsync();

            return id;
        }

        public async Task AddRangeAsync(IEnumerable<GameLobby> newEntities)
        {
            await _dbRepository.AddRangeAsync(newEntities);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            await _dbRepository.DeleteAsync<GameLobby>(id);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task<IList<GameLobby>> GetAllAsync()
        {
            var gameLobbies = await _dbRepository.GetAllAsync<GameLobby>();
            return [.. gameLobbies];
        }

        public async Task<GameLobby?> GetAsync(Guid id)
        {
            var gameLobby = await _dbRepository.GetAsync<GameLobby>(gameLobby => gameLobby.Id == id);
            var res = await gameLobby.FirstOrDefaultAsync();
            var all = await GetAllAsync();
            var res2 = all.Where(x => x.Id == id).FirstOrDefault();
            return res2;
        }

        public async Task UpdateAsync(GameLobby newEntity, Guid id)
        {
            await _dbRepository.UpdateAsync<GameLobby>(newEntity, id);
            await _dbRepository.SaveChangesAsync();
        }
    }
}
