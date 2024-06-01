import { GameObjectType, IGameObjectBase } from "./game-object.model";

export class Parking implements IGameObjectBase {

    public id: string;
    public type: GameObjectType;
    public name: string;

    constructor() {
        this.id = "parking";
        this.type = "Parking";
        this.name = "БЕСПЛАТНАЯ ПАРКОВКА";
    }

}