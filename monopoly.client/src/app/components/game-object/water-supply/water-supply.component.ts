import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { WaterSupply } from "../../../models/game-objects/water-supply.model";

@Component({
    selector: "app-water-supply",
    templateUrl: "./water-supply.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class WaterSupplyComponent extends GameObjectBaseComponent<WaterSupply> {

}