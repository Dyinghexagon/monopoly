import { Arrested } from "../models/game-objects/arrested.model";
import { Chance } from "../models/game-objects/chance.model";
import { StreetType } from "../models/game-objects/game-object.model";
import { IncomeTax } from "../models/game-objects/income-tax.model";
import { Jail } from "../models/game-objects/jail.model";
import { Parking } from "../models/game-objects/parking.model";
import { Powerhouse } from "../models/game-objects/power-house.model";
import { Railway } from "../models/game-objects/railway.model";
import { Start } from "../models/game-objects/start.model";
import { Street } from "../models/game-objects/street.model";
import { Treasury } from "../models/game-objects/treasury.model";
import { WaterSupply } from "../models/game-objects/water-supply.model";

export class GameObjectCreateService {

    public createStart(): Start {
        return new Start();
    }

    public createTreasury(): Treasury {
        return new Treasury();
    }

    public createIncomeTax(): IncomeTax {
        return new IncomeTax();
    }

    public createRailway(name: string): Railway {
        return new Railway(name);
    }

    public createChance(): Chance {
        return new Chance();
    }

    public createArrested(): Arrested {
        return new Arrested();
    }

    public createPowerHouse(): Powerhouse {
        return new Powerhouse();
    }

    public createParking(): Parking {
        return new Parking();
    }

    public createWaterSupply(): WaterSupply {
        return new WaterSupply();
    }

    public createJail(): Jail {
        return new Jail();
    }

    public createStreet(name: string, price: number, type: StreetType): Street {
        return new Street(name, price, type);
    }

}