import { makeAutoObservable } from "mobx";

export default class DialogStore {
    dislogIsVisible = false;

    constructor() {
        makeAutoObservable(this);
    }

    setDialogIsVisible = (isVisible: boolean) => {
        this.dislogIsVisible = isVisible;
    }
}