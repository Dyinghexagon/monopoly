import { Injectable } from "@angular/core";
import { NumberUtils } from "../../utils/number-utils";

@Injectable()
export class CardGeneratedServices {

    protected prevCardNumber = NaN;
    protected readonly urlBase = "../../../assets/cards";

    protected getNextCardNumber(max: number): number {
        let nextNumber = NumberUtils.randomIntNumber(0, max);
        while(nextNumber === this.prevCardNumber) {
            nextNumber = NumberUtils.randomIntNumber(0, max);
        }

        this.prevCardNumber = nextNumber;
        return nextNumber;
    }

}