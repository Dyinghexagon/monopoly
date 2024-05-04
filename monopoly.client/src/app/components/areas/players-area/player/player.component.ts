import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { PlayerModel } from "../../../../models/player.model";

@Component({
    selector: "app-player",
    templateUrl: "./player.component.html",
    styleUrls: [ "./player.component.scss" ]
})
export class PlayerComponent implements OnChanges {

    @Input() public position: string | undefined;
    @Input() public player?: PlayerModel;
    @Input() public playerNumber: number = 1;

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes["player"]) {
            this.player = changes["player"].currentValue;
        }
    }

}