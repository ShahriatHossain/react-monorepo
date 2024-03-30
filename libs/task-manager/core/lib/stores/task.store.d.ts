import { Task, TaskFormValues } from '@task-manager/task-manager-models';
export default class TaskStore {
    tasks: Task[];
    selectedTask: Task | undefined;
    constructor();
    loadTasks: () => Promise<void>;
    loadTask: (id: string) => Promise<Task | undefined>;
    private setTask;
    private getTask;
    createTask: (task: TaskFormValues) => Promise<void>;
    updateTask: (task: TaskFormValues) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
}
