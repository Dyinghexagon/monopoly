import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {

    public get authUrl(): string { return "/api/auth"; }

}
