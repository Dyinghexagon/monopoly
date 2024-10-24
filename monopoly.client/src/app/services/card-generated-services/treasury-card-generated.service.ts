import { Injectable } from "@angular/core";
import { ICardGenerateService } from "./card-generate-base.service";
import { ITreasuryCard } from "../../models/game-cards/treasury-card.model";
import { CardGeneratedServices } from "./card-generated.services";

@Injectable()
export class TreasuryCardGeneratedService extends CardGeneratedServices implements ICardGenerateService {

    public async generateCard(): Promise<ITreasuryCard> {
        const response = await fetch(`${this.urlBase}/treasury-cards.json`);
        const data = await response.json();
        const cardNumber = this.getNextCardNumber(data.length);
        return data[cardNumber];
    }

}