export class CSSUtils {

    public static setScreenMode(mode: "full" | "quarter"): void {
        document.body.classList.remove("full-screen");
        document.body.classList.remove("quarter-screen");

        switch(mode) {
            case "quarter": {
                document.body.classList.add("quarter-screen");
                return;
            }
            default: {
                document.body.classList.add("full-screen");
                return;
            }
        }
    }

}