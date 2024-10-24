export class PlayerModel implements IPlayerModel {

    public id: string;
    public name: string;
    public color: string;
    public balance: number;
    public property: string[];
    public isArrested: boolean;
    public currentPosition: string;

    constructor(data: IPlayerModel) {
        this.id = data.id;
        this.name = data.name;
        this.color = data.color;
        this.balance = data.balance;
        this.property = data.property;
        this.isArrested = data.isArrested;
        this.currentPosition = data.currentPosition;
    }

}

export interface IPlayerModel {
    id: string;
    name: string;
    color: string;
    balance: number;
    property: string[];
    isArrested: boolean;
    currentPosition: string;
}