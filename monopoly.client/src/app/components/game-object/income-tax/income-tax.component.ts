import { Component, Input } from "@angular/core";
import { GameObjectBaseComponent } from "../game-object-base.component";

@Component({
    selector: "app-income-tax",
    templateUrl: "./income-tax.component.html",
    styleUrls: [ "../game-object-base.component.scss" ]
})

export class IncomeTaxComponent extends GameObjectBaseComponent {

    @Input() public price: number = 0;

    public override name: string = "НАЛОГ С ДОХОДА";

}