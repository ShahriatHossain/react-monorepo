export class Task {
  id: string = "";
  title: string = "";
  description: string = "";

  constructor(init?: TaskFormValues) {
    if (init) {
      this.id = init.id;
      this.title = init.title;
      this.description = init.description;
    }
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
