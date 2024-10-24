import { Component } from "@angular/core";
import { CellBaseComponent } from "../cell-base.component";

@Component({
    selector: "app-street-cell",
    templateUrl: "./street-cell.component.html",
    styleUrls: [ "../cell-base.component.scss", "./street-cell.component.scss" ]
})
export class StreetCellComponent extends CellBaseComponent {

    public count: number = 0;

}