import { Subject } from "rxjs";

export class ModalState {

    public readonly openModal$ = new Subject<string>();
    public readonly closeModal$ = new Subject<string>();

}