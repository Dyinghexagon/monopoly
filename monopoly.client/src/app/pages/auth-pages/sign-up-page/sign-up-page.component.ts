import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthPageBase } from "../auth-page-base.component";

@Component({
    selector: "app-sign-up-component",
    templateUrl: "./sign-up-page.component.html",
    styleUrls: [ "./sign-up-page.component.scss" ]
})

export class SignUpPageComponent extends AuthPageBase {

    public signUpForm: FormGroup;

    constructor() {
        super();
        this.signUpForm = new FormGroup({
            userName: new FormControl(""),
            password: new FormControl(""),
            confirmPassword: new FormControl(""),
        });
    }

    public onSubmit(): void {
        console.warn(this.signUpForm.get("userName")?.value);
    }

}