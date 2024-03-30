export declare class Task {
    id: string;
    title: string;
    description: string;
    constructor(init?: TaskFormValues);
}
export declare class TaskFormValues {
    id: string;
    title: string;
    description: string;
    constructor(task?: TaskFormValues);
}
