import { Guid } from "guid-typescript";
import { GameObjectType, IGameObjectBase } from "./game-object.model";

export class Treasury implements IGameObjectBase {

    public id: string;
    public type: GameObjectType;
    public name: string;

    constructor() {
        this.id = `treasury-${Guid.create()}`;
        this.type = "Treasury";
        this.name = "КАЗНА";
    }

}