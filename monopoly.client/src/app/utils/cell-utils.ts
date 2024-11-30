import { CellType } from "../models/cell.model";

export class CellUtils {

    private static _cellType = CellType;

    public static isStreet(cellType: CellType): boolean {
        return cellType == this._cellType.GreyStreet ||
            cellType == this._cellType.PinkStreet ||
            cellType == this._cellType.YellowStreet ||
            cellType == this._cellType.GreenStreet ||
            cellType == this._cellType.CornStreet ||
            cellType == this._cellType.OrangeStreet ||
            cellType == this._cellType.RedStreet;
    }

}