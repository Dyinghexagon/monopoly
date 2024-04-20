export class StreetGameObjec implements IStreetGameObject {

    public name: string;
    public price: number;
    public color: string;
    public type: StreetType;

    constructor(data: IStreetGameObject) {
        this.name = data.name;
        this.price = data.price;
        this.type = data.type;
        this.color = data.color;
    }

}

export interface IStreetGameObject extends IGameObjectBase {
    color: string;
    type: StreetType;
}

export interface IGameObjectBase {
    name: string;
    price: number;
}

export enum StreetType {
    Grey,
    Pink,
    Yellow,
    Green,
    Blue,
    Corn,
    Orange,
    Red
}

export enum GameObjectType {
    GreyStreet,
    PinkStreet,
    YellowStreet,
    GreenStreet,
    BlueStreet,
    CornStreet,
    OrangeStreet,
    RedStreet,

    Treasury,//казна
    IncomeTax,//налог
    Railway,//жд
    Chance,//шанс
    Jail,//тюрма
    Powerhouse,//электростанция
    Parking,//бесплатная парковка
    WaterSupply,//водопровод
    Arrested,//вы арестованы
}