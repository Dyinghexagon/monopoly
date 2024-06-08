import { Directive, Input } from "@angular/core";
import { PlayerModel } from "../../models/player.model";
import { IGameObjectBase } from "../../models/game-objects/game-object.model";

@Directive()
export abstract class GameObjectBaseComponent<TData extends IGameObjectBase> {

    @Input() public gameObject: IGameObjectBase = {
        id: "",
        name: "",
        type: "Start"
    };

    @Input() public players?: PlayerModel[];

    public get data(): TData {
        return this.gameObject as TData;
    }

    public getPlayers(): PlayerModel[] {
        return this.players?.filter(p => p.position === this.gameObject.id) ?? [];
    }

}