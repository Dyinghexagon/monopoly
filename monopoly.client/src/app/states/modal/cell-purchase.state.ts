import { Subject } from "rxjs";
import { IModalRequest } from "./modal-base.state";

export class CellPurchaseModalComponentState {

    public readonly openModal$ = new Subject<CellPurchaseModalRequest>();
    public readonly onCancel$ = new Subject<void>();
    public readonly onConfirm$ = new Subject<void>();
    public readonly result$ = new Subject<void>();

}

export class CellPurchaseModalRequest implements ICellPurchaseModalComponentState {

    public promptToBuyPropertyInfo: object;
    public modalId: string;

    constructor(promptToBuyPropertyInfo: object) {
        this.promptToBuyPropertyInfo = promptToBuyPropertyInfo;
        this.modalId = "CellPurchaseModalComponent";
    }

}

export interface ICellPurchaseModalComponentState extends IModalRequest {
    promptToBuyPropertyInfo: object;
}