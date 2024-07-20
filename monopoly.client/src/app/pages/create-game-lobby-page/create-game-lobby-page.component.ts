import { AfterContentInit, Component, OnDestroy } from "@angular/core";
import { GameLobbyService } from "../../services/game-lobby.service";
import { Subject, takeUntil } from "rxjs";
import { IResponse } from "../../models/response.model";
import { CSSUtils } from "../../utils/css-utils";

@Component({
    selector: "app-create-game-lobby-page",
    templateUrl: "./create-game-lobby-page.component.html",
    styleUrls: [ "./create-game-lobby-page.component.scss" ]
})

export class CreateGameLobbyPageComponent implements OnDestroy, AfterContentInit {

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private readonly gameLobby: GameLobbyService
    ) {
    }

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
            .subscribe((data: IResponse) => {
                console.warn(data);
            });
    }

}