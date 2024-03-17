import { Injectable, OnDestroy } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Subject } from "rxjs";
import { AuthState } from "./states/auth.state";

@Injectable()
export class AppState implements OnDestroy {

    public readonly authState: AuthState;

    private readonly unsubscribe$ = new Subject<void>();

    constructor(private readonly authService: AuthService) {
        this.authState = new AuthState(authService);
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.authState.destroy();
    }

}