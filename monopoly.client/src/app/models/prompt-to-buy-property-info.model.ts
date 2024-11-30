import { CellUtils } from "../utils/cell-utils";
import { CellType } from "./cell.model";

export interface IPromptToBuyPropertyInfo {
    targetPlayerId: string;
    ownerId: string | null;
    cellDetailInfo: ICellDetailInfo;
}

export interface ICellDetailInfo {
    id: string;
    type: CellType;
    description: ICellDescriptionBase;
}

export class CellDetailInfo implements ICellDetailInfo {

    public id: string;
    public type: CellType;
    public description: ICellDescriptionBase;

    constructor(cellDetailInfo: ICellDetailInfo) {
        this.id = cellDetailInfo.id;
        this.type = cellDetailInfo.type;
        this.description = CellUtils.isStreet(this.type) ?
            new StreetCellDescription(cellDetailInfo.description as IStreetCellDescription) :
            new CellDescriptionBase(cellDetailInfo.description);
    }

}

export interface ICellDescriptionBase {
    name: string;
}

export interface IStreetCellDescription extends ICellDescriptionBase {
    price: number;
    rentWithoutHouse: number;
    rentWithFullStreet: number;
    rentWithOneHouse: number;
    rentWithTwoHouse: number;
    rentWithThreeHouse: number;
    rentWitFourHouse: number;
    rentWitHotel: number;
    housePrice: number;
    hotelPrice: number;
    deposit: number;
}

export class CellDescriptionBase implements ICellDescriptionBase {

    public name: string;

    constructor(cellDescriptionBase: ICellDescriptionBase) {
        this.name = cellDescriptionBase.name;
    }

}

export class StreetCellDescription implements IStreetCellDescription {

    public price: number;
    public rentWithoutHouse: number;
    public rentWithFullStreet: number;
    public rentWithOneHouse: number;
    public rentWithTwoHouse: number;
    public rentWithThreeHouse: number;
    public rentWitFourHouse: number;
    public rentWitHotel: number;
    public housePrice: number;
    public hotelPrice: number;
    public deposit: number;
    public name: string;

    constructor(streetCellDescription: IStreetCellDescription) {
        this.price = streetCellDescription.price;
        this.rentWithoutHouse = streetCellDescription.rentWithoutHouse;
        this.rentWithFullStreet = streetCellDescription.rentWithFullStreet;
        this.rentWithOneHouse = streetCellDescription.rentWithOneHouse;
        this.rentWithTwoHouse = streetCellDescription.rentWithTwoHouse;
        this.rentWithThreeHouse = streetCellDescription.rentWithThreeHouse;
        this.rentWitFourHouse = streetCellDescription.rentWitFourHouse;
        this.rentWitHotel = streetCellDescription.rentWitHotel;
        this.housePrice = streetCellDescription.housePrice;
        this.hotelPrice = streetCellDescription.hotelPrice;
        this.deposit = streetCellDescription.deposit;
        this.name = streetCellDescription.name;
    }

}