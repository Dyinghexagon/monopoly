import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NumberUtils } from "../../utils/number-utils";
import { IDiceValue } from "../../models/dice.model";

@Component({
    selector: "app-dice",
    templateUrl: "./dice.component.html",
    styleUrls: [ "./dice.component.scss" ]
})

export class DiceComponent {

    @Input() public diceValue?: IDiceValue;
    @Output() public diceValueChange = new EventEmitter<IDiceValue>();

    public rollDice(): void {
        this.diceValue = {
            firstValue: NumberUtils.randomIntNumber(1, 6),
            secondValue: NumberUtils.randomIntNumber(1, 6)
        };
        this.diceValueChange.emit(this.diceValue);
    }

}