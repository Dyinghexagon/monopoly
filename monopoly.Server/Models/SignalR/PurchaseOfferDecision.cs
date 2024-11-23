namespace monopoly.Server.Models.SignalR
{
    public class PurchaseOfferDecision
    {
        public bool IsSold { get; set; }
        public Guid BuyerPlayerId { get; set; }
        public string PropertyId { get; set; } = string.Empty;
    }
}