import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-arrested",
    templateUrl: "./arrested.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./arrested.component.scss" ]
})

export class ArrestedComponent extends GameObjectBaseComponent {

    public override name: string = "ВЫ АРЕСТОВАНЫ!";

}