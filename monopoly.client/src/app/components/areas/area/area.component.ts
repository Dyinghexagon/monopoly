import { Component, Input, ViewEncapsulation } from "@angular/core";
import { GameObjectUtils } from "../../../utils/game-object-utils";
import { StreetGameObjec } from "../../../models/street-object.model";
import { PlayerModel, Players } from "../../../models/player.model";
import { NumberUtils } from "../../../utils/number-utils";

@Component({
    selector: "app-area",
    templateUrl: "./area.component.html",
    styleUrls: [ "./area.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AreaComponent {

    @Input() public players?: Players;

    public gameObjectUtils = GameObjectUtils;

    public greyStreet: StreetGameObjec[] = [
        new StreetGameObjec("ЖИТНАЯ УЛИЦА", 60, "Grey"),
        new StreetGameObjec("НАГАТИНСКАЯ УЛИЦА", 60, "Grey")
    ];

    public pinkStreet: StreetGameObjec[] = [
        new StreetGameObjec("ВАРШАВСКОЕ ШОССЕ", 100, "Pink"),
        new StreetGameObjec("УЛИЦА ОГАРЕВА", 100, "Pink"),
        new StreetGameObjec("ПЕРВАЯ ПАРКОВАЯ УЛИЦА", 120, "Pink")
    ];

    public yellowStreet: StreetGameObjec[] = [
        new StreetGameObjec("УЛИЦА ПОЛНКА", 140, "Yellow"),
        new StreetGameObjec("УЛИЦА СРЕТЕНКА", 140, "Yellow"),
        new StreetGameObjec("РОСТОВСКАЯ НАБЕРЕЖНАЯ", 160, "Yellow")
    ];

    public greenStreet: StreetGameObjec[] = [
        new StreetGameObjec("РЯЗАНСКИЙ ПРОСПЕКТ", 180, "Green"),
        new StreetGameObjec("УЛИЦА ВАВИЛОВА", 180, "Green"),
        new StreetGameObjec("РУБЛЕВСКОЕ ШОССЕ", 200, "Green")
    ];

    public blueStreet: StreetGameObjec[] = [
        new StreetGameObjec("УЛИЦА ТВЕРСКАЯ", 200, "Blue"),
        new StreetGameObjec("ПУШКИНСКАЯ УЛИЦА", 220, "Blue"),
        new StreetGameObjec("ПЛОЩАДЬ МАЯКОВСКОГО", 240, "Blue")
    ];

    public cornStreet: StreetGameObjec[] = [
        new StreetGameObjec("УЛИЦА ГРУЗИНСКАЯ ВАЛ", 260, "Corn"),
        new StreetGameObjec("НОВИНСКИЙ БУЛЬВАР", 260, "Corn"),
        new StreetGameObjec("СМОЛЕНСКАЯ ПЛОЩАДЬ", 280, "Corn")
    ];

    public orangeStreet: StreetGameObjec[] = [
        new StreetGameObjec("УЛИЦА ЩУСЕВА", 300, "Orange"),
        new StreetGameObjec("ГОГОЛЕВСКИЙ БУЛЬВАР", 300, "Orange"),
        new StreetGameObjec("КУТУЗОВСКИЙ ПРОСПЕКТ", 320, "Orange")
    ];

    public redStreet: StreetGameObjec[] = [
        new StreetGameObjec("УЛИЦА МАЛАЯ БРОННАЯ", 350, "Red"),
        new StreetGameObjec("УЛИЦА АРБАТ", 400, "Red")
    ];

    public gameObjectIds: string[] = [
        "start",
        this.greyStreet[0].gameObjectId,
        "treasury-1",
        this.greyStreet[1].gameObjectId,
        "income-tax-1",
        "railway-1",
        this.pinkStreet[0].gameObjectId,
        "chance-1",
        this.pinkStreet[1].gameObjectId,
        this.pinkStreet[2].gameObjectId,
        "jail",
        this.yellowStreet[0].gameObjectId,
        "powerhouse",
        this.yellowStreet[1].gameObjectId,
        this.yellowStreet[2].gameObjectId,
        "railway-2",
        this.greenStreet[0].gameObjectId,
        "treasury-2",
        this.greenStreet[1].gameObjectId,
        this.greenStreet[2].gameObjectId,
        "parking",
        this.blueStreet[0].gameObjectId,
        "chance-2",
        this.blueStreet[1].gameObjectId,
        this.blueStreet[2].gameObjectId,
        "railway-3",
        this.cornStreet[0].gameObjectId,
        this.cornStreet[1].gameObjectId,
        "water-supply",
        this.cornStreet[2].gameObjectId,
        "arrested",
        this.orangeStreet[0].gameObjectId,
        this.orangeStreet[1].gameObjectId,
        "treasury-3",
        this.orangeStreet[2].gameObjectId,
        "railway-4",
        "chance-3",
        this.redStreet[0].gameObjectId,
        "income-tax-2",
        this.redStreet[1].gameObjectId
    ];

    public getPlayers(gameObjectId: string): PlayerModel[] {
        return this.players?.Players.filter(p => p.position === gameObjectId) ?? [];
    }

    public testMovePlayer(): void {
        const firstPlayer = this.players?.Players.find(player => player.name === "1");

        if (!firstPlayer) {
            return;
        }

        const nextNodeValue = Math.round(NumberUtils.randomNumber(1, 6)) + Math.round(NumberUtils.randomNumber(1, 6));
        const currentPosition = this.gameObjectIds.indexOf(firstPlayer.position);
        let targetPosition = currentPosition + nextNodeValue;
        if (targetPosition >= 40) {
            targetPosition -= 40;
        }

        firstPlayer.position = this.gameObjectIds[targetPosition];
    }

}