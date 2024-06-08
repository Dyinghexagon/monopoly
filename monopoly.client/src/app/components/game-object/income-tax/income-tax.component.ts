import { Component } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";
import { IncomeTax } from "../../../models/game-objects/income-tax.model";

@Component({
    selector: "app-income-tax",
    templateUrl: "./income-tax.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class IncomeTaxComponent extends GameObjectBaseComponent<IncomeTax> {

}