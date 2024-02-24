namespace monopoly.Server.Models.CLient
{
    public class UserModel
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
