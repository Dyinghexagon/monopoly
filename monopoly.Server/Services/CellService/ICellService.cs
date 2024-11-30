using monopoly.Server.Models.Backend;
using monopoly.Server.Models.SignalR;

namespace monopoly.Server.Services.CellService
{
    public interface ICellService
    {
        List<Cell> GetCells();
        IEnumerable<CellDetailInfo> GetCellsDetailsInfo();
        CellDetailInfo GetCellDetailInfo(string id);
    }
}
