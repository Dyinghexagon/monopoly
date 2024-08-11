using Microsoft.AspNetCore.SignalR;

namespace monopoly.Server.Hubs
{
    public class GameHub : Hub
    {
        public async Task SendMove(string messange)
        {
            await Clients.All.SendAsync("ReceiveMove", messange);
        }
    }
}