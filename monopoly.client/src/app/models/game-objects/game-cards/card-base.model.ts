export interface ICardBase {
    type: CardType;
}

export type CardType ="ChanceCard" | "TreasuryCard";

export interface IMoveAction {
    type: "move" | "moveToJail" | "moveToStart" | "moveToTreasury";
    targetPosition: number;
}

export interface IPayAction {
    type: "payEveryone" | "everyonePay" | "payAnotherPlayer" | "anotherPlayerPay";
    price: number;
}