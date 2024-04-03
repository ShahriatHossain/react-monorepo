export class Task {
  id: string = "";
  title: string = "";
  description: string = "";
  completed: boolean = false;

  constructor(init?: TaskFormValues) {
    if (init) {
      this.id = init.id;
      this.title = init.title;
      this.description = init.description;
      this.completed = init.completed;
    }
  }
}

export class TaskFormValues {
  id: string = '';
  title: string = '';
  description: string = '';
  completed: boolean = false;

  constructor(task?: TaskFormValues) {
    if (task) {
      this.id = task.id;
      this.title = task.title;
      this.description = task.description;
      this.completed = task.completed;
    }
  }
}
