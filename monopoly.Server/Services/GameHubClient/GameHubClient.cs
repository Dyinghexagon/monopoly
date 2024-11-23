﻿using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Hubs;
using monopoly.Server.Models.SignalR;

namespace monopoly.Server.Services.GameHubClient
{
    public class GameHubClient(IHubContext<GameHub> hub) : IGameHubClient
    {
        private readonly IHubContext<GameHub> _hub = hub;

        public async Task SendMovePlayer(Guid targetPlayerId, string targetCardId)
        {
            await _hub.Clients.All.SendAsync("MovePlayer", targetPlayerId, targetCardId);
        }

        public async Task SendPromptToBuyProperty(PromptToBuyPropertyInfo promptToBuyPropertyInfo)
        {
            await _hub.Clients.All.SendAsync("PromptToBuyProperty", promptToBuyPropertyInfo);
        }
    }
}
