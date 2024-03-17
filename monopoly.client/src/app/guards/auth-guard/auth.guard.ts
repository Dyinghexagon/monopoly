import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Observable, Subject, map, takeUntil } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

    private readonly unsubscribe$ = new Subject<void>();

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isSignedId();
    }

    private isSignedId(): Observable<boolean> {
        return this.authService.isSignedIn().pipe(map((isSignedId: boolean) => {
            if (!isSignedId) {
                this.router.navigate(["/login"]);
                return false;
            }
            return true;
        }), takeUntil(this.unsubscribe$));
    }

}