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

    public onClose(): void {
        this.appState.modalState.cellPurchaseModalComponentState.onCancelSubject$.next({
            isSold: false,
            buyerPlayerId: this.cellPurchaseModalRequest.promptToBuyPropertyInfo.targetPlayerId,
            propertyId: this.cellPurchaseModalRequest.promptToBuyPropertyInfo.cellDetailInfo.id
        });
    }

    public onConfirm(): void {
        this.appState.modalState.cellPurchaseModalComponentState.onConfirmSubject$.next({
            isSold: true,
            buyerPlayerId: this.cellPurchaseModalRequest.promptToBuyPropertyInfo.targetPlayerId,
            propertyId: this.cellPurchaseModalRequest.promptToBuyPropertyInfo.cellDetailInfo.id
        });
    }

}