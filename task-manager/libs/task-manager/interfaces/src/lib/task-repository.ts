import { Task } from './task.interface';

export class TaskRepository {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Implement other methods as needed
}
