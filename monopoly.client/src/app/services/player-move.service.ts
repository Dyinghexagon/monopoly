import { IDiceValue } from "../models/dice.model";
import { IGameObjects } from "../models/game-objects.model";
import { PlayerModel, Players } from "../models/player.model";
import { StreetGameObject } from "../models/street-object.model";

export class PlayerMoveService {

    private _currentPlayer: PlayerModel;
    private _players: Players;

    constructor(players: Players) {
        this._players = players;
        this._currentPlayer = this._players.Players[0];
    }

    public get currentPlayer(): PlayerModel {
        return this._currentPlayer;
    }

    private _greyStreet: StreetGameObject[] = [
        new StreetGameObject("ЖИТНАЯ УЛИЦА", 60, "Grey"),
        new StreetGameObject("НАГАТИНСКАЯ УЛИЦА", 60, "Grey")
    ];

    private _pinkStreet: StreetGameObject[] = [
        new StreetGameObject("ВАРШАВСКОЕ ШОССЕ", 100, "Pink"),
        new StreetGameObject("УЛИЦА ОГАРЕВА", 100, "Pink"),
        new StreetGameObject("ПЕРВАЯ ПАРКОВАЯ УЛИЦА", 120, "Pink")
    ];

    private _yellowStreet: StreetGameObject[] = [
        new StreetGameObject("УЛИЦА ПОЛНКА", 140, "Yellow"),
        new StreetGameObject("УЛИЦА СРЕТЕНКА", 140, "Yellow"),
        new StreetGameObject("РОСТОВСКАЯ НАБЕРЕЖНАЯ", 160, "Yellow")
    ];

    private _greenStreet: StreetGameObject[] = [
        new StreetGameObject("РЯЗАНСКИЙ ПРОСПЕКТ", 180, "Green"),
        new StreetGameObject("УЛИЦА ВАВИЛОВА", 180, "Green"),
        new StreetGameObject("РУБЛЕВСКОЕ ШОССЕ", 200, "Green")
    ];

    private _blueStreet: StreetGameObject[] = [
        new StreetGameObject("УЛИЦА ТВЕРСКАЯ", 200, "Blue"),
        new StreetGameObject("ПУШКИНСКАЯ УЛИЦА", 220, "Blue"),
        new StreetGameObject("ПЛОЩАДЬ МАЯКОВСКОГО", 240, "Blue")
    ];

    private _cornStreet: StreetGameObject[] = [
        new StreetGameObject("УЛИЦА ГРУЗИНСКАЯ ВАЛ", 260, "Corn"),
        new StreetGameObject("НОВИНСКИЙ БУЛЬВАР", 260, "Corn"),
        new StreetGameObject("СМОЛЕНСКАЯ ПЛОЩАДЬ", 280, "Corn")
    ];

    private _orangeStreet: StreetGameObject[] = [
        new StreetGameObject("УЛИЦА ЩУСЕВА", 300, "Orange"),
        new StreetGameObject("ГОГОЛЕВСКИЙ БУЛЬВАР", 300, "Orange"),
        new StreetGameObject("КУТУЗОВСКИЙ ПРОСПЕКТ", 320, "Orange")
    ];

    private _redStreet: StreetGameObject[] = [
        new StreetGameObject("УЛИЦА МАЛАЯ БРОННАЯ", 350, "Red"),
        new StreetGameObject("УЛИЦА АРБАТ", 400, "Red")
    ];

    private _gameObjectIds: string[] = [
        "start",
        this._greyStreet[0].gameObjectId,
        "treasury-1",
        this._greyStreet[1].gameObjectId,
        "income-tax-1",
        "railway-1",
        this._pinkStreet[0].gameObjectId,
        "chance-1",
        this._pinkStreet[1].gameObjectId,
        this._pinkStreet[2].gameObjectId,
        "jail",
        this._yellowStreet[0].gameObjectId,
        "powerhouse",
        this._yellowStreet[1].gameObjectId,
        this._yellowStreet[2].gameObjectId,
        "railway-2",
        this._greenStreet[0].gameObjectId,
        "treasury-2",
        this._greenStreet[1].gameObjectId,
        this._greenStreet[2].gameObjectId,
        "parking",
        this._blueStreet[0].gameObjectId,
        "chance-2",
        this._blueStreet[1].gameObjectId,
        this._blueStreet[2].gameObjectId,
        "railway-3",
        this._cornStreet[0].gameObjectId,
        this._cornStreet[1].gameObjectId,
        "water-supply",
        this._cornStreet[2].gameObjectId,
        "arrested",
        this._orangeStreet[0].gameObjectId,
        this._orangeStreet[1].gameObjectId,
        "treasury-3",
        this._orangeStreet[2].gameObjectId,
        "railway-4",
        "chance-3",
        this._redStreet[0].gameObjectId,
        "income-tax-2",
        this._redStreet[1].gameObjectId
    ];

    public get gameObjects(): IGameObjects {
        return {
            greyStreet: this._greyStreet,
            pinkStreet: this._pinkStreet,
            yellowStreet: this._yellowStreet,
            greenStreet: this._greenStreet,
            blueStreet: this._blueStreet,
            cornStreet: this._cornStreet,
            orangeStreet: this._orangeStreet,
            redStreet: this._redStreet,
            gameObjectIds: this._gameObjectIds
        };
    }

    public moveCurrentPlayer(diceValue: IDiceValue): void {
        this._currentPlayer.position = this.getTargetPosition(diceValue);
        const currentPlayerIndex = this._players.Players.indexOf(this._currentPlayer);
        this._currentPlayer = currentPlayerIndex === this._players.Players.length - 1 ? this._players.Players[0] : this._players.Players[currentPlayerIndex + 1];
    }

    private getTargetPosition(diceValue: IDiceValue): string {
        const nextNodeValue = diceValue.firstValue + diceValue.secondValue;
        const currentPositionIndex = this._gameObjectIds.indexOf(this._currentPlayer.position);
        let targetPosition = currentPositionIndex + nextNodeValue;
        if (targetPosition >= 40) {
            targetPosition -= 40;
        }

        return this._gameObjectIds[targetPosition];
    }

}