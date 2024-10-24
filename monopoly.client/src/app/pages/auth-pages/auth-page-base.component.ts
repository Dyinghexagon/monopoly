import { AfterContentInit, Directive, OnDestroy, OnInit } from "@angular/core";
import { NumberUtils } from "../../utils/number-utils";
import { Subject } from "rxjs";
import { CSSUtils } from "../../utils/css-utils";

@Directive()
export class AuthPageBase implements OnInit, AfterContentInit, OnDestroy {

    protected readonly countCircles: number;
    protected readonly unsubscribe$ = new Subject<void>();

    constructor(countCircles: number = 5) {
        this.countCircles = countCircles;
    }

    public ngOnInit(): void {
        const page = document.querySelector<HTMLElement>(".auth-page-wrapper");
        if (!page) {
            return;
        }

        for(let i = 0; i < this.countCircles; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.style.top = `${NumberUtils.randomNumber(0, page.clientHeight)}px`;
            circle.style.left = `${NumberUtils.randomNumber(0, page.clientWidth)}px`;
            page.append(circle);
        }
    }

    public ngAfterContentInit(): void {
        CSSUtils.setScreenMode("full");
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}

export interface ICirclePosition {
    top: string;
    left: string;
}