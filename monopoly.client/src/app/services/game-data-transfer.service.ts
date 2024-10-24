import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { PlayerModel } from "../models/player.model";
import { ICell } from "../models/cell.model";

@Injectable()
export class GameDataTransferService{

    private _cellsSubject = new BehaviorSubject<ICell[] | null>(null);
    private _playersSubject = new BehaviorSubject<PlayerModel[] | null>(null);

    public set cells(cells: ICell[]) {
        this._cellsSubject.next(cells);
    }

    public get cells(): Observable<ICell[] | null> {
        return this._cellsSubject.asObservable();
    }

    public set playersData(players: PlayerModel[]) {
        this._playersSubject.next(players);
    }

    public get playersData(): Observable<PlayerModel[] | null> {
        return this._playersSubject.asObservable();
    }

}