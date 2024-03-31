import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthPageBase } from "../auth-page-base.component";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { AppState } from "../../../app.state";
import { takeUntil } from "rxjs";

@Component({
    selector: "app-sign-up-component",
    templateUrl: "./sign-up-page.component.html",
    styleUrls: [ "./sign-up-page.component.scss" ]
})

export class SignUpPageComponent extends AuthPageBase {

    public signUpForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private appState: AppState
    ) {
        super();
        this.signUpForm = new FormGroup({
            userName: new FormControl(""),
            password: new FormControl(""),
            confirmPassword: new FormControl(""),
        });
    }

    public signUp(): void {
        if (!this.signUpForm.valid) {
            return;
        }

        const userName = this.signUpForm.get("userName")?.value;
        const password = this.signUpForm.get("password")?.value;

        this.authService.signUp(
            {
                name: userName,
                password: password
            }
        )
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
                response => {
                    if (response.isSuccess) {
                        console.warn("user sign up success!");
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