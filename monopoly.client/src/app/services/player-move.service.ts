import { ICell } from "../models/cell.model";
import { IDiceValue } from "../models/dice.model";
import { PlayerModel } from "../models/player.model";

export class PlayerMoveService {

    private _currentPlayer: PlayerModel;
    private _players: PlayerModel[];
    private _cells: ICell[];

    constructor(players: PlayerModel[], objects: ICell[]) {
        this._players = players;
        this._currentPlayer = this._players[0];
        this._cells = objects;
    }

    public get currentPlayer(): PlayerModel {
        return this._currentPlayer;
    }

    public moveCurrentPlayer(diceValue: IDiceValue): void {
        this._currentPlayer.currentPosition = this.getTargetPosition(diceValue);
        const currentPlayerIndex = this._players.indexOf(this._currentPlayer);
        this._currentPlayer = currentPlayerIndex === this._players.length - 1 ? this._players[0] : this._players[currentPlayerIndex + 1];
    }

    public getTargetPosition(diceValue: IDiceValue): string {
        const nextNodeValue = diceValue.firstValue + diceValue.secondValue;
        const currentPosition = this._cells.find(x => x.id === this._currentPlayer.currentPosition);
        if (!currentPosition) {
            return this._currentPlayer.currentPosition;
        }

        const currentPositionIndex = this._cells.indexOf(currentPosition);
        let targetPosition = currentPositionIndex + nextNodeValue;
        if (targetPosition >= 40) {
            targetPosition -= 40;
        }

        return this._cells[targetPosition].id;
    }

}