import { IDiceValue } from "../models/dice.model";
import { IGameObjectBase } from "../models/game-objects/game-object.model";
import { PlayerModel, Players } from "../models/player.model";

export class PlayerMoveService {

    private _currentPlayer: PlayerModel;
    private _players: Players;
    private _objects: IGameObjectBase[];

    constructor(players: Players, objects: IGameObjectBase[]) {
        this._players = players;
        this._currentPlayer = this._players.Players[0];
        this._objects = objects;
    }

    public get currentPlayer(): PlayerModel {
        return this._currentPlayer;
    }

    public moveCurrentPlayer(diceValue: IDiceValue): void {
        this._currentPlayer.position = this.getTargetPosition(diceValue);
        const currentPlayerIndex = this._players.Players.indexOf(this._currentPlayer);
        this._currentPlayer = currentPlayerIndex === this._players.Players.length - 1 ? this._players.Players[0] : this._players.Players[currentPlayerIndex + 1];
    }

    private getTargetPosition(diceValue: IDiceValue): string {
        const nextNodeValue = diceValue.firstValue + diceValue.secondValue;
        const currentPosition = this._objects.find(x => x.id === this._currentPlayer.position);
        if (!currentPosition) {
            return this._currentPlayer.position;
        }

        const currentPositionIndex = this._objects.indexOf(currentPosition);
        let targetPosition = currentPositionIndex + nextNodeValue;
        if (targetPosition >= 40) {
            targetPosition -= 40;
        }

        return this._objects[targetPosition].id;
    }

}