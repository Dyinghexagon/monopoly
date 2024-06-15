import { Injectable } from "@angular/core";
import { ICardGenerateService } from "./card-generate-base.service";
import { IChanceCard } from "../../models/game-objects/game-cards/chance-card.model";
import { CardGeneratedServices } from "./card-generated.services";

@Injectable()
export class ChanceCardGeneratedService extends CardGeneratedServices implements ICardGenerateService {

    public async generateCard(): Promise<IChanceCard> {
        const response = await fetch(`${this.urlBase}/chance-cards.json`);
        const data = await response.json();
        const cardNumber = this.getNextCardNumber(data.length);
        return data[cardNumber];
    }

}