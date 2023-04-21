import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const api = axios.create({
  baseURL: BASE_URL,
});

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todosApi = {
  async fetchTodos() {
    const response = await api.get<Todo[]>("/todos");
    return response.data;
  },
  async createTodo(todo: Todo) {
    const response = await api.post<Todo>("/todos", todo);
    return response.data;
  },
  async updateTodo(todo: Todo) {
    const response = await api.put<Todo>(`/todos/\${todo.id}`, todo);
    return response.data;
  },
  async deleteTodoById(id: number) {
    const response = await api.delete(`/todos/\${id}`);
    return response.data;
  },
};
