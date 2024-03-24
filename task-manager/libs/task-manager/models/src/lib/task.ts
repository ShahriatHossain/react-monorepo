export interface ITask {
  id: string;
  title: string;
  description: string;
}

export class Task implements ITask {
  id!: string;
  title!: string;
  description!: string;

  constructor(init?: TaskFormValues) {
    Object.assign(this, init);
  }
}

export class TaskFormValues {
  id: string = '';
  title: string = '';
  description: string = '';

  constructor(task?: TaskFormValues) {
    if (task) {
      this.id = task.id;
      this.title = task.title;
      this.description = task.description;
    }
  }
}
