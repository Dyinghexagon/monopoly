import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { PlayerModel, Players } from "../../../models/player.model";
import { IDiceValue } from "../../../models/dice.model";
import { IGameObjects } from "../../../models/game-objects.model";

@Component({
    selector: "app-area",
    templateUrl: "./area.component.html",
    styleUrls: [ "./area.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AreaComponent {

    @Input() public players?: Players;
    @Input() public gameObjects!: IGameObjects;

    @Output() public diceValueChange = new EventEmitter<IDiceValue>();

    public getPlayers(gameObjectId: string): PlayerModel[] {
        return this.players?.Players.filter(p => p.position === gameObjectId) ?? [];
    }

}