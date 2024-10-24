export interface ICell {
    id: string;
    label: string;
    price?: number | null;
    color?: string | null;
    type: CellType
}

export enum CellType {
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
    RedStreet
}