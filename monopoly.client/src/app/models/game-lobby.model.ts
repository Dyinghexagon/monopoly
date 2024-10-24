import { PlayerModel } from "./player.model";

export class GameLobby {

    public id: string;
    public players: PlayerModel[];

    constructor(data: IGameLobbyModel) {
        this.id = data.id;
        this.players = data.players;
    }

}

export interface IGameLobbyModel {
    id: string;
    players: PlayerModel[];
}