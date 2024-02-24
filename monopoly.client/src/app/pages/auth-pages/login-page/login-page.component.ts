import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthPageBase } from "../auth-page-base.component";

@Component({
    selector: "app-login-page-component",
    templateUrl: "./login-page.component.html",
    styleUrls: [ "./login-page.component.scss" ]
})

export class LoginPageComponent extends AuthPageBase {

    public loginForm: FormGroup;

    constructor() {
        super();
        this.loginForm = new FormGroup({
            userName: new FormControl(""),
            password: new FormControl(""),
            confirmPassword: new FormControl(""),
        });
    }

    public onSubmit(): void {
        console.warn(this.loginForm.get("userName")?.value);
    }

}