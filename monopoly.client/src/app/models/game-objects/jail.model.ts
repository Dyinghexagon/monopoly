import { GameObjectType, IGameObjectBase } from "./game-object.model";

export class Jail implements IGameObjectBase {

    public id: string;
    public type: GameObjectType;
    public name: string;

    constructor() {
        this.id = "jail";
        this.type = "Jail";
        this.name = "ТЮРЬМА";
    }

}