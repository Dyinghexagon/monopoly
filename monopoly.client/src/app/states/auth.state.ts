import { Subject, takeUntil } from "rxjs";
import { AuthService } from "../services/auth.service";

export class AuthState {

    public isSignedInRequest$ = new Subject<boolean>();

    private _isSignedIn: boolean = false;

    private readonly unsubscribe$ = new Subject<void>();

    constructor(private authService: AuthService) {
        this.isSignedInRequest$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((value: boolean) => {
                this._isSignedIn = value;
            });
        this.authService.isSignedIn()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(isSignedIn => this._isSignedIn = isSignedIn);
    }

    public get isSignedIn(): boolean {
        return this._isSignedIn;
    }

    public destroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}