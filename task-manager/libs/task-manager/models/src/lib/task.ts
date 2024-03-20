export interface ITask {
  id: string;
  title: string;
  description: string;
}

export class Task implements ITask {
  id: string;
  title: string;
  description: string;

  constructor(init?: Partial<TaskFormValues>) {
    this.id = init?.id ?? '';
    this.title = init?.title ?? '';
    this.description = init?.description ?? '';
  }
}

export class TaskFormValues {
  id?: string = undefined;
  title = '';
  description = '';

  constructor(activity?: TaskFormValues) {
    if (activity) {
      this.id = activity.id;
      this.title = activity.title;
      this.description = activity.description;
    }
  }
}
