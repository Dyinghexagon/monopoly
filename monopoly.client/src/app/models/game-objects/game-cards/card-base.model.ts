export interface ICardBase {
    type: CardType;
}

export type CardType = "ChanceCard" | "TreasuryCard";

export interface IMoveAction {
    type: "move" | "moveToJail" | "moveToStart" | "moveToTreasury" | "moveToWaterSupply" | "moveBack";
    targetPosition: number;
}

export interface IPayAction {
    type: "payEveryone" | "everyonePay" | "payAnotherPlayer" |
    "anotherPlayerPay" | "bankPayPlayer" | "playerPayBank" |
    "buildingFees";
    price: number;
}

export interface IGiveCardAction {
    type: "giveCard",
    card: "GetOutOfJail"
}