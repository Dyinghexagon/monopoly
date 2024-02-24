import { AfterContentInit, Directive } from "@angular/core";
import { NumberUtils } from "../../components/utils/number-utils";

@Directive()
export class AuthPageBase implements AfterContentInit {

    public ngAfterContentInit(): void {
        const page = document.querySelector<HTMLElement>(".auth-page-wrapper");
        const circleUp = document.getElementById("circle-up");
        const circleDown = document.getElementById("circle-down");
        if (!page || !circleUp || !circleDown) {
            return;
        }

        circleUp.style.top = `${NumberUtils.randomNumber(0, page.clientHeight)}px`;
        circleUp.style.left = `${NumberUtils.randomNumber(0, page.clientWidth)}px`;

        circleDown.style.top = `${NumberUtils.randomNumber(0, page.clientHeight)}px`;
        circleDown.style.left = `${NumberUtils.randomNumber(0, page.clientWidth)}px`;
    }

}