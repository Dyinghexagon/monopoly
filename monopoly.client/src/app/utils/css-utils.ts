export class CSSUtils {

    public static setScreenMode(mode: "full" | "quarter"): void {
        const contentBody = document.querySelector(".content-body");
        if (!contentBody) {
            return;
        }

        contentBody.classList.remove("full-screen");
        contentBody.classList.remove("quarter-screen");

        switch(mode) {
            case "quarter": {
                contentBody.classList.add("quarter-screen");
                return;
            }
            default: {
                contentBody.classList.add("full-screen");
                return;
            }
        }
    }

}