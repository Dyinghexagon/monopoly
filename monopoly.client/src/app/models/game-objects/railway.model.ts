import { Guid } from "guid-typescript";
import { GameObjectType, IGameObjectBase, IWithPrice } from "./game-object.model";

export class Railway implements IGameObjectBase, IWithPrice {

    public id: string;
    public type: GameObjectType;
    public name: string;
    public price: number;

    constructor(name: string) {
        this.id = `railway-${Guid.create()}`;
        this.type = "Railway";
        this.name = name;
        this.price = 200;
    }

}