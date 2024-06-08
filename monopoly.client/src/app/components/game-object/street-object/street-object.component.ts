import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { Street } from "../../../models/game-objects/street.model";

@Component({
    selector: "app-street",
    templateUrl: "./street-object.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./street-object.component.scss" ]
})
export class StreetObjectComponent extends GameObjectBaseComponent<Street> {

    public count: number = 0;

}