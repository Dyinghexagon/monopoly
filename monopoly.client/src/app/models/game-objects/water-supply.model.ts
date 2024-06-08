import { GameObjectType, IGameObjectBase, IWithPrice } from "./game-object.model";

export class WaterSupply implements IGameObjectBase, IWithPrice {

    public id: string;
    public type: GameObjectType;
    public name: string;
    public price: number;

    constructor() {
        this.id = "water-supply";
        this.type = "WaterSupply";
        this.name = "ВОДОПРОВОД";
        this.price = 150;
    }

}