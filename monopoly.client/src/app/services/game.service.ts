import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "../app.config";
import { Observable } from "rxjs";
import { GameLobby } from "../models/game-lobby.model";
import { ICell } from "../models/cell.model";
import { PlayerModel } from "../models/player.model";
import { IDiceValues } from "../models/dice.model";

@Injectable()
export class GameService {

    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {}

    public createLobby(): Observable<GameLobby> {
        return this.http.post<GameLobby>(`${this.config.gameUrl}/create`, {});
    }

    public rollDice(lobbyId: string, playerId: string): Observable<IDiceValues> {
        return this.http.post<IDiceValues>(`${this.config.gameUrl}/rollDice/${lobbyId}/${playerId}`, {});
    }

    public addNewPlayer(lobbyId: string): Observable<PlayerModel[]> {
        return this.http.put<PlayerModel[]>(`${this.config.gameUrl}/player/${lobbyId}`, {});
    }

    public setPlayerPosition(lobbyId: string, playerId: string, diceValues: IDiceValues): Observable<PlayerModel> {
        return this.http.put<PlayerModel>(`${this.config.gameUrl}/setPlayerPosition/${lobbyId}/${playerId}`, diceValues);
    }

    public getLobby(lobbyId: string): Observable<PlayerModel[]> {
        return this.http.get<PlayerModel[]>(`${this.config.gameUrl}/${lobbyId}`);
    }

    public getGameArea(): Observable<ICell[]> {
        return this.http.get<ICell[]>(`${this.config.gameUrl}/cells`);
    }

}