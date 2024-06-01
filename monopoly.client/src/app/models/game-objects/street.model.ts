import { Guid } from "guid-typescript";
import { GameObjectUtils } from "../../utils/game-object-utils";
import { IGameObjectBase, IWithPrice, StreetType } from "./game-object.model";

export class Street implements IStreet {

    public id: string;
    public name: string;
    public price: number;
    public color: string;
    public type: StreetType;

    constructor(name: string, price: number, type: StreetType) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.color = GameObjectUtils.getColorStreetByType(this.type);
        this.id = Guid.create().toString();
    }

}

export interface IStreet extends IGameObjectBase, IWithPrice {
    color: string;
    type: StreetType;
}