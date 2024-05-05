import { Component, Input } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-street",
    templateUrl: "./street-object.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./street-object.component.scss" ]
})
export class StreetObjectComponent extends GameObjectBaseComponent {

    @Input() public color: string = "transperent";
    @Input() public price: number = 0;

}