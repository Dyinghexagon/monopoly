namespace monopoly.Server.Models.Backend
{
    public class GameAreaModel : Entity
    {
        public List<CellBaseModel> CellModels { get; private set; }

        public GameAreaModel() {
            CellModels =
            [
                new StartCellModel(),
                new GreyStreetCellModel("ЖИТНАЯ УЛИЦА", 60),
                new TreasuryCellModel(),
                new GreyStreetCellModel("НАГАТИНСКАЯ УЛИЦА", 60),
                new IncomeTaxCellModel(),
                new RailwayCellModel("РИЖСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new PinkStreetCellModel("ВАРШАВСКОЕ ШОССЕ", 100),
                new ChanceCellModel(),
                new PinkStreetCellModel("УЛИЦА ОГАРЕВА", 100),
                new PinkStreetCellModel("ПЕРВАЯ ПАРКОВАЯ УЛИЦА", 120),
                new JailCellModel(),
                new YellowStreetCellModel("УЛИЦА ПОЛНКА", 140),
                new PowerhouseCellModel(),
                new YellowStreetCellModel("УЛИЦА СРЕТЕНКА", 140),
                new YellowStreetCellModel("РОСТОВСКАЯ НАБЕРЕЖНАЯ", 160),
                new RailwayCellModel("КУРСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new GreenStreetCellModel("РЯЗАНСКИЙ ПРОСПЕКТ", 180),
                new TreasuryCellModel(),
                new GreenStreetCellModel("УЛИЦА ВАВИЛОВА", 180),
                new GreenStreetCellModel("РУБЛЕВСКОЕ ШОССЕ", 200),
                new ParkingCellModel(),
                new BlueStreetCellModel("УЛИЦА ТВЕРСКАЯ", 200),
                new ChanceCellModel(),
                new BlueStreetCellModel("ПУШКИНСКАЯ УЛИЦА", 210),
                new BlueStreetCellModel("ПЛОЩАДЬ МАЯКОВСКОГО", 240),
                new RailwayCellModel("КАЗАНСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new CornStreetCellModel("УЛИЦА ГРУЗИНСКАЯ ВАЛ", 260),
                new CornStreetCellModel("НОВИНСКИЙ БУЛЬВАР", 260),
                new WaterSupplyCellModel(),
                new CornStreetCellModel("СМОЛЕНСКАЯ ПЛОЩАДЬ", 280),
                new ArrestedCellModel(),
                new OrangeStreetCellModel("УЛИЦА ЩУСЕВА", 300),
                new OrangeStreetCellModel("ГОГОЛЕВСКИЙ БУЛЬВАР", 300),
                new TreasuryCellModel(),
                new OrangeStreetCellModel("КУТУЗОВСКИЙ ПРОСПЕКТ", 320),
                new RailwayCellModel("ЛЕНИНГРАДСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"),
                new ChanceCellModel(),
                new RedStreetCellModel("УЛИЦА МАЛАЯ БРОННАЯ", 350),
                new IncomeTaxCellModel(),
                new RedStreetCellModel("УЛИЦА АРБАТ", 400)
            ];
        }
    }
}
