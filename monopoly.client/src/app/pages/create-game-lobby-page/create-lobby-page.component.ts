import { AfterContentInit, Component, OnDestroy } from "@angular/core";
import { CSSUtils } from "../../utils/css-utils";
import { GameService } from "../../services/game.service";
import { Subject, takeUntil } from "rxjs";
import { GameLobby } from "../../models/game-lobby.model";
import { Router } from "@angular/router";
import { GameDataTransferService } from "../../services/game-data-transfer.service";

@Component({
    selector: "app-create-lobby-page",
    templateUrl: "./create-lobby-page.component.html",
    styleUrls: [ "./create-lobby-page.component.scss" ]
})
export class CreateLobbyPageComponent implements AfterContentInit, OnDestroy {

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private router: Router,
        private readonly gameLobby: GameService,
        private readonly gameDataTransferService: GameDataTransferService
    ) {}

    public ngAfterContentInit(): void {
        CSSUtils.setScreenMode("full");
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public createLobby(): void {
        this.gameLobby.createLobby()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((lobby: GameLobby) => {
                const gameLobbyData = lobby;

                this.gameDataTransferService.players = gameLobbyData.players;
                this.router.navigate(["/game", gameLobbyData.id]);
            });
    }

}