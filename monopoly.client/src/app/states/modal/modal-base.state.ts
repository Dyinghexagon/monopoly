import { CellPurchaseModalComponentState } from "./cell-purchase.state";

export class ModalState {

    public readonly cellPurchaseModalComponentState: CellPurchaseModalComponentState;

    constructor() {
        this.cellPurchaseModalComponentState = new CellPurchaseModalComponentState();
    }

}

export interface IModalRequest {
    modalId: string;
}