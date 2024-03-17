import { makeAutoObservable } from 'mobx';
import { Task } from '../../../interfaces/src/lib/task.interface';
import { TaskService } from './task.service';

export class TaskStore {
  tasks: Task[] = [];
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    makeAutoObservable(this);
    this.taskService = taskService;
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  addTask(task: Task): void {
    // Add task locally
    this.tasks.push(task);
    // Add task remotely
    this.taskService.addTask(task);
  }

  // Define other store methods as needed
}

export const taskStore = new TaskStore(new TaskService());
