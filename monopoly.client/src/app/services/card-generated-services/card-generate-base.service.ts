import { ICardBase } from "../../models/game-cards/card-base.model";

export interface ICardGenerateService {
    generateCard(): Promise<ICardBase>;
}