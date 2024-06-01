import { GameObjectType, IGameObjectBase } from "./game-object.model";

export class Start implements IGameObjectBase {

    public id: string;
    public type: GameObjectType;
    public name: string;

    constructor() {
        this.id = `start`;
        this.type = "Start";
        this.name = "СТАРТ!";
    }

}