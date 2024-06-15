import { Injectable } from "@angular/core";
import { CardGeneratedServices, ICardGenerateService } from "./card-generated-services";
import { ITreasuryCard } from "../../models/game-objects/game-cards/treasury-card.model";

@Injectable()
export class TreasuryCardGeneratedService extends CardGeneratedServices<ITreasuryCard> implements ICardGenerateService {

    private readonly content = `
    Составь карту 'КАЗНЫ' для игры в монополию.
    Верните ответ в виде JSON-объекта.
    Диапозон цен: от 60 рублей до 500 рублей включительно
    Диапозон targetPosition: от 1 до 40 включительно
    Ответ должен соответсвовать интерфейсу:
    export interface ITreasuryCard extends ICardBase {
        readonly type: "TreasuryCard";
        action: IMoveAction | IPayAction;
        description: string;
        title: string;
    }
    export interface ICardBase {
        type: CardType;
    }
    export type CardType = "ChanceCard" | "TreasuryCard";
    export interface IMoveAction {
        type: "move" | "moveToJail" | "moveToStart" | "moveToTreasury";
        targetPosition: number;
    }
    export interface IPayAction {
        type: "payEveryone" | "everyonePay" | "payAnotherPlayer" | "anotherPlayerPay";
        price: number;
    }
    `;

    public async generateCard(): Promise<ITreasuryCard> {
        return await this.sendRequest(this.content, "TreasuryCard");
    }

}