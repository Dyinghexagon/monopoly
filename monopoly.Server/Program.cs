using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using monopoly.Server;
using monopoly.Server.Context;
using monopoly.Server.Hubs;
using monopoly.Server.Repositories;
using monopoly.Server.Services.CellService;
using monopoly.Server.Services.GameLobbyService;
using monopoly.Server.Services.PlayerService;
using monopoly.Server.Services.UserService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder
            .WithOrigins("https://127.0.0.1:4200", "https://localhost:4200") // »спользуйте точные адреса
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()); // ¬ключение кук и токенов
});

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.Events.OnRedirectToLogin = (context) =>
        {
            context.Response.StatusCode = 401;
            return Task.CompletedTask;
        };
    });
builder.Services.AddAutoMapper(typeof(ApplicationMappingProfile));
builder.Services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("PostgreSQL")));

builder.Services.AddScoped<IDbRepository, DbRepository>();

builder.Services.AddTransient<IAccountService, AccountService>();
builder.Services.AddTransient<IGameLobbyService, GameLobbyService>();
builder.Services.AddTransient<ICellService, CellService>();
builder.Services.AddTransient<IPlayerService, PlayerService>();
builder.Services.AddSignalR();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");

app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();
app.MapHub<GameHub>("/gameHub"); 

app.MapFallbackToFile("/index.html");

app.Run();