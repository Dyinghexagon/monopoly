namespace monopoly.Server.Models.Backend
{
    public class Cell(string id, string label, CellType type, float? price = null, string? color = null)
    {
        public string Id { get; set; } = id;
        public string Label { get; set; } = label;
        public float? Price { get; set; } = price;
        public string? Color { get; set; } = color;
        public CellType Type { get; set; } = type;
    }

    public enum CellType
    {
        Start,
        Treasury,
        IncomeTax,
        Railway,
        Chance,
        Arrested,
        Powerhouse,
        Parking,
        WaterSupply,
        Jail,
        GreyStreet,
        PinkStreet,
        YellowStreet,
        GreenStreet,
        BlueStreet,
        CornStreet,
        OrangeStreet,
        RedStreet,
    }
}