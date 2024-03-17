import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Subject, takeUntil } from "rxjs";
import { AppState } from "./app.state";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnDestroy {

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private authService: AuthService,
        private appState: AppState,
        private router: Router
    ) {}

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public signOut(): void {
        this.authService.signOut()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.appState.authState.isSignedInRequest$.next(false);
                this.router.navigate(["/login"]);
            });
    }

}
