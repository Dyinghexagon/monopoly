namespace monopoly.Server.Models.SignalR
{
    public class PromptToBuyPropertyInfo
    {
        public Guid TargetPlayerId { get; set; }
        public required CardInfo CardInfo { get; set; }
    }
}
