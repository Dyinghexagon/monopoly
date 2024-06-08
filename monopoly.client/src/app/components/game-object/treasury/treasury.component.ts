import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Treasury } from "../../../models/game-objects/treasury.model";

@Component({
    selector: "app-treasury",
    templateUrl: "./treasury.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class TreasuryComponent extends GameObjectBaseComponent<Treasury> {

}