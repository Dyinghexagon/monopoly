namespace monopoly.Server.Models.Exceptions
{
    public class PlayerNotFoundException(Guid playerId) : Exception($"Не найден игрок: {playerId}")
    {
    }
}
