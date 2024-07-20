import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {

    public get authUrl(): string { return "/api/auth"; }
    public get gameLobyUrl(): string { return "/api/gameLobby"; }

}
