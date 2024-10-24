import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { PlayerModel } from "../../../models/player.model";
import { IDiceValue } from "../../../models/dice.model";
import { PlayerMoveService } from "../../../services/player-move.service";
import { TreasuryCardGeneratedService } from "../../../services/card-generated-services/treasury-card-generated.service";
import { ChanceCardGeneratedService } from "../../../services/card-generated-services/chance-card-generated.service";
import { SignalRService } from "../../../services/signalR.service";
import { ICell } from "../../../models/cell.model";
import { GameLobbyService } from "../../../services/game-lobby.service";
import { GameDataTransferService } from "../../../services/game-data-transfer.service";

@Component({
    selector: "app-area",
    templateUrl: "./area.component.html",
    styleUrls: [ "./area.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AreaComponent implements OnInit, OnChanges {

    @Input() public players?: PlayerModel[] | null;
    @Input() public cells: ICell[] = [];
    @Input() public lobbyId: string = "";

    public playerMoveService?: PlayerMoveService;

    constructor(
        private readonly treasuryCardGeneratedService: TreasuryCardGeneratedService,
        private readonly chanceCardGeneratedService: ChanceCardGeneratedService,
        private readonly signalRService: SignalRService,
        private readonly gameLobbyService: GameLobbyService,
        private readonly gameDataTransferService: GameDataTransferService,
    ) {
    }

    public ngOnInit(): void {
        this.initPlayerMoveService();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes["players"]) {
            this.players = changes["players"].currentValue;
            this.initPlayerMoveService();
        }
    }

    public makeMove(): void {
        this.signalRService.send().subscribe();
        this.signalRService.sendInvoke();
        const dice = {
            firstValue: this.getRandomNumber(),
            secondValue: this.getRandomNumber()
        };
        console.warn(dice);

        this.diceValueChange(dice);
        if (this.players) {
            const currentPosition = this.playerMoveService?.getTargetPosition(dice);
            this.gameLobbyService.movePlayer(this.lobbyId, this.players[0].id, currentPosition ?? "start")
                .pipe()
                .subscribe(player => console.warn(player));
        }
    }

    private getRandomNumber(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    private initPlayerMoveService(): void {
        if (this.players) {
            this.playerMoveService = new PlayerMoveService(this.players, this.cells);
        }
    }

    public diceValueChange(diceValue: IDiceValue): void {
        if (!this.playerMoveService) {
            return;
        }

        this.playerMoveService.moveCurrentPlayer(diceValue);
    }

    public async sendToMistral(): Promise<void> {
        const card = await this.chanceCardGeneratedService.generateCard();
        console.warn("chance card", card);

        const treasuryCard = await this.treasuryCardGeneratedService.generateCard();
        console.warn("treasury card", treasuryCard);
    }

}