import { AfterContentInit, Component, OnDestroy } from "@angular/core";
import { CSSUtils } from "../../utils/css-utils";
import { GameLobbyService } from "../../services/game-lobby.service";
import { Subject, takeUntil } from "rxjs";
import { IResponse } from "../../models/response.model";
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
        private readonly gameLobby: GameLobbyService,
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
        this.gameLobby.create()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data: IResponse<GameLobby>) => {
                const gameLobbyData = data.data.data;

                this.gameDataTransferService.playersData = gameLobbyData.players;
                this.router.navigate(["/game", gameLobbyData.id]);
            });
    }

}