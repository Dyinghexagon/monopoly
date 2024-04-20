import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-income-tax",
    templateUrl: "./income-tax.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class IncomeTaxComponent extends GameObjectBaseComponent {

    public override name: string = "НАЛОГ С ДОХОДА";

}