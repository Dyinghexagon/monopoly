import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-start",
    templateUrl: "./start.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./start.component.scss" ]
})

export class StartComponent extends GameObjectBaseComponent {

    public override name: string = "СТАРТ!";

}