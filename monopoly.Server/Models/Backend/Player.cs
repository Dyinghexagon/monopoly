namespace monopoly.Server.Models.Backend
{
    public class Player : Entity
    {
        public string Name { get; set; } = string.Empty;
        public float Balance { get; set; } = 1500.0f;
        public List<string> Property { get; set; } = [];
        public bool IsArrested { get; set; } = false;
        public string CurrentPosition { get; set; } = "start";
        public string Color { get; set; } = string.Empty;
        public Guid GameLobbyId { get; set; }
        public GameLobby? GameLobby { get; set; }
    }
}
