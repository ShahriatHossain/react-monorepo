import { makeAutoObservable, reaction, runInAction } from 'mobx';
import agent from '../api/agent';
import { Task, TaskFormValues } from '@task-manager/task-manager-models';

export default class TaskStore {
  tasks: Task[] = [];
  selectedTask: Task | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
    this.loadTasks();
  }

  loadTasks = async () => {
    this.loadingInitial = true;
    try {
      this.tasks = await agent.Tasks.list();
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadTask = async (id: string) => {
    let task = this.getTask(id);
    if (task) {
      this.selectedTask = task;
      return task;
    } else {
      this.loadingInitial = true;
      try {
        task = await agent.Tasks.details(id);
        this.setTask(task);
        runInAction(() => {
          this.selectedTask = task;
        });
        this.setLoadingInitial(false);
        return task;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  getTasks = () => {
    return this.tasks;
  };

  private setTask = (task: Task) => {
    this.tasks.push(task);
  };

  private getTask = (id: string) => {
    return this.tasks.find((task) => task.id === id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createTask = async (task: TaskFormValues) => {
    try {
      await agent.Tasks.create(task);
      const newTask = new Task(task);
      this.setTask(newTask);
      runInAction(() => {
        this.selectedTask = newTask;
      });
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
            // Optionally, update the selected task if it matches the updated task
            if (this.selectedTask && this.selectedTask.id === task.id) {
              this.selectedTask = this.tasks[index];
            }
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (id: string) => {
    this.loading = true;
    try {
      await agent.Tasks.delete(id);
      runInAction(() => {
        // Find the index of the task with the matching ID in the array
        const index = this.tasks.findIndex((task) => task.id === id);
        // If the task is found, remove it from the array
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  clearSelectedTask = () => {
    this.selectedTask = undefined;
  };
}
