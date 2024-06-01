import { Component } from "@angular/core";
import { PlayerModel, Players } from "../../models/player.model";
import { PlayerNumber } from "../../models/game-objects/game-object.model";

@Component({
    selector: "app-game-page-component",
    templateUrl: "./game-page.component.html",
    styleUrls: [ "./game-page.component.scss" ]
})

export class GamePageComponent {

    public players: Players = new Players([
        new PlayerModel("1", PlayerNumber.Fifth),
        new PlayerModel("2", PlayerNumber.Second),
        new PlayerModel("3", PlayerNumber.Third),
        new PlayerModel("4", PlayerNumber.Fourth),
        new PlayerModel("5", PlayerNumber.Fifth),
        new PlayerModel("6", PlayerNumber.Sixth),
        new PlayerModel("7", PlayerNumber.Seventh),
        new PlayerModel("8", PlayerNumber.Eighth)
    ]);

}