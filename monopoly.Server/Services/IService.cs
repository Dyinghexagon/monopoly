using monopoly.Server.Models;

namespace monopoly.Server.Services
{
    public interface IService<T> where T : class, IEntity
    {
        public Task<T?> GetAsync(Guid id);

        public Task<IList<T>> GetAllAsync();

        public Task<Guid> AddAsync(T entity);

        public Task AddRangeAsync(IEnumerable<T> newEntities);

        public Task DeleteAsync(Guid id);

        public Task UpdateAsync(T newEntity, Guid id);
    }
}
