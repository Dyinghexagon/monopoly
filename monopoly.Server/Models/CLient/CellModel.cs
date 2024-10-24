using monopoly.Server.Models.Backend;

namespace monopoly.Server.Models.Client
{
    public class CellModel(string id, string label, CellType type, float? price = null, string? color = null)
    {
        public string Id { get; set; } = id;
        public string Label { get; set; } = label;
        public float? Price { get; set; } = price;
        public string? Color { get; set; } = color;
        public CellType Type { get; set; } = type;
    }
}
