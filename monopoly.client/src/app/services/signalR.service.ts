import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { IPurchaseOfferDecision } from "../models/purchase-offer-decision.model";

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
    }

    public invokePropertyOffer(purchaseOfferDecision: IPurchaseOfferDecision): void {
        this.hubConnection.invoke("HandlePropertyOfferResponse", purchaseOfferDecision);
    }

}