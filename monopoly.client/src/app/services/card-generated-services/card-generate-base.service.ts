import { ICardBase } from "../../models/game-objects/game-cards/card-base.model";

export interface ICardGenerateService {
    generateCard(): Promise<ICardBase>;
}