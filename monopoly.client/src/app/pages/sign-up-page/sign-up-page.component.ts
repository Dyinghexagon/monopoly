import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-sign-up-component",
    templateUrl: "./sign-up-page.component.html",
    styleUrls: [ "./sign-up-page.component.scss" ]
})

export class SignUpPageComponent {

    public profileForm: FormGroup;

    constructor() {
        this.profileForm = new FormGroup({
            userName: new FormControl(""),
            password: new FormControl(""),
            confirmPassword: new FormControl(""),
        });
    }

    public onSubmit(): void {
        console.warn(this.profileForm.get("userName")?.value);
    }

}