import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { Observable } from "rxjs";
import { IResponse } from "../models/response.model";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";

@Injectable()
export class SignalRService {

    private hubConnection: signalR.HubConnection;

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
            .catch(err => console.log("Error while starting connection: " + err));

        this.hubConnection.on("SendFromBackednd", (message: string) => {
            console.warn(message);
        });
    }

    public send(): Observable<IResponse> {
        console.warn("send");
        return this.http.get<IResponse>(`${this.config.gameUrl}/send`);
    }

    public sendInvoke(): void {
        console.warn("sendInvoke");
        this.hubConnection.invoke("SendMove", "Messange from client!")
            .catch(err => console.error(err));
    }

}
