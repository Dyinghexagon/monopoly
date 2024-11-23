using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.SignalR;
using monopoly.Server.Services.PlayerActionService;

namespace monopoly.Server.Hubs
{
    public class GameHub(IPlayerActionService playerActionService) : Hub
    {
        private readonly IPlayerActionService _playerActionService = playerActionService;

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

        /// <summary>
        /// Метод по отправке информации о покупаемой собственности
        /// </summary>
        /// <param name="promptToBuyPropertyInfo">Информация о собственности</param>
        /// <returns></returns>
        public async Task PromptToBuyProperty(PromptToBuyPropertyInfo promptToBuyPropertyInfo)
        {
            await Clients.All.SendAsync("PromptToBuyProperty", promptToBuyPropertyInfo);
        }

        public async Task HandlePropertyOfferResponse(PurchaseOfferDecision purchaseOfferDecision) {
            await _playerActionService.ProcessPurchaseDecision(purchaseOfferDecision);
        }
    }
}