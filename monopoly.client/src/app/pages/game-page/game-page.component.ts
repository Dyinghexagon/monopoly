import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { CSSUtils } from "../../utils/css-utils";
import { GameDataTransferService } from "../../services/game-data-transfer.service";
import { Subject, switchMap, takeUntil } from "rxjs";
import { PlayerModel } from "../../models/player.model";
import { ICell } from "../../models/cell.model";
import { GameLobbyService } from "../../services/game-lobby.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-game-page-component",
    templateUrl: "./game-page.component.html",
    styleUrls: [ "./game-page.component.scss" ]
})

export class GamePageComponent implements OnInit, AfterContentInit, OnDestroy {

    public cells: ICell[] = [];
    public players?: PlayerModel[] | null;
    public lobbyId: string = "";

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private readonly gameDataTransferService: GameDataTransferService,
        private readonly gameLobbyService: GameLobbyService
    ) {}

    public ngOnInit(): void {
        this.route.paramMap
            .pipe(
                switchMap(params => params.getAll("id")),
                takeUntil(this.unsubscribe$)
            )
            .subscribe(lobbyId => {
                this.lobbyId = lobbyId;
                this.gameLobbyService.get(lobbyId)
                    .pipe(takeUntil(this.unsubscribe$))
                    .subscribe(responseData => this.gameDataTransferService.playersData = responseData.data.data);
            });

        this.gameLobbyService.getGameArea()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(cells => this.cells = cells.data.data ?? []);

        this.gameDataTransferService.playersData
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(playersData => {
                this.players = playersData;
                console.warn(this.players);
            });
    }

    public ngAfterContentInit(): void {
        CSSUtils.setScreenMode("quarter");
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}