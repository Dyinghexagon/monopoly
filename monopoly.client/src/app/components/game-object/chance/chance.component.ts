import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Chance } from "../../../models/game-objects/chance.model";

@Component({
    selector: "app-chance",
    templateUrl: "./chance.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class ChanceComponent extends GameObjectBaseComponent<Chance> {

}