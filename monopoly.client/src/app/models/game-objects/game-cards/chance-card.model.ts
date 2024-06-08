import { ICardBase, IMoveAction, IPayAction } from "./card-base.model";

export interface IChanceCard extends ICardBase {
    readonly type: "ChanceCard";
    action: IMoveAction | IPayAction;
    description: string;
    title: string;
}