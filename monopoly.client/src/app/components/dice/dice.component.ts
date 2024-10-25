import { Component, EventEmitter, Output } from "@angular/core";
import { NumberUtils } from "../../utils/number-utils";
import { IDiceValue } from "../../models/dice.model";

@Component({
    selector: "app-dice",
    templateUrl: "./dice.component.html",
    styleUrls: [ "./dice.component.scss" ]
})

export class DiceComponent {

    public diceValue?: IDiceValue;
    @Output() public diceValueChange = new EventEmitter<IDiceValue>();

    public rollDice2(): void {
        const diceFirst = document.querySelector<HTMLElement>(".dice.first");
        const diceSecond = document.querySelector<HTMLElement>(".dice.second");
        if (!diceFirst || !diceSecond) {
            return;
        }

        const diceFirstValue = NumberUtils.randomIntNumber(1, 6);
        diceFirst.dataset["side"] = diceFirstValue.toString();
        diceFirst.classList.toggle("reRoll");

        const diceSecondValue = NumberUtils.randomIntNumber(1, 6);
        diceSecond.dataset["side"] = diceSecondValue.toString();
        diceSecond.classList.toggle("reRoll");

        this.diceValue = {
            firstValue: diceFirstValue,
            secondValue: diceSecondValue
        };
        this.diceValueChange.emit(this.diceValue);
    }

}