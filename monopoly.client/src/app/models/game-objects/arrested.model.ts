import { GameObjectType, IGameObjectBase } from "./game-object.model";

export class Arrested implements IGameObjectBase {

    public id: string;
    public type: GameObjectType;
    public name: string;

    constructor() {
        this.id = "arrested";
        this.type = "Arrested";
        this.name = "ВЫ АРЕСТОВАНЫ!";
    }

}