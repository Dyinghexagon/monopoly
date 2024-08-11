namespace monopoly.Server.Models.Backend
{
    public abstract class StreetCellBaseModel(string name, float price, string color) : CellBaseModel($"{Guid.NewGuid():N}", name), ICellWithPrice
    {
        public string Color { get; private set; } = color;
        public float Price { get; set; } = price;
    }

    public class GreyStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#E4E4E4") { }

    public class PinkStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#E8B5BB") { }

    public class YellowStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#F4ED62") { }

    public class GreenStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#A2D4A1") { }

    public class BlueStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#91C6CB") { }

    public class CornStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#F7D185") { }

    public class OrangeStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#F2AD2E") { }

    public class RedStreetCellModel(string name, float price) : StreetCellBaseModel(name, price, "#FF6161") { }
}
