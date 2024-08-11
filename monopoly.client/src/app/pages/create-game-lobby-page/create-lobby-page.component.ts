import { AfterContentInit, Component, OnDestroy } from "@angular/core";
import { CSSUtils } from "../../utils/css-utils";
import { GameLobbyService } from "../../services/game-lobby.service";
import { Subject, takeUntil } from "rxjs";
import { IResponse } from "../../models/response.model";

@Component({
    selector: "app-create-lobby-page",
    templateUrl: "./create-lobby-page.component.html",
    styleUrls: [ "./create-lobby-page.component.scss" ]
})
export class CreateLobbypageComponent implements AfterContentInit, OnDestroy {

    private readonly unsubscribe$ = new Subject<void>();

    constructor(private readonly gameLobby: GameLobbyService) {}

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
            .subscribe((data: IResponse<object>) => {
                console.warn(data);
            });
    }

}