import { ICardBase, IGiveCardAction, IMoveAction, IPayAction } from "./card-base.model";

export interface IChanceCard extends ICardBase {
    readonly type: "ChanceCard";
    action: IMoveAction | IPayAction | IGiveCardAction;
    description: string;
    title: string;
}