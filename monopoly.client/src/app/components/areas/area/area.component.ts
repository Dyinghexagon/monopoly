import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { Players } from "../../../models/player.model";
import { IDiceValue } from "../../../models/dice.model";
import { GameObjectCreateService } from "../../../services/game-object-create.service";
import { PlayerMoveService } from "../../../services/player-move.service";
import { IGameObjectBase } from "../../../models/game-objects/game-object.model";
import { TreasuryCardGeneratedService } from "../../../services/card-generated-services/treasury-card-generated.service";
import { ChanceCardGeneratedService } from "../../../services/card-generated-services/chance-card-generated.service";

@Component({
    selector: "app-area",
    templateUrl: "./area.component.html",
    styleUrls: [ "./area.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AreaComponent implements OnChanges {

    @Input() public players?: Players;

    public gameObjectCreateService: GameObjectCreateService;
    public playerMoveService?: PlayerMoveService;

    public objects: IGameObjectBase[] = [];

    constructor(
        private readonly treasuryCardGeneratedService: TreasuryCardGeneratedService,
        private readonly chanceCardGeneratedService: ChanceCardGeneratedService
    ) {
        this.gameObjectCreateService = new GameObjectCreateService();
        this.initObjects();
        this.initPlayerMoveService();
    }

    private initObjects(): void {
        this.objects.push(this.gameObjectCreateService.createStart());
        this.objects.push(this.gameObjectCreateService.createStreet("ЖИТНАЯ УЛИЦА", 60, "Grey"));
        this.objects.push(this.gameObjectCreateService.createTreasury());
        this.objects.push(this.gameObjectCreateService.createStreet("НАГАТИНСКАЯ УЛИЦА", 60, "Grey"));
        this.objects.push(this.gameObjectCreateService.createIncomeTax());
        this.objects.push(this.gameObjectCreateService.createRailway("РИЖСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"));
        this.objects.push(this.gameObjectCreateService.createStreet("ВАРШАВСКОЕ ШОССЕ", 100, "Pink"));
        this.objects.push(this.gameObjectCreateService.createChance());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА ОГАРЕВА", 100, "Pink"));
        this.objects.push(this.gameObjectCreateService.createStreet("ПЕРВАЯ ПАРКОВАЯ УЛИЦА", 120, "Pink"));
        this.objects.push(this.gameObjectCreateService.createJail());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА ПОЛНКА", 140, "Yellow"));
        this.objects.push(this.gameObjectCreateService.createPowerHouse());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА СРЕТЕНКА", 140, "Yellow"));
        this.objects.push(this.gameObjectCreateService.createStreet("РОСТОВСКАЯ НАБЕРЕЖНАЯ", 160, "Yellow"));
        this.objects.push(this.gameObjectCreateService.createRailway("КУРСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"));
        this.objects.push(this.gameObjectCreateService.createStreet("РЯЗАНСКИЙ ПРОСПЕКТ", 180, "Green"));
        this.objects.push(this.gameObjectCreateService.createTreasury());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА ВАВИЛОВА", 180, "Green"));
        this.objects.push(this.gameObjectCreateService.createStreet("РУБЛЕВСКОЕ ШОССЕ", 200, "Green"));
        this.objects.push(this.gameObjectCreateService.createParking());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА ТВЕРСКАЯ", 200, "Blue"));
        this.objects.push(this.gameObjectCreateService.createChance());
        this.objects.push(this.gameObjectCreateService.createStreet("ПУШКИНСКАЯ УЛИЦА", 210, "Blue"));
        this.objects.push(this.gameObjectCreateService.createStreet("ПЛОЩАДЬ МАЯКОВСКОГО", 240, "Blue"));
        this.objects.push(this.gameObjectCreateService.createRailway("КАЗАНСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"));
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА ГРУЗИНСКАЯ ВАЛ", 260, "Corn"));
        this.objects.push(this.gameObjectCreateService.createStreet("НОВИНСКИЙ БУЛЬВАР", 260, "Corn"));
        this.objects.push(this.gameObjectCreateService.createWaterSupply());
        this.objects.push(this.gameObjectCreateService.createStreet("СМОЛЕНСКАЯ ПЛОЩАДЬ", 280, "Corn"));
        this.objects.push(this.gameObjectCreateService.createArrested());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА ЩУСЕВА", 300, "Orange"));
        this.objects.push(this.gameObjectCreateService.createStreet("ГОГОЛЕВСКИЙ БУЛЬВАР", 300, "Orange"));
        this.objects.push(this.gameObjectCreateService.createTreasury());
        this.objects.push(this.gameObjectCreateService.createStreet("КУТУЗОВСКИЙ ПРОСПЕКТ", 320, "Orange"));
        this.objects.push(this.gameObjectCreateService.createRailway("ЛЕНИНГРАДСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"));
        this.objects.push(this.gameObjectCreateService.createChance());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА МАЛАЯ БРОННАЯ", 350, "Red"));
        this.objects.push(this.gameObjectCreateService.createIncomeTax());
        this.objects.push(this.gameObjectCreateService.createStreet("УЛИЦА АРБАТ", 400, "Red"));
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes["players"]) {
            this.players = changes["players"].currentValue;
            this.initPlayerMoveService();
        }
    }

    private initPlayerMoveService(): void {
        if (this.players) {
            this.playerMoveService = new PlayerMoveService(this.players, this.objects);
        }
    }

    public diceValueChange(diceValue: IDiceValue): void {
        if (!this.playerMoveService) {
            return;
        }

        this.playerMoveService.moveCurrentPlayer(diceValue);
    }

    public async sendToMistral(): Promise<void> {
        const card = await this.chanceCardGeneratedService.generateCard();
        console.warn("chance card", card);

        const treasuryCard = await this.treasuryCardGeneratedService.generateCard();
        console.warn("treasury card", treasuryCard);
    }

}