namespace monopoly.Server.Models.Backend
{
    public abstract class CellBase(string id, string name)
    {
        public string Id { get; protected set; } = id;
        public string Name { get; protected set; } = name;
    }

    public interface ICellWithPrice
    {
        public float Price { get; protected set; }
    }

    public class StartCell() : CellBase("start", "СТАРТ!") { }

    public class TreasuryCell() : CellBase($"treasury-{Guid.NewGuid():N}", "КАЗНА") { }

    public class IncomeTaxCell() : CellBase($"income-tax-{Guid.NewGuid():N}", "НАЛОГ С ДОХОДА"), ICellWithPrice
    {
        public float Price { get; set; } = 100;

    }

    public class RailwayCell(string name) : CellBase($"railway-{Guid.NewGuid():N}", name), ICellWithPrice
    {
        public float Price { get; set; } = 200;
    }

    public class ChanceCell() : CellBase($"chance-{Guid.NewGuid():N}", "ШАНС") { }

    public class JailCell() : CellBase("jail", "ТЮРЬМА") { }

    public class PowerhouseCell() : CellBase("power-house", "ЭЛЕКТРОСТАНЦИЯ"), ICellWithPrice
    {
        public float Price { get; set; } = 150;
    }

    public class ParkingCell() : CellBase("parking", "БЕСПЛАТНАЯ ПАРКОВКА") { }

    public class WaterSupplyCell() : CellBase("water-supply", "ВОДОПРОВОД"), ICellWithPrice
    {
        public float Price { get; set; } = 150;
    }

    public class ArrestedCell() : CellBase("arrested", "ВЫ АРЕСТОВАНЫ!") { }
}
