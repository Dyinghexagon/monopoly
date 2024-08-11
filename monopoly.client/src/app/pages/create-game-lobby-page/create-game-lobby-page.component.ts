import { AfterContentInit, Component } from "@angular/core";
import { CSSUtils } from "../../utils/css-utils";

@Component({
    selector: "app-create-game-lobby-page",
    templateUrl: "./create-game-lobby-page.component.html",
    styleUrls: [ "./create-game-lobby-page.component.scss" ]
})
export class CreateGameLobbypageComponent implements AfterContentInit {

    public ngAfterContentInit(): void {
        CSSUtils.setScreenMode("full");
    }

}