namespace monopoly.Server.Models.Client
{
    public class GameLobbyModel : Entity
    {
        public List<PlayerModel> Players { get; set; } = [];
    }
}
