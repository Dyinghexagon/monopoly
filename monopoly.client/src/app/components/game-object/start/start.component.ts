import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Start } from "../../../models/game-objects/start.model";

@Component({
    selector: "app-start",
    templateUrl: "./start.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./start.component.scss" ]
})

export class StartComponent extends GameObjectBaseComponent<Start> {

}