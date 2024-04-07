import { IStreetObjectModel } from "../models/street-object.model";

export class GameObjectUtils {

    public static getColorStreetByNumber(number: number): string {
        switch(number) {
            case 1:
                return "#FF6161";
            case 2:
                return "#F2AD2E";
            case 3:
                return "#F7D185";
            case 4:
                return "#91C6CB";
            case 5:
                return "#A2D4A1";
            case 6:
                return "#F4ED62";
            case 7:
                return "#E8B5BB";
            case 8:
                return "#E4E4E4";
            default:
                return "transparent";
        }
    }

    public static getStreetInfoByStreetNumber(number: number): IStreetObjectModel {
        return {
            number: number,
            color: GameObjectUtils.getColorStreetByNumber(number),
            price: 0,
            name: ""
        };
    }

}