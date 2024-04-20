import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-water-supply",
    templateUrl: "./water-supply.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class WaterSupplyComponent extends GameObjectBaseComponent {

    public override name: string = "ВОДОПРОВОД";
    public override price: number = 150;

}