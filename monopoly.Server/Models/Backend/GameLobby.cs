namespace monopoly.Server.Models.Backend
{
    public class GameLobby : Entity
    {
        public List<PlayerModel> Players { get; set; } = new List<PlayerModel>();
        public GameArea Game { get; set; } = new GameArea();

        public GameLobby()
        { 
            Id = Guid.NewGuid();
        }
    }
}
