import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-parking",
    templateUrl: "./parking.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./parking.component.scss" ]
})

export class ParkingComponent extends GameObjectBaseComponent {

    public override name: string = "БЕСПЛАТНАЯ ПАРКОВКА";

}