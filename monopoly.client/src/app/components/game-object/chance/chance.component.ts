import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-chance",
    templateUrl: "./chance.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class ChanceComponent extends GameObjectBaseComponent {

    public override name: string = "ШАНС";

}