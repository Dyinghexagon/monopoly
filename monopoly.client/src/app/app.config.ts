import { Injectable } from "@angular/core";
import PROXY_CONFIG from "../proxy.conf.js";

@Injectable()
export class AppConfig {

    public get authUrl(): string { return "/api/auth"; }
    public get gameHubUrl(): string { return `${PROXY_CONFIG[0].target}/gameHub`; }
    public get gameUrl(): string { return "/api/game"; }

    constructor() {
        console.warn(PROXY_CONFIG);
    }

}
