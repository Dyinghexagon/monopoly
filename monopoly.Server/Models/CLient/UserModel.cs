namespace monopoly.Server.Models.CLient
{
    public class UserModel : Entity
    {
        public string Name { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}