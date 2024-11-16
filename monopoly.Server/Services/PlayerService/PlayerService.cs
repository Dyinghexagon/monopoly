using monopoly.Server.Context;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.PlayerService
{
    public class PlayerService(ApplicationContext context) : BaseEntityService<Player>(context), IPlayerService
    {
    }
}
