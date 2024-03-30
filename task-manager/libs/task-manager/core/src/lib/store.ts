import { createContext, useContext } from "react";
import TaskStore from "./stores/task.store";
import DialogStore from "./stores/dialog.store";

interface Store {
    taskStore: TaskStore;
    dialogStore: DialogStore;
}

export const store: Store = {
    taskStore: new TaskStore(),
    dialogStore: new DialogStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}