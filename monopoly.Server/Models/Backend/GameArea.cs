namespace monopoly.Server.Models.Backend
{
    public class GameArea : Entity
    {
        public List<CellBase> Cells { get; private set; }

        public GameArea() {
            Id = Guid.NewGuid();

            Cells =
            [
                new StartCell(),
                new GreyStreetCell("ЖИТНАЯ УЛИЦА", 60),
                new TreasuryCell(),
                new GreyStreetCell("НАГАТИНСКАЯ УЛИЦА", 60),
                new IncomeTaxCell(),
                new RailwayCell("РИЖСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new PinkStreetCell("ВАРШАВСКОЕ ШОССЕ", 100),
                new ChanceCell(),
                new PinkStreetCell("УЛИЦА ОГАРЕВА", 100),
                new PinkStreetCell("ПЕРВАЯ ПАРКОВАЯ УЛИЦА", 120),
                new JailCell(),
                new YellowStreetCell("УЛИЦА ПОЛНКА", 140),
                new PowerhouseCell(),
                new YellowStreetCell("УЛИЦА СРЕТЕНКА", 140),
                new YellowStreetCell("РОСТОВСКАЯ НАБЕРЕЖНАЯ", 160),
                new RailwayCell("КУРСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new GreenStreetCell("РЯЗАНСКИЙ ПРОСПЕКТ", 180),
                new TreasuryCell(),
                new GreenStreetCell("УЛИЦА ВАВИЛОВА", 180),
                new GreenStreetCell("РУБЛЕВСКОЕ ШОССЕ", 200),
                new ParkingCell(),
                new BlueStreetCell("УЛИЦА ТВЕРСКАЯ", 200),
                new ChanceCell(),
                new BlueStreetCell("ПУШКИНСКАЯ УЛИЦА", 210),
                new BlueStreetCell("ПЛОЩАДЬ МАЯКОВСКОГО", 240),
                new RailwayCell("КАЗАНСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new CornStreetCell("УЛИЦА ГРУЗИНСКАЯ ВАЛ", 260),
                new CornStreetCell("НОВИНСКИЙ БУЛЬВАР", 260),
                new WaterSupplyCell(),
                new CornStreetCell("СМОЛЕНСКАЯ ПЛОЩАДЬ", 280),
                new ArrestedCell(),
                new OrangeStreetCell("УЛИЦА ЩУСЕВА", 300),
                new OrangeStreetCell("ГОГОЛЕВСКИЙ БУЛЬВАР", 300),
                new TreasuryCell(),
                new OrangeStreetCell("КУТУЗОВСКИЙ ПРОСПЕКТ", 320),
                new RailwayCell("ЛЕНИНГРАДСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new ChanceCell(),
                new RedStreetCell("УЛИЦА МАЛАЯ БРОННАЯ", 350),
                new IncomeTaxCell(),
                new RedStreetCell("УЛИЦА АРБАТ", 400)
            ];
        }
    }
}
