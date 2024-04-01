import { makeAutoObservable, reaction, runInAction } from 'mobx';
import agent from '../api/agent';
import { Task, TaskFormValues } from '@task-manager/task-manager-models';
import { pageSize } from '@task-manager/task-manager-shared';

export default class TaskStore {
  tasks: Task[] = [];
  totalTasks: number = 0;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
    this.loadPaginatedTasks(1, pageSize); // Adjust as needed
  }

  loadPaginatedTasks = async (currentPage: number, limit: number) => {
    this.loadingInitial = true;
    try {
      const response = await agent.Tasks.listPaginated(currentPage, limit);
      this.tasks = response.data;
      this.setTotalTasks(Number(response.items));
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
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

  createTask = async (task: TaskFormValues) => {
    try {
      await agent.Tasks.create(task);
      this.setTask(task);
    } catch (error) {
      console.log(error);
    }
  };

  updateTask = async (task: TaskFormValues) => {
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

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  setTotalTasks = (totalTasks: number) => {
    runInAction(() => {
      this.totalTasks = totalTasks;
    });
  }

}
