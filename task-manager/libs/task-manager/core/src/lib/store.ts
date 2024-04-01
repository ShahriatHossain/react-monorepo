import { createContext, useContext } from "react";
import TaskStore from "./stores/task.store";
import DialogStore from "./stores/dialog.store";
import PaginationStore from "./stores/pagination.store";

interface Store {
    taskStore: TaskStore;
    dialogStore: DialogStore;
    paginationStore: PaginationStore
}

export const store: Store = {
    taskStore: new TaskStore(),
    dialogStore: new DialogStore(),
    paginationStore: new PaginationStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}