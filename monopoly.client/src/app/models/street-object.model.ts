import { Guid } from "guid-typescript";
import { GameObjectUtils } from "../utils/game-object-utils";
import { IGameObjectBase, StreetType } from "./game-object.model";

export class StreetGameObjec implements IStreetGameObject {

    public id: Guid;
    public name: string;
    public price: number;
    public color: string;
    public type: StreetType;

    constructor(name: string, price: number, type: StreetType, ) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.color = GameObjectUtils.getColorStreetByType(this.type);
        this.id = Guid.create();
    }

    public get gameObjectId(): string {
        return this.type + this.id.toString();
    }

}

export interface IStreetGameObject extends IGameObjectBase {
    color: string;
    price: number;
    type: StreetType;
}