namespace monopoly.Server.Models.Backend
{
    public abstract class StreetCellBase(string name, float price, string color) : CellBase($"{Guid.NewGuid():N}", name), ICellWithPrice
    {
        public string Color { get; private set; } = color;
        public float Price { get; set; } = price;
    }

    public class GreyStreetCell(string name, float price) : StreetCellBase(name, price, "#E4E4E4") { }

    public class PinkStreetCell(string name, float price) : StreetCellBase(name, price, "#E8B5BB") { }

    public class YellowStreetCell(string name, float price) : StreetCellBase(name, price, "#F4ED62") { }

    public class GreenStreetCell(string name, float price) : StreetCellBase(name, price, "#A2D4A1") { }

    public class BlueStreetCell(string name, float price) : StreetCellBase(name, price, "#91C6CB") { }

    public class CornStreetCell(string name, float price) : StreetCellBase(name, price, "#F7D185") { }

    public class OrangeStreetCell(string name, float price) : StreetCellBase(name, price, "#F2AD2E") { }

    public class RedStreetCell(string name, float price) : StreetCellBase(name, price, "#FF6161") { }
}
