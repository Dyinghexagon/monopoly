namespace monopoly.Server.Models.Backend
{
    public abstract class CellBaseModel(string id, string name)
    {
        public string Id { get; protected set; } = id;
        public string Name { get; protected set; } = name;
    }

    public class StartCellModel() : CellBaseModel("start", "СТАРТ!") { }

    public class TreasuryCellModel() : CellBaseModel($"treasury-{Guid.NewGuid():N}", "КАЗНА") { }

    public class IncomeTaxCellModel() : CellBaseModel($"income-tax-{Guid.NewGuid():N}", "НАЛОГ С ДОХОДА"), ICellWithPrice
    {
        public float Price { get; set; } = 100;

    }

    public class RailwayCellModel(string name) : CellBaseModel($"railway-{Guid.NewGuid():N}", name), ICellWithPrice
    {
        public float Price { get; set; } = 200;
    }

    public class ChanceCellModel() : CellBaseModel($"chance-{Guid.NewGuid():N}", "ШАНС") { }

    public class JailCellModel() : CellBaseModel("jail", "ТЮРЬМА") { }

    public class PowerhouseCellModel() : CellBaseModel("power-house", "ЭЛЕКТРОСТАНЦИЯ"), ICellWithPrice
    {
        public float Price { get; set; } = 150;
    }

    public class ParkingCellModel() : CellBaseModel("parking", "БЕСПЛАТНАЯ ПАРКОВКА") { }

    public class WaterSupplyCellModel() : CellBaseModel("water-supply", "ВОДОПРОВОД"), ICellWithPrice
    {
        public float Price { get; set; } = 150;
    }

    public class ArrestedCellModel() : CellBaseModel("arrested", "ВЫ АРЕСТОВАНЫ!") { }
}
