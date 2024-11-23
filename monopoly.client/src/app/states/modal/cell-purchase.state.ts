import { concatMap, of, Subject } from "rxjs";
import { IModalRequest } from "./modal-base.state";
import { IPromptToBuyPropertyInfo } from "../../models/prompt-to-buy-property-info.model";
import { IPurchaseOfferDecision } from "../../models/purchase-offer-decision.model";

export class CellPurchaseModalComponentState {

    public readonly openModal$ = new Subject<CellPurchaseModalRequest>();

    public readonly onCancelSubject$ = new Subject<IPurchaseOfferDecision>();
    public readonly onCancel$ = this.onCancelSubject$.pipe(concatMap(purchaseOfferDecision => of(purchaseOfferDecision)));

    public readonly onConfirmSubject$ = new Subject<IPurchaseOfferDecision>();
    public readonly onConfirm$ = this.onConfirmSubject$.pipe(concatMap(purchaseOfferDecision => of(purchaseOfferDecision)));

}

export class CellPurchaseModalRequest implements ICellPurchaseModalComponentState {

    public promptToBuyPropertyInfo: IPromptToBuyPropertyInfo;
    public modalId: string;

    constructor(promptToBuyPropertyInfo: IPromptToBuyPropertyInfo) {
        this.promptToBuyPropertyInfo = promptToBuyPropertyInfo;
        this.modalId = "CellPurchaseModalComponent";
    }

}

export interface ICellPurchaseModalComponentState extends IModalRequest {
    promptToBuyPropertyInfo: IPromptToBuyPropertyInfo;
}