import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "../app.config";
import { Observable } from "rxjs";
import { IResponse } from "../models/response.model";

@Injectable()
export class GameLobbyService {

    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {}

    public create(): Observable<IResponse> {
        return this.http.get<IResponse>(`${this.config.gameLobyUrl}/create`);
    }

}