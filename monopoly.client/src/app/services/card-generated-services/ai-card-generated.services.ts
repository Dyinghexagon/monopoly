import { Injectable } from "@angular/core";
import MistralClient, { ResponseFormat } from "@mistralai/mistralai";
import { CardType, ICardBase } from "../../models/game-cards/card-base.model";
import { ObjectUtil } from "../../utils/object-util";

@Injectable()
export class AICardGeneratedServices<T extends ICardBase> {

    private readonly apiKey = "JOicltv6bQKoGArnlxhMsLtMYbPwdmsz";
    private readonly model = "mistral-large-latest";
    private readonly responseFormat: ResponseFormat = {
        "type": "json_object"
    };

    private readonly client: MistralClient;

    constructor() {
        this.client = new MistralClient(this.apiKey);
    }

    protected async sendRequest(content: string | string[], cardType: CardType): Promise<T> {
        const type = cardType === "ChanceCard" ? "ШАНС" : "КАЗНА";
        const chatResponse = await this.client.chat({
            model: this.model,
            responseFormat: this.responseFormat,
            messages: [
                {
                    role: "user", content: content
                },
                {
                    role: "system", content: `Ты составитель карточек '${type}' для игры монополия.`
                }
            ]
        });

        return ObjectUtil.toCamelCase<T>(JSON.parse(chatResponse.choices[0].message.content));
    }

}