namespace monopoly.Server.Models.Client
{
    public class PlayerModel : Entity
    {
        public string Name { get; set; } = string.Empty;
        public float Balance { get; set; } = 1500.0f;
        public List<string> Property { get; set; } = [];
        public bool IsArrested { get; set; } = false;
        public string CurrentPosition { get; set; } = "start";
    }
}
