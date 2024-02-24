import { Component, EventEmitter, Output } from "@angular/core";
import { AppState } from "../../app.state";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: [ "./header.component.scss" ]
})

export class HeaderComponent {

    @Output() public signOut = new EventEmitter<void>();

    public isMenuOpen: boolean = false;

    constructor(protected appState: AppState) {}

    public onSidenavClick(): void {
        this.isMenuOpen = !this.isMenuOpen;

        const body = document.querySelector("body");
        body?.classList.toggle("not-scroll", this.isMenuOpen);
    }

}