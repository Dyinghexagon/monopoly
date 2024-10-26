using Microsoft.EntityFrameworkCore;
using monopoly.Server.Controllers;
using monopoly.Server.Models.Backend;
using monopoly.Server.Repositories;
using System.Collections.Generic;

namespace monopoly.Server.Services.PlayerService
{
    public class PlayerService(IDbRepository dbRepository) : IPlayerService
    {
        private readonly IDbRepository _dbRepository = dbRepository;

        public async Task<Guid> AddAsync(Player entity)
        {
            var id = await _dbRepository.AddAsync(entity);
            await _dbRepository.SaveChangesAsync();
            return id;
        }

        public async Task AddRangeAsync(IEnumerable<Player> newEntities)
        {
            await _dbRepository.AddRangeAsync(newEntities);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            await _dbRepository.DeleteAsync<Account>(id);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task<IList<Player>> GetAllAsync()
        {
            var players = await _dbRepository.GetAllAsync<Player>();
            return [.. players];
        }

        public async Task<Player?> GetAsync(Guid id)
        {
            var player = await _dbRepository.GetAsync<Player>(player => player.Id == id);
            return await player.FirstOrDefaultAsync();
        }

        public async Task UpdateAsync(Player newEntity, Guid id)
        {
            await _dbRepository.UpdateAsync<Player>(newEntity, id);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task<List<Player>> GetPlayersByLobbyIdAsync(Guid lobbyId)
        {
            var players = await _dbRepository.GetAllAsync<Player>();
            return [.. players.Where(player => player.GameLobbyId == lobbyId)];
        }
    }
}
