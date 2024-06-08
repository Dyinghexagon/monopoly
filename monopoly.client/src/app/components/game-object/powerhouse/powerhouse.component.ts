import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Powerhouse } from "../../../models/game-objects/power-house.model";

@Component({
    selector: "app-powerhouse",
    templateUrl: "./powerhouse.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class PowerhouseComponent extends GameObjectBaseComponent<Powerhouse> {

}