import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { PlayerModel } from "../../../models/player.model";
import { TreasuryCardGeneratedService } from "../../../services/card-generated-services/treasury-card-generated.service";
import { ChanceCardGeneratedService } from "../../../services/card-generated-services/chance-card-generated.service";
import { SignalRService } from "../../../services/signalR.service";
import { ICell } from "../../../models/cell.model";
import { GameService } from "../../../services/game.service";
import { GameDataTransferService } from "../../../services/game-data-transfer.service";
import { Subject, take, takeUntil } from "rxjs";
import { AppState } from "../../../app.state";
import { IDiceValues } from "../../../models/dice.model";
import { CellPurchaseModalRequest } from "../../../states/modal/cell-purchase.state";

@Component({
    selector: "app-area",
    templateUrl: "./area.component.html",
    styleUrls: [ "./area.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AreaComponent implements OnInit, OnChanges, OnDestroy {

    @Input() public players?: PlayerModel[] | null;
    @Input() public cells: ICell[] = [];
    @Input() public lobbyId: string = "";

    @ViewChild("dynamic", { read: ViewContainerRef })

    public currentPlayer?: PlayerModel | null;

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private readonly treasuryCardGeneratedService: TreasuryCardGeneratedService,
        private readonly chanceCardGeneratedService: ChanceCardGeneratedService,
        private readonly signalRService: SignalRService,
        private readonly gameLobbyService: GameService,
        private readonly gameDataTransferService: GameDataTransferService,
        private readonly appState: AppState
    ) {}

    public ngOnInit(): void {
        this.gameDataTransferService.players
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(playersData => {
                this.players = playersData;
                if (!this.players) {
                    return;
                }

                this.currentPlayer = this.players[0];
            });

        this.signalRService.hubConnection.on("MovePlayer", (playerId, position: string) => {
            const player = this.players?.find(player => player.id == playerId);
            if (!player) {
                return;
            }

            player.currentPosition = position;
        });

        this.signalRService.hubConnection.on("PromptToBuyProperty", obj => {
            this.appState.modalState.cellPurchaseModalComponentState.openModal$.next(new CellPurchaseModalRequest(obj));
        });
        /**
         *    this.hubConnection.invoke('SendMessage', playerId, message)
      .catch(err => console.error('Error while sending message:', err));
         */
        this.appState.modalState.cellPurchaseModalComponentState.result$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.signalRService.hubConnection.invoke("SendMessage", "123");
            });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes["players"]) {
            this.players = changes["players"].currentValue;
        }
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public setPlayerPosition(diceValues: IDiceValues): void {
        if (!this.currentPlayer) {
            return;
        }

        this.gameLobbyService.setPlayerPosition(this.lobbyId, this.currentPlayer.id, diceValues)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                console.warn("player position saved!");
            });
    }

    public async sendToMistral(): Promise<void> {
        const card = await this.chanceCardGeneratedService.generateCard();
        console.warn("chance card", card);

        const treasuryCard = await this.treasuryCardGeneratedService.generateCard();
        console.warn("treasury card", treasuryCard);
    }

}