import { Component } from "@angular/core";
import { AppState } from "../../../app.state";

@Component({
    selector: "app-cell-purchase-modal",
    templateUrl: "./cell-purchase-modal.component.html",
    styleUrls: [ "./cell-purchase-modal.component.scss" ]
})
export class CellPurchaseModalComponent {

    public playerId: string | null = null;

    constructor(private readonly appState: AppState) {}

    public close(): void {
        this.appState.modalState.closeModal$.next("CellPurchaseModalComponent");
        console.warn("close modal!");
    }

    public yes(): void {
        console.warn("yes");
    }

}