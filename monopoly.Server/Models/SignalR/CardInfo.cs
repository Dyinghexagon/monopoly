namespace monopoly.Server.Models.SignalR
{
    public class CardInfo
    {
        public required string Id { get; set; }
        public Guid? OwnerId { get; set; }
        public float? Price { get; set; }
    }
}
