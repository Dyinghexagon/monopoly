﻿using Microsoft.EntityFrameworkCore;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Context
{
    public class ApplicationContext(DbContextOptions<ApplicationContext> options) : DbContext(options)
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<GameLobby> GameLobbies { get; set; }

        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }

        public DbSet<T> DbSet<T>() where T : class
        {
            return Set<T>();
        }

        public IQueryable<T> Query<T>() where T : class
        {
            return Set<T>();
        }
    }
}
