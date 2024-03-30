import { Task, TaskFormValues } from '@task-manager/task-manager-models';
declare const agent: {
    Tasks: {
        list: () => Promise<Task[]>;
        details: (id: string) => Promise<Task>;
        create: (task: TaskFormValues) => Promise<void>;
        update: (task: TaskFormValues) => Promise<void>;
        delete: (id: string) => Promise<void>;
        attend: (id: string) => Promise<void>;
    };
};
export default agent;
