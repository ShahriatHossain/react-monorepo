import axios, { AxiosResponse } from 'axios';
import { Task, TaskFormValues } from '@task-manager/task-manager-models';

axios.defaults.baseURL = 'http://localhost:3000';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) =>
    axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Tasks = {
  list: () => axios.get<Task[]>('/tasks').then(responseBody),
  details: (id: string) => requests.get<Task>(`/tasks/${id}`),
  create: (task: TaskFormValues) => requests.post<void>('/tasks', task),
  update: (task: TaskFormValues) =>
    requests.put<void>(`/tasks/${task.id}`, task),
  delete: (id: string) => requests.del<void>(`/tasks/${id}`),
  attend: (id: string) => requests.post<void>(`/tasks/${id}/attend`, {}),
};

const agent = {
  Tasks
};

export default agent;
