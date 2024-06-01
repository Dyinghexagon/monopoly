import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Railway } from "../../../models/game-objects/railway.model";

@Component({
    selector: "app-railway",
    templateUrl: "./railway.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class RailwayComponent extends GameObjectBaseComponent<Railway> {

}