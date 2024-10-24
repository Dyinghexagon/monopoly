using monopoly.Server.Models.Backend;

namespace monopoly.Server.Services.CellService
{
    public class CellService : ICellService
    {
        public List<Cell> GetCells()
        {
            return [
                new Cell(id: "start", label: "СТАРТ!", type: CellType.Start),
                new Cell(id: "grey-street-1", label: "ЖИТНАЯ УЛИЦА", type: CellType.GreyStreet, price: 60.0f, color: "#E4E4E4"),
                new Cell(id: "treasury-1", label: "КАЗНА", type: CellType.Treasury),
                new Cell(id: "grey-street-2", label: "НАГАТИНСКАЯ УЛИЦА", type: CellType.GreyStreet, price: 60.0f, color: "#E4E4E4"),
                new Cell(id: "income-tax-1", label: "НАЛОГ С ДОХОДА", type: CellType.IncomeTax, price: 200.0f),
                new Cell(id: "railway-1", label: "РИЖСКАЯ ЖЕЛЕЗНАЯ ДОРОГА", type: CellType.Railway, price: 200.0f),
                new Cell(id: "pink-street-1", label: "ВАРШАВСКОЕ ШОССЕ", type: CellType.PinkStreet, price: 100.0f, color: "#E8B5BB"),
                new Cell(id: "chance-1", label: "ШАНС", type: CellType.Chance),
                new Cell(id: "pink-street-2", label: "УЛИЦА ОГАРЕВА", type: CellType.PinkStreet, price: 100.0f, color: "#E8B5BB"),
                new Cell(id: "pink-street-3", label: "ПЕРВАЯ ПАРКОВАЯ УЛИЦА", type: CellType.PinkStreet, price: 120.0f, color: "#E8B5BB"),
                new Cell(id: "jail", label: "ТЮРЬМА", type: CellType.Jail),
                new Cell(id: "yellow-street-1", label: "УЛИЦА ПОЛНКА", type: CellType.YellowStreet, price: 140.0f, color: "#F4ED62"),
                new Cell(id: "power-house", label: "ЭЛЕКТРОСТАНЦИЯ", type: CellType.Powerhouse, price: 150.0f),
                new Cell(id: "yellow-street-2", label: "УЛИЦА СРЕТЕНКА", type: CellType.YellowStreet, price: 140.0f, color: "#F4ED62"),
                new Cell(id: "yellow-street-3", label: "РОСТОВСКАЯ НАБЕРЕЖНАЯ", type: CellType.YellowStreet, price: 160.0f, color: "#F4ED62"),
                new Cell(id: "railway-2", label: "КУРСКАЯ ЖЕЛЕЗНАЯ ДОРОГА", type: CellType.Railway, price: 200.0f),
                new Cell(id: "green-street-1", label: "РЯЗАНСКИЙ ПРОСПЕКТ", type: CellType.GreenStreet, price: 180.0f, color: "#A2D4A1"),
                new Cell(id: "treasury-2", label: "КАЗНА", type: CellType.Treasury),
                new Cell(id: "green-street-2", label: "УЛИЦА ВАВИЛОВА", type: CellType.GreenStreet, price: 180.0f, color: "#A2D4A1"),
                new Cell(id: "green-street-3", label: "РУБЛЕВСКОЕ ШОССЕ", type: CellType.GreenStreet, price: 200.0f, color: "#A2D4A1"),
                new Cell(id: "parking", label: "БЕСПЛАТНАЯ ПАРКОВКА", type: CellType.Jail),
                new Cell(id: "blue-street-1", label: "УЛИЦА ТВЕРСКАЯ", type: CellType.BlueStreet, price: 200.0f, color: "#91C6CB"),
                new Cell(id: "chance-2", label: "ШАНС", type: CellType.Chance),
                new Cell(id: "blue-street-2", label: "ПУШКИНСКАЯ УЛИЦА", type: CellType.BlueStreet, price: 210.0f, color: "#91C6CB"),
                new Cell(id: "blue-street-3", label: "ПЛОЩАДЬ МАЯКОВСКОГО", type: CellType.BlueStreet, price: 240.0f, color: "#91C6CB"),
                new Cell(id: "railway-3", label: "КАЗАНСКАЯ ЖЕЛЕЗНАЯ ДОРОГА", type: CellType.Railway, price: 200.0f),
                new Cell(id: "corn-street-1", label: "УЛИЦА ГРУЗИНСКАЯ ВАЛ", type: CellType.CornStreet, price: 260.0f, color: "#F7D185"),
                new Cell(id: "corn-street-2", label: "НОВИНСКИЙ БУЛЬВА", type: CellType.CornStreet, price: 260.0f, color: "#F7D185"),
                new Cell(id: "water-supply", label: "ВОДОПРОВОД", type: CellType.WaterSupply, price: 250.0f),
                new Cell(id: "corn-street-3", label: "СМОЛЕНСКАЯ ПЛОЩАДЬ", type: CellType.CornStreet, price: 280.0f, color: "#F7D185"),
                new Cell(id: "arrested", label: "ВЫ АРЕСТОВАНЫ!", type: CellType.Arrested),
                new Cell(id: "orange-street-1", label: "УЛИЦА ЩУСЕВА", type: CellType.OrangeStreet, price: 300.0f, color: "#F2AD2E"),
                new Cell(id: "orange-street-2", label: "ГОГОЛЕВСКИЙ БУЛЬВАР", type: CellType.OrangeStreet, price: 300.0f, color: "#F2AD2E"),
                new Cell(id: "treasury-3", label: "КАЗНА", type: CellType.Treasury),
                new Cell(id: "orange-street-3", label: "КУТУЗОВСКИЙ ПРОСПЕКТ", type: CellType.OrangeStreet, price: 320.0f, color: "#F2AD2E"),
                new Cell(id: "railway-4", label: "ЛЕНИНГРАДСКАЯ ЖЕЛЕЗНАЯ ДОРОГА", type: CellType.Railway, price: 200.0f),
                new Cell(id: "chance-3", label: "ШАНС", type: CellType.Chance),
                new Cell(id: "red-street-1", label: "УЛИЦА МАЛАЯ БРОННАЯ", type: CellType.RedStreet, price: 350.0f, color: "#FF6161"),
                new Cell(id: "income-tax-2", label: "НАЛОГ С ДОХОДА", type: CellType.IncomeTax, price: 100.0f),
                new Cell(id: "red-street-2", label: "УЛИЦА АРБАТ", type: CellType.RedStreet, price: 400.0f, color: "#FF6161")
            ];
        }
    }
}