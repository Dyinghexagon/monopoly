import { Component, ComponentRef, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Subject, takeUntil } from "rxjs";
import { AppState } from "./app.state";
import { Router } from "@angular/router";
import { CellPurchaseModalComponent } from "./components/modals/cell-purchase-modal/cell-purchase-modal.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnInit, OnDestroy {

    private cellPurchaseModalComponentRef!: ComponentRef<CellPurchaseModalComponent>;

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private readonly viewRef: ViewContainerRef,
        private authService: AuthService,
        private appState: AppState,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.appState.modalState.openModal$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((modalId: string) => {
                this.viewRef.clear();

                if (modalId == "CellPurchaseModalComponent") {
                    this.cellPurchaseModalComponentRef = this.viewRef.createComponent(CellPurchaseModalComponent);
                }
            });

        this.appState.modalState.closeModal$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((modalId: string) => {
                if (modalId == "CellPurchaseModalComponent") {
                    this.cellPurchaseModalComponentRef.destroy();
                }
            });
    }

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
