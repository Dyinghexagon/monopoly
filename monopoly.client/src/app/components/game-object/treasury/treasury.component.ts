import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-treasury",
    templateUrl: "./treasury.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class TreasuryComponent extends GameObjectBaseComponent {

    public override name: string = "КАЗНА";

}