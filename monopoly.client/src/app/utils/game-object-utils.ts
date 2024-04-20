import { StreetType } from "../models/street-object.model";

export class GameObjectUtils {

    public static getColorStreetByNumber(streetType: StreetType): string {
        switch(streetType) {
            case StreetType.Grey:
                return "#E4E4E4";
            case StreetType.Pink:
                return "#E8B5BB";
            case StreetType.Yellow:
                return "#F4ED62";
            case StreetType.Green:
                return "#A2D4A1";
            case StreetType.Blue:
                return "#91C6CB";
            case StreetType.Corn:
                return "#F7D185";
            case StreetType.Orange:
                return "#F2AD2E";
            case StreetType.Red:
                return "#FF6161";
            default:
                return "transparent";
        }
    }

}