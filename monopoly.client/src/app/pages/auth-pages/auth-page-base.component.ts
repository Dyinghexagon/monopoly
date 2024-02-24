import { AfterContentInit, Directive, OnDestroy } from "@angular/core";
import { NumberUtils } from "../../utils/number-utils";
import { Subject } from "rxjs";

@Directive()
export class AuthPageBase implements AfterContentInit, OnDestroy {

    protected readonly unsubscribe$ = new Subject<void>();

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

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}