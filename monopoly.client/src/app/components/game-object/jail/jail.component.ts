import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-jail",
    templateUrl: "./jail.component.html",
    styleUrls: [ "../game-object-base.component.scss", "./jail.component.scss" ]
})

export class JailComponent extends GameObjectBaseComponent {

    public override name: string = "ТЮРЬМА";

}