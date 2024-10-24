using Microsoft.EntityFrameworkCore;
using monopoly.Server.Models.Backend;
using monopoly.Server.Repositories;

namespace monopoly.Server.Services.UserService
{
    public class AccountService(IDbRepository dbRepository) : IAccountService
    {
        private readonly IDbRepository _dbRepository = dbRepository;

        public async Task<Guid> AddAsync(Account entity)
        {
            var id = await _dbRepository.AddAsync(entity);
            await _dbRepository.SaveChangesAsync();

            return id;
        }

        public async Task AddRangeAsync(IEnumerable<Account> newEntities)
        {
            await _dbRepository.AddRangeAsync(newEntities);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            await _dbRepository.DeleteAsync<Account>(id);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task<IList<Account>> GetAllAsync()
        {
            var users = await _dbRepository.GetAllAsync<Account>();
            return [.. users];
        }

        public async Task<Account?> GetAsync(Guid id)
        {
            var account = await _dbRepository.GetAsync<Account>(account => account.Id == id);
            return await account.FirstOrDefaultAsync();
        }

        public async Task UpdateAsync(Account newEntity, Guid id)
        {
            await _dbRepository.UpdateAsync<Account>(newEntity, id);
            await _dbRepository.SaveChangesAsync();
        }
    }
}
