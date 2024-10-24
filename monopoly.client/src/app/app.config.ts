import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {

    public get authUrl(): string { return "/api/auth"; }
    public get gameHubUrl(): string { return "https://localhost:7059/gameHub"; }
    public get gameUrl(): string { return "/api/game"; }

}
