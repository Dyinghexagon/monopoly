using monopoly.Server.Context;
using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.AccountService
{
    public class AccountService(ApplicationContext context) : BaseEntityService<Account>(context), IAccountService
    {
    }
}
