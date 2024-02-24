export class NumberUtils {

    public static randomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

}