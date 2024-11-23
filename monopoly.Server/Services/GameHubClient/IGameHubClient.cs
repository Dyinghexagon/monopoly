using monopoly.Server.Models.SignalR;

namespace monopoly.Server.Services.GameHubClient
{
    public interface IGameHubClient
    {
        Task SendMovePlayer(Guid targetPlayerId, string targetCardId);
        Task SendPromptToBuyProperty(PromptToBuyPropertyInfo promptToBuyPropertyInfo);
    }
}
