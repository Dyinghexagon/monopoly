import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-railway",
    templateUrl: "./railway.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class RailwayComponent extends GameObjectBaseComponent {

    public override price: number = 200;

}