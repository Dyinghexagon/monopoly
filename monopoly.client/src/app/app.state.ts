import { Injectable, OnDestroy } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Subject } from "rxjs";
import { AuthState } from "./states/auth.state";
import { ModalState } from "./states/modal/modal-base.state";

@Injectable()
export class AppState implements OnDestroy {

    public readonly authState: AuthState;
    public readonly modalState: ModalState;

    private readonly unsubscribe$ = new Subject<void>();

    constructor(private readonly authService: AuthService) {
        this.authState = new AuthState(authService);
        this.modalState = new ModalState();
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.authState.destroy();
    }

}