import { GameObjectType, IGameObjectBase, IWithPrice } from "./game-object.model";

export class Powerhouse implements IGameObjectBase, IWithPrice {

    public id: string;
    public type: GameObjectType;
    public name: string;
    public price: number;

    constructor() {
        this.id = "power-house";
        this.type = "Powerhouse";
        this.name = "ЭЛЕКТРОСТАНЦИЯ";
        this.price = 150;
    }

}