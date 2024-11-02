import { Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { IDiceValues } from "../../models/dice.model";
import { GameService } from "../../services/game.service";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: "app-dice",
    templateUrl: "./dice.component.html",
    styleUrls: [ "./dice.component.scss" ]
})

export class DiceComponent implements OnDestroy {

    @Input() public lobbyId!: string;
    @Input() public playerId!: string;

    @Output() public diceValueChange = new EventEmitter<IDiceValues>();

    private readonly unsubscribe$ = new Subject<void>();

    constructor(private readonly gameService: GameService) {}

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public rollDice(): void {
        this.gameService.rollDice(this.lobbyId, this.playerId)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(diceValue => {
                this.animateRollDice(diceValue);
            });
    }

    public animateRollDice(diceValue: IDiceValues): void {
        const diceFirst = document.querySelector<HTMLElement>(".dice.first");
        const diceSecond = document.querySelector<HTMLElement>(".dice.second");
        if (!diceFirst || !diceSecond) {
            return;
        }

        diceFirst.dataset["side"] = diceValue.firstValue.toString();
        diceFirst.classList.toggle("reRoll");

        diceSecond.dataset["side"] = diceValue.secondValue.toString();
        diceSecond.classList.toggle("reRoll");

        this.diceValueChange.emit(diceValue);
    }

}