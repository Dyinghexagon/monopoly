using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using monopoly.Server.Hubs;

namespace monopoly.Server.Controllers
{
    [ApiController]
    [Route("api/game")]
    public class GameController(IHubContext<GameHub> hub) : Controller
    {
        private readonly IHubContext<GameHub> _hub = hub;

        [HttpGet("send")]
        public async Task<IActionResult> Send()
        {
            await _hub.Clients.All.SendAsync("SendFromBackednd", "Messange from Backednd!");
            return Ok(new Response(true, "Сообщение успещно отправлено!"));
        }
    }
}
