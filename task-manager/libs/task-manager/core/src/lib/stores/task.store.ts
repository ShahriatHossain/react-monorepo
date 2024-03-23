import { makeAutoObservable, reaction, runInAction } from 'mobx';
import agent from '../api/agent';
import { Task } from '@task-manager/task-manager-models';

export default class TaskStore {
  tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadTasks();
  }

  loadTasks = async () => {
    try {
      this.tasks = await agent.Tasks.list();
    } catch (error) {
      console.log(error);
    }
  };

  loadTask = async (id: string) => {
    let task = this.getTask(id);
    if (task) {
      return task;
    } else {
      try {
        task = await agent.Tasks.details(id);
        this.setTask(task);
        return task;
      } catch (error) {
        console.log(error);
      }
    }
  };

  private setTask = (task: Task) => {
    this.tasks.push(task);
  };

  private getTask = (id: string) => {
    return this.tasks.find((task) => task.id === id);
  };

  createTask = async (task: Task) => {
    try {
      await agent.Tasks.create(task);
      this.setTask(task);
    } catch (error) {
      console.log(error);
    }
  };

  updateTask = async (task: Task) => {
    try {
      await agent.Tasks.update(task);
      runInAction(() => {
        if (task.id) {
          // Find the index of the task with the matching ID in the array
          const index = this.tasks.findIndex((t) => t.id === task.id);

          if (index !== -1) {
            // If the task is found, update it with the new values
            this.tasks[index] = { ...this.tasks[index], ...task };
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (id: string) => {
    try {
      await agent.Tasks.delete(id);
      runInAction(() => {
        // Find the index of the task with the matching ID in the array
        const index = this.tasks.findIndex((task) => task.id === id);
        // If the task is found, remove it from the array
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}
