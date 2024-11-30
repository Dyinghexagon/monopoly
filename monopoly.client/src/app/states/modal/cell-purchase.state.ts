import { concatMap, of, Subject } from "rxjs";
import { IModalRequest } from "./modal-base.state";
import { CellDetailInfo, ICellDetailInfo, IPromptToBuyPropertyInfo } from "../../models/prompt-to-buy-property-info.model";
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
        this.promptToBuyPropertyInfo = new PromptToBuyPropertyInfo(promptToBuyPropertyInfo);
        this.modalId = "CellPurchaseModalComponent";
    }

}

export class PromptToBuyPropertyInfo implements IPromptToBuyPropertyInfo {

    public targetPlayerId: string;
    public ownerId: string | null;
    public cellDetailInfo: ICellDetailInfo;

    constructor(promptToBuyPropertyInfo: IPromptToBuyPropertyInfo) {
        this.targetPlayerId = promptToBuyPropertyInfo.targetPlayerId;
        this.ownerId = promptToBuyPropertyInfo.ownerId;
        this.cellDetailInfo = new CellDetailInfo(promptToBuyPropertyInfo.cellDetailInfo);
    }

}

export interface ICellPurchaseModalComponentState extends IModalRequest {
    promptToBuyPropertyInfo: IPromptToBuyPropertyInfo;
}