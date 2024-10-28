using Microsoft.EntityFrameworkCore;
using monopoly.Server.Context;
using monopoly.Server.Models;

namespace monopoly.Server.Services
{
    public class BaseEntityService<T>(ApplicationContext context) : IBaseEntityService<T> where T : class, IEntity
    {
        private readonly ApplicationContext _context = context;

        protected async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public async Task<Guid> AddAsync(T newEntity)
        {
            var entity = await _context.Set<T>().AddAsync(newEntity);
            await SaveChangesAsync();
            return entity.Entity.Id;
        }

        public async Task AddRangeAsync(IEnumerable<T> newEntities)
        {
            await _context.Set<IEntity>().AddRangeAsync(newEntities);
            await SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            var activeEntity = await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id);
            if (activeEntity is not null)
            {
                await Task.Run(() => _context.Update<T>(activeEntity));
                await SaveChangesAsync();
            }
        }

        public virtual async Task<IList<T>> GetAllAsync()
        {
            return await Task.Run(() => _context.Set<T>().ToList());
        }

        public virtual async Task<T?> GetAsync(Guid id)
        {
            return await Task.Run(() => _context.Set<T>().Where(x => x.Id == id && x.IsActive).FirstOrDefault());
        }

        public async Task UpdateAsync(T newEntity)
        {
            await Task.Run(() => _context.Set<T>().Update(newEntity));
            await SaveChangesAsync();
        }
    }
}
