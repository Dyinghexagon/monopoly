import { Component } from "@angular/core";
import { StreetGameObjec, StreetType } from "../../models/street-object.model";
import { GameObjectUtils } from "../../utils/game-object-utils";

@Component({
    selector: "app-area",
    templateUrl: "./area.component.html",
    styleUrls: [ "./area.component.scss" ]
})
export class AreaComponent {

    public greyStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Grey,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Grey),
            name: "ЖИТНАЯ УЛИЦА",
            price: 60
        }),
        new StreetGameObjec({
            type: StreetType.Grey,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Grey),
            name: "НАГАТИНСКАЯ УЛИЦА",
            price: 60
        })
    ];

    public pinkStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Pink,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Pink),
            name: "ВАРШАВСКОЕ ШОССЕ",
            price: 100
        }),
        new StreetGameObjec({
            type: StreetType.Pink,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Pink),
            name: "УЛИЦА ОГАРЕВА",
            price: 100
        }),
        new StreetGameObjec({
            type: StreetType.Pink,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Pink),
            name: "ПЕРВАЯ ПАРКОВАЯ УЛИЦА",
            price: 120
        })
    ];

    public yellowStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Yellow,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Yellow),
            name: "УЛИЦА ПОЛНКА",
            price: 140
        }),
        new StreetGameObjec({
            type: StreetType.Yellow,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Yellow),
            name: "УЛИЦА СРЕТЕНКА",
            price: 140
        }),
        new StreetGameObjec({
            type: StreetType.Yellow,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Yellow),
            name: "РОСТОВСКАЯ НАБЕРЕЖНАЯ",
            price: 160
        })
    ];

    public greenStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Green,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Green),
            name: "РЯЗАНСКИЙ ПРОСПЕКТ",
            price: 180
        }),
        new StreetGameObjec({
            type: StreetType.Green,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Green),
            name: "УЛИЦА ВАВИЛОВА",
            price: 180
        }),
        new StreetGameObjec({
            type: StreetType.Green,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Green),
            name: "РУБЛЕВСКОЕ ШОССЕ",
            price: 200
        })
    ];

    public blueStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Blue,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Blue),
            name: "УЛИЦА ТВЕРСКАЯ",
            price: 200
        }),
        new StreetGameObjec({
            type: StreetType.Blue,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Blue),
            name: "ПУШКИНСКАЯ УЛИЦА",
            price: 220
        }),
        new StreetGameObjec({
            type: StreetType.Blue,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Blue),
            name: "ПЛОЩАДЬ МАЯКОВСКОГО",
            price: 2240
        }),
    ];

    public cornStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Corn,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Corn),
            name: "УЛИЦА ГРУЗИНСКАЯ ВАЛ",
            price: 260
        }),
        new StreetGameObjec({
            type: StreetType.Corn,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Corn),
            name: "НОВИНСКИЙ БУЛЬВАР",
            price: 260
        }),
        new StreetGameObjec({
            type: StreetType.Corn,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Corn),
            name: "СМОЛЕНСКАЯ ПЛОЩАДЬ",
            price: 250
        })
    ];

    public orangeStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Orange,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Orange),
            name: "УЛИЦА ЩУСЕВА",
            price: 300
        }),
        new StreetGameObjec({
            type: StreetType.Orange,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Orange),
            name: "ГОГОЛЕВСКИЙ БУЛЬВАР",
            price: 300
        }),
        new StreetGameObjec({
            type: StreetType.Orange,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Orange),
            name: "КУТУЗОВСКИЙ ПРОСПЕКТ",
            price: 320
        })
    ];

    public redStreet: StreetGameObjec[] = [
        new StreetGameObjec({
            type: StreetType.Red,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Red),
            name: "УЛИЦА МАЛАЯ БРОННАЯ",
            price: 350
        }),
        new StreetGameObjec({
            type: StreetType.Red,
            color: GameObjectUtils.getColorStreetByNumber(StreetType.Red),
            name: "УЛИЦА АРБАТ",
            price: 400
        })
    ];

}