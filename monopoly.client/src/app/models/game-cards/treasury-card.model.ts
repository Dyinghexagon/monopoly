import { ICardBase, IGiveCardAction, IMoveAction, IPayAction } from "./card-base.model";

export interface ITreasuryCard extends ICardBase {
    readonly type: "TreasuryCard";
    action: IMoveAction | IPayAction | IGiveCardAction;
    description: string;
    title: string;
}