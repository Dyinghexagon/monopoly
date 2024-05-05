import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-powerhouse",
    templateUrl: "./powerhouse.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class PowerhouseComponent extends GameObjectBaseComponent {

    public override name: string = "ЭЛЕКТРОСТАНЦИЯ";
    public price: number = 150;

}