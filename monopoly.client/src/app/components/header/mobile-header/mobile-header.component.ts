import { Component, EventEmitter, Output } from "@angular/core";
import { AppState } from "../../../app.state";

@Component({
    selector: "app-mobile-header",
    templateUrl: "./mobile-header.component.html",
    styleUrls: [ "./mobile-header.component.scss" ]
})

export class MobileHeaderComponent {

    @Output() public signOut = new EventEmitter<void>();

    public isMenuOpen: boolean = false;

    constructor(protected appState: AppState) {}

    public onSidenavClick(): void {
        this.toggleMenu();
        const body = document.querySelector("body");
        body?.classList.toggle("not-scroll", this.isMenuOpen);
    }

    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    public signOutSelect(): void {
        this.signOut.emit();
        this.toggleMenu();
    }

}