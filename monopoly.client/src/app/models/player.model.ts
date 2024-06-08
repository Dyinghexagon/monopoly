import { GameObjectUtils } from "../utils/game-object-utils";
import { PlayerNumber } from "./game-objects/game-object.model";
import { Guid } from "guid-typescript";

export class Players {

    private _players: PlayerModel[];

    constructor(players: PlayerModel[]) {
        this._players = players;
    }

    public get Players(): PlayerModel[] {
        return this._players;
    }

}

export class PlayerModel implements IPlayerModel {

    public id: Guid;
    public name: string;
    public number: PlayerNumber;
    public color: string;
    public position: string;

    constructor(name: string, number: PlayerNumber) {
        this.name = name;
        this.number = number;
        this.color = GameObjectUtils.getColorPlayerByType(number);
        this.position = "start";
        this.id = Guid.create();
    }

}

export interface IPlayerModel {
    id: Guid;
    name: string;
    number: PlayerNumber;
    color: string;
    position: string;
}