import { AfterContentInit, Component } from "@angular/core";
import { CSSUtils } from "../../utils/css-utils";

@Component({
    selector: "app-create-lobby-page",
    templateUrl: "./create-lobby-page.component.html",
    styleUrls: [ "./create-lobby-page.component.scss" ]
})
export class CreateLobbypageComponent implements AfterContentInit {

    public ngAfterContentInit(): void {
        CSSUtils.setScreenMode("full");
    }

}