namespace monopoly.Server.Models.Backend
{
    public class GameLobbyModel : Entity
    {
        public List<PlayerModel> Players { get; set; } = new List<PlayerModel>();
        public GameAreaModel Game { get; set; } = new GameAreaModel();
    }
}
