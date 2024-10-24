import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "../app.config";
import { Observable } from "rxjs";
import { IResponse } from "../models/response.model";
import { GameLobby } from "../models/game-lobby.model";
import { ICell } from "../models/cell.model";
import { PlayerModel } from "../models/player.model";

@Injectable()
export class GameLobbyService {

    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {}

    public create(): Observable<IResponse<GameLobby>> {
        return this.http.post<IResponse<GameLobby>>(`${this.config.gameUrl}/create`, {});
    }

    public addNewPlayer(lobbyId: string): Observable<IResponse<PlayerModel[]>> {
        return this.http.put<IResponse<PlayerModel[]>>(`${this.config.gameUrl}/player/${lobbyId}`, {});
    }

    public movePlayer(lobbyId: string, playerId: string, targetPosition: string): Observable<IResponse<PlayerModel>> {
        return this.http.put<IResponse<PlayerModel>>(`${this.config.gameUrl}/move/${lobbyId}/${playerId}/${targetPosition}`, { headers: { "Content-Type": "application/json" } });
    }

    public get(lobbyId: string): Observable<IResponse<PlayerModel[]>> {
        return this.http.get<IResponse<PlayerModel[]>>(`${this.config.gameUrl}/${lobbyId}`);
    }

    public getGameArea(): Observable<IResponse<ICell[]>> {
        return this.http.get<IResponse<ICell[]>>(`${this.config.gameUrl}/cells`);
    }

}