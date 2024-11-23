export interface IPromptToBuyPropertyInfo {
    targetPlayerId: string;
    cardInfo: ICardInfo;
}

export interface ICardInfo {
    id: string;
    ownerId: string | null;
    price: number;
}