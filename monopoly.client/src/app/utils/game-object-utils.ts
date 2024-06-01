import { PlayerNumber, StreetType } from "../models/game-objects/game-object.model";

export class GameObjectUtils {

    public static getColorStreetByType(type: StreetType): string {
        switch(type) {
            case "Grey":
                return "#E4E4E4";
            case "Pink":
                return "#E8B5BB";
            case "Yellow":
                return "#F4ED62";
            case "Green":
                return "#A2D4A1";
            case "Blue":
                return "#91C6CB";
            case "Corn":
                return "#F7D185";
            case "Orange":
                return "#F2AD2E";
            case "Red":
                return "#FF6161";
            default:
                return "transparent";
        }
    }

    public static getColorPlayerByType(number: PlayerNumber): string {
        switch(number) {
            case PlayerNumber.First:
                return "#DEAA88";
            case PlayerNumber.Second:
                return "#BEF574";
            case PlayerNumber.Third:
                return "#E55137";
            case PlayerNumber.Fourth:
                return "#993366";
            case PlayerNumber.Fifth:
                return "#D1E231";
            case PlayerNumber.Sixth:
                return "#D1E231";
            case PlayerNumber.Seventh:
                return "#CDB891";
            case PlayerNumber.Eighth:
                return "#2A6478";
            default:
                return "transparent";
        }
    }

}