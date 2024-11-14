import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Todo } from "../../types/reminders";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Base URL for the mock API
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = (): Promise<AxiosResponse<Todo[]>> =>
  axiosInstance.get("/todos");

export const getTodoById = (id: number): Promise<AxiosResponse<Todo[]>> =>
  axiosInstance.get(`/todos/${id}`);

export const createTodo = (data: Todo): Promise<AxiosResponse<Todo[]>> =>
  axiosInstance.post("/todos", data);

export const updateTodo = (data: Todo): Promise<AxiosResponse<Todo[]>> =>
  axiosInstance.put(`/todos/${data.id}`, JSON.stringify(data));

export const deleteTodo = (id: number): Promise<AxiosResponse<void>> =>
  axiosInstance.delete(`/todos/${id}`);
