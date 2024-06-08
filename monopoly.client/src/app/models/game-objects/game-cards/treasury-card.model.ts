import { ICardBase, IMoveAction, IPayAction } from "./card-base.model";

export interface ITreasuryCard extends ICardBase {
    readonly type: "TreasuryCard";
    action: IMoveAction | IPayAction;
    description: string;
    title: string;
}