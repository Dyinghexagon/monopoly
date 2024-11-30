using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Models.Backend;
using monopoly.Server.Models.SignalR;
using monopoly.Server.Services.PlayerActionService;

namespace monopoly.Server.Hubs
{
    public class GameHub(IPlayerActionService playerActionService) : Hub
    {
        private readonly IPlayerActionService _playerActionService = playerActionService;

        public async Task HandlePropertyOfferResponse(PurchaseOfferDecision purchaseOfferDecision) {
            await _playerActionService.ProcessPurchaseDecision(purchaseOfferDecision);
        }
    }
}