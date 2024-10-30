import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthPageBase } from "../auth-page-base.component";
import { AuthService } from "../../../services/auth.service";
import { takeUntil } from "rxjs";

@Component({
    selector: "app-sign-up-component",
    templateUrl: "./sign-up-page.component.html",
    styleUrls: [ "./sign-up-page.component.scss" ]
})

export class SignUpPageComponent extends AuthPageBase {

    public signUpForm: FormGroup;

    constructor(private authService: AuthService) {
        super();
        this.signUpForm = new FormGroup({
            accountName: new FormControl(""),
            password: new FormControl(""),
            confirmPassword: new FormControl(""),
        });
    }

    public signUp(): void {
        if (!this.signUpForm.valid) {
            return;
        }

        const accountName = this.signUpForm.get("accountName")?.value;
        const password = this.signUpForm.get("password")?.value;

        this.authService.signUp(
            {
                name: accountName,
                password: password
            }
        )
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
                response => {
                    if (response.isSuccess) {
                        console.warn("User sign up success!");
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