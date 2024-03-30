/// <reference types="react" />
import TaskStore from "./stores/task.store";
import DialogStore from "./stores/dialog.store";
interface Store {
    taskStore: TaskStore;
    dialogStore: DialogStore;
}
export declare const store: Store;
export declare const StoreContext: import("react").Context<Store>;
export declare function useStore(): Store;
export {};
