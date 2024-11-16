import { Component, Input, OnInit } from "@angular/core";
import { AppState } from "../../../app.state";
import { CellPurchaseModalRequest } from "../../../states/modal/cell-purchase.state";

@Component({
    selector: "app-cell-purchase-modal",
    templateUrl: "./cell-purchase-modal.component.html",
    styleUrls: [ "./cell-purchase-modal.component.scss" ]
})
export class CellPurchaseModalComponent implements OnInit {

    @Input() public cellPurchaseModalRequest!: CellPurchaseModalRequest;

    public playerId: string | null = null;

    constructor(private readonly appState: AppState) {
    }

    public ngOnInit(): void {
        console.warn(this.cellPurchaseModalRequest);
    }

    public close(): void {
        this.appState.modalState.cellPurchaseModalComponentState.onCancel$.next();
        console.warn("close modal!");
    }

    public yes(): void {
        console.warn("yes");
    }

}