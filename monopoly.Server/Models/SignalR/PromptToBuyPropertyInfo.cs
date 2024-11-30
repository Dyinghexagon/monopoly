namespace monopoly.Server.Models.SignalR
{
    public class PromptToBuyPropertyInfo
    {
        public required Guid TargetPlayerId { get; set; }
        public required CellDetailInfo CellDetailInfo { get; set; }
        public Guid? OwnerId { get; set; }
    }
}
