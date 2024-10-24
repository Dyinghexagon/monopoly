import { Directive, Input } from "@angular/core";
import { PlayerModel } from "../../models/player.model";
import { CellType, ICell } from "../../models/cell.model";

@Directive()
export abstract class CellBaseComponent {

    @Input() public cell: ICell = {
        id: "",
        label: "",
        type: CellType.Start
    };

    @Input() public players?: PlayerModel[] | null;

    public getPlayers(): PlayerModel[] {
        return this.players?.filter(p => p.currentPosition === this.cell.id) ?? [];
    }

}