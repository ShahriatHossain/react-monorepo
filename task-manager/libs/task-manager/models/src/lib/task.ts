export interface ITask {
  id: string;
  title: string;
  description: string;
}

export class Task implements ITask {
  id: string;
  title: string;
  description: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
  }
}
