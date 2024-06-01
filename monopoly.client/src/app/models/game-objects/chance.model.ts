import { Guid } from "guid-typescript";
import { GameObjectType, IGameObjectBase } from "./game-object.model";

export class Chance implements IGameObjectBase {

    public id: string;
    public type: GameObjectType;
    public name: string;

    constructor() {
        this.id = `chance-${Guid.create()}`;
        this.type = "Chance";
        this.name = "ШАНС";
    }

}