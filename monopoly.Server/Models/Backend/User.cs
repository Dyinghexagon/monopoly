namespace monopoly.Server.Models.Backend
{
    public class User : Entity
    {
        public string Name { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = string.Empty;
        public byte[] PasswordSalt { get; set; } = [];
    }
}
