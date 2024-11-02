import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";

@Injectable()
export class SignalRService {

    public hubConnection: signalR.HubConnection;

    constructor(
        private readonly http: HttpClient,
        private readonly config: AppConfig
    ) {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(config.gameHubUrl, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            }).build();
        this.hubConnection.start()
            .then(() => console.warn("conected start!"))
            .catch(err => console.warn("Error while starting connection: " + err));

        this.hubConnection.on("SendFromBackednd", (message: string) => {
            console.warn(message);
        });
    }

}