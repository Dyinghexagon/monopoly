using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.SignalR;

namespace monopoly.Server.Hubs
{
    public class GameHub : Hub
    {
        public async Task SendCardPurchaseRequest(Cell cell)
        {
            await Clients.All.SendAsync("ReceiveCardPurchaseRequest", cell);
        }

        /// <summary>
        /// Метод для передачи информации о перемещении игрока
        /// </summary>
        /// <param name="playerId">Id Игрока</param>
        /// <param name="targetCardId">Id карточки, на которую должен переместиться игрок</param>
        /// <returns></returns>
        public async Task MovePlayer(Guid playerId, string targetCardId)
        {
            await Clients.All.SendAsync("MovePlayer", playerId, targetCardId);
        }

        public async Task PromptToBuyProperty(PromptToBuyPropertyInfo promptToBuyPropertyInfo)
        {
            await Clients.All.SendAsync("PromptToBuyProperty", promptToBuyPropertyInfo);
        }

        public async Task SendMessage(string message) {
            await Task.CompletedTask;

            Console.WriteLine(message);
        }
    }
}