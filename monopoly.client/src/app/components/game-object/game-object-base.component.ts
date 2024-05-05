import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { PlayerModel } from "../../models/player.model";

@Directive()
export abstract class GameObjectBaseComponent implements OnChanges {

    @Input() public gameObjectId: string = "";
    @Input() public name: string = "";
    @Input() public players?: PlayerModel[];

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes["players"]) {
            this.players = changes["players"].currentValue;
        }
    }

}