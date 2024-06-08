import { Guid } from "guid-typescript";
import { GameObjectType, IGameObjectBase, IWithPrice } from "./game-object.model";
import { NumberUtils } from "../../utils/number-utils";

export class IncomeTax implements IGameObjectBase, IWithPrice {

    public id: string;
    public type: GameObjectType;
    public name: string;
    public price: number;

    constructor() {
        this.id = `income-tax-${Guid.create()}`;
        this.type = "IncomeTax";
        this.name = "НАЛОГ С ДОХОДА";
        this.price = NumberUtils.randomIntNumber(100, 200);
    }

}