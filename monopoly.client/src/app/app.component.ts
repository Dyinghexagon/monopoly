import { Component, ComponentRef, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Subject, takeUntil } from "rxjs";
import { AppState } from "./app.state";
import { Router } from "@angular/router";
import { CellPurchaseModalComponent } from "./components/modals/cell-purchase-modal/cell-purchase-modal.component";
import { CellPurchaseModalRequest } from "./states/modal/cell-purchase.state";

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
        this.appState.modalState.cellPurchaseModalComponentState.openModal$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((cellPurchaseModalRequest: CellPurchaseModalRequest) => {
                this.viewRef.clear();

                this.cellPurchaseModalComponentRef = this.viewRef.createComponent(CellPurchaseModalComponent);
                this.cellPurchaseModalComponentRef.instance.cellPurchaseModalRequest = cellPurchaseModalRequest;
            });

        this.appState.modalState.cellPurchaseModalComponentState.onCancel$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.cellPurchaseModalComponentRef.destroy();
            });

        this.appState.modalState.cellPurchaseModalComponentState.onConfirm$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.cellPurchaseModalComponentRef.destroy();
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
