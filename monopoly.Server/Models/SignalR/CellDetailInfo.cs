using monopoly.Server.Models.Backend;

namespace monopoly.Server.Models.SignalR;

public class CellDetailInfo
{
    public required string Id { get; set; }
    public required CellType Type { get; set; }
    public required CellDescriptionBase Description { get; set; }
}

public class CellDescriptionBase(string name) {
    public string Name { get; set; } = name;
}

public class StreetCellDescription(string name, float price, float avgStreetPrice) : CellDescriptionBase(name) {
    public float Price { get; private set; } = price;
    public float RentWithoutHouse { get; private set; } = price * 0.1f;
    public float RentWithFullStreet { get; private set; } = price * 0.2f;
    public float RentWithOneHouse { get; private set; } = price * 0.5f;
    public float RentWithTwoHouse { get; private set; } = price * 1.5f;
    public float RentWithThreeHouse { get; private set; } = price * 3.0f;
    public float RentWitFourHouse { get; private set; } = price * 4.5f;
    public float RentWitHotel { get; private set; } = price * 6f;
    public float HousePrice { get; private set; } = avgStreetPrice * 0.5f;
    public float HotelPrice { get; private set; } = (avgStreetPrice * 0.5f) * 4.0f;
    public float Deposit { get; private set; } = price* 0.5f;

}