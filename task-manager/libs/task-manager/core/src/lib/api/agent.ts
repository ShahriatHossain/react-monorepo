import axios, { AxiosResponse } from 'axios';
import { AjaxResponse, Task, TaskFormValues } from '@task-manager/task-manager-models';

axios.defaults.baseURL = 'https://shahriathossain.github.io/json-server';

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
  list: () => axios.get<Task[]>('/db.json').then(responseBody),
  listPaginated: (page: number, limit: number) =>
    axios.get<AjaxResponse>(`/db.json?_page=${page}&_per_page=${limit}`).then(responseBody),
  details: (id: string) => requests.get<Task>(`/db.json/${id}`),
  create: (task: TaskFormValues) => requests.post<void>('/db.json', task),
  update: (task: TaskFormValues) =>
    requests.put<void>(`/db.json/${task.id}`, task),
  delete: (id: string) => requests.del<void>(`/db.json/${id}`)
};

const agent = {
  Tasks
};

export default agent;
