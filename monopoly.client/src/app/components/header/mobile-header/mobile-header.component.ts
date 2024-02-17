import { Component } from "@angular/core";

@Component({
    selector: "app-mobile-header",
    templateUrl: "./mobile-header.component.html",
    styleUrls: [ "./mobile-header.component.scss" ]
})

export class MobileHeaderComponent {

    public isMenuOpen: boolean = false;

    public onSidenavClick(): void {
        this.isMenuOpen = !this.isMenuOpen;

        const body = document.querySelector("body");
        body?.classList.toggle("not-scroll", this.isMenuOpen);
        console.warn("MobileHeaderComponent");
    }

}