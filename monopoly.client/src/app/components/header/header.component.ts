import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: [ "./header.component.scss" ]
})

export class HeaderComponent {

    public isMenuOpen: boolean = false;

    public onSidenavClick(): void {
        this.isMenuOpen = !this.isMenuOpen;

        const body = document.querySelector("body");
        body?.classList.toggle("not-scroll", this.isMenuOpen);
    }

}