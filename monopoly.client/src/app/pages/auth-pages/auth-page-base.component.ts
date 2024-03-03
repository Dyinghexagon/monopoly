import { Directive, OnDestroy } from "@angular/core";
import { NumberUtils } from "../../utils/number-utils";
import { Subject } from "rxjs";

@Directive()
export class AuthPageBase implements OnDestroy {

    protected readonly countCircles: number;
    protected readonly unsubscribe$ = new Subject<void>();

    constructor(countCircles: number = 5) {
        this.countCircles = countCircles;
    }

    protected getCirclesInfo(): ICirclePosition[] {
        const page = document.querySelector<HTMLElement>(".auth-page-wrapper");
        if (!page) {
            return [];
        }

        const circles: ICirclePosition[] = [];
        for(let i = 0; i < this.countCircles; i++) {
            circles.push({
                top: `${NumberUtils.randomNumber(0, page.clientHeight)}px`,
                left: `${NumberUtils.randomNumber(0, page.clientWidth)}px`
            });
        }

        return circles;
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