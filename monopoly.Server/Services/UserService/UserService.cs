using monopoly.Server.Models.Backend;
using monopoly.Server.Repositories;

namespace monopoly.Server.Services.UserService
{
    public class UserService(IDbRepository dbRepository) : IUserService
    {
        private readonly IDbRepository _dbRepository = dbRepository;

        public async Task<Guid> AddAsync(User entity)
        {
            var id = await _dbRepository.AddAsync(entity);
            await _dbRepository.SaveChangesAsync();

            return id;
        }

        public async Task AddRangeAsync(IEnumerable<User> newEntities)
        {
            await _dbRepository.AddRangeAsync(newEntities);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            await _dbRepository.DeleteAsync<User>(id);
            await _dbRepository.SaveChangesAsync();
        }

        public async Task<IList<User>> GetAllAsync()
        {
            var users = await _dbRepository.GetAllAsync<User>();
            return users.ToList();
        }

        public async Task<User?> GetAsync(Guid id)
        {
            var user = await _dbRepository.GetAsync<User>(user => user.Id == id);
            return (User?)user;
        }

        public async Task UpdateAsync(User newEntity, Guid id)
        {
            await _dbRepository.UpdateAsync<User>(newEntity, id);
            await _dbRepository.SaveChangesAsync();
        }
    }
}
