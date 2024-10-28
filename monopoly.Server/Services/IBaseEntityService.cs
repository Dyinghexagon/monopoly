using monopoly.Server.Models;
using System.Linq.Expressions;

namespace monopoly.Server.Services
{
    public interface IBaseEntityService<T> where T : class, IEntity
    {
        Task<Guid> AddAsync(T newEntity);
        Task AddRangeAsync(IEnumerable<T> newEntities);
        Task DeleteAsync(Guid id);
        Task<IList<T>> GetAllAsync();
        Task<T?> GetAsync(Guid id);
        Task UpdateAsync(T newEntity);
    }
}
