import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthPageBase } from "../auth-page-base.component";
import { takeUntil } from "rxjs";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { AppState } from "../../../app.state";

@Component({
    selector: "app-login-page-component",
    templateUrl: "./login-page.component.html",
    styleUrls: [ "./login-page.component.scss" ]
})

export class LoginPageComponent extends AuthPageBase {

    public loginForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private appState: AppState
    ) {
        super();
        this.loginForm = new FormGroup({
            userName: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required]),
        });
    }

    public signIn(): void {
        if (!this.loginForm.valid) {
            return;
        }

        const userName = this.loginForm.get("userName")?.value;
        const password = this.loginForm.get("password")?.value;

        this.authService.signIn(
            {
                name: userName,
                password: password
            }
        )
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
                response => {
                    if (response.isSuccess) {
                        this.appState.authState.isSignedInRequest$.next(true);
                        this.router.navigate(["/game"]);
                    }
                },
                error => {
                    if (!error?.error?.isSuccess) {
                        console.warn("login error");
                    }
                }
            );
    }

}