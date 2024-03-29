import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(() => {}, (err => {
            if (err instanceof HttpErrorResponse) {
                if (err.status !== 401) {
                    return;
                }
                this.router.navigate(["/login"]);
            }
        })));
    }

}