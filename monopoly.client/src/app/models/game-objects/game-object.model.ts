export interface IGameObjectBase {
    id: string;
    name: string;
    type: GameObjectType;
}

export interface IWithPrice {
    price: number;
}

export type GameObjectType = StreetType | "Treasury" | "IncomeTax" | "Railway" | "Chance" | "Jail" | "Powerhouse" | "Parking" | "WaterSupply" | "Arrested" | "Start";

export type StreetType = "Grey" | "Pink" | "Yellow" | "Green" | "Blue" | "Corn" | "Orange" | "Red";

export enum PlayerNumber {
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth
}