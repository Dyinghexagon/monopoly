import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Arrested } from "../../../models/game-objects/arrested.model";

@Component({
    selector: "app-arrested",
    templateUrl: "./arrested.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./arrested.component.scss" ]
})

export class ArrestedComponent extends GameObjectBaseComponent<Arrested> {

}