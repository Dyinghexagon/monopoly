import { Injectable } from "@angular/core";
import MistralClient, { ResponseFormat } from "@mistralai/mistralai";
import { CardType } from "../../models/game-objects/game-cards/card-base.model";

@Injectable()
export class CardGeneratedServices {

    private readonly apiKey = "JOicltv6bQKoGArnlxhMsLtMYbPwdmsz";
    private readonly model = "mistral-large-latest";
    private readonly responseFormat: ResponseFormat = {
        "type": "json_object"
    };

    private readonly client: MistralClient;

    constructor() {
        this.client = new MistralClient(this.apiKey);
    }

    protected async sendRequest(role: "system" | "user" | "assistant", content: string | string[], cardType: CardType): Promise<string> {
        const type = cardType === "ChanceCard" ? "ШАНС" : "КАЗНА";
        const chatResponse = await this.client.chat({
            model: this.model,
            responseFormat: this.responseFormat,
            messages: [
                {
                    role: role, content: content
                },
                {
                    role: "system", content: `Ты составитель карточек '${type}' для игры монополия.`
                }
            ]
        });

        return chatResponse.choices[0].message.content;
    }

}