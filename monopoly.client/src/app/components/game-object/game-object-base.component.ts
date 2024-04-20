import { Directive, Input } from "@angular/core";

@Directive()
export abstract class GameObjectBaseComponent {

    @Input() public color: string = "transparent";
    @Input() public name: string = "";
    @Input() public price: number = 0;

}