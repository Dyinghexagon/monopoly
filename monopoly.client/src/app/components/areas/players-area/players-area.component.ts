import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { PlayerModel } from "../../../models/player.model";

@Component({
    selector: "app-players-area",
    templateUrl: "./players-area.component.html",
    styleUrls: [ "./players-area.component.scss" ]
})
export class PlayerAreaComponent implements OnChanges {

    @Input() public position: string | undefined;
    @Input() public players?: PlayerModel[];

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes["players"]) {
            this.players = changes["players"].currentValue;
        }
    }

}