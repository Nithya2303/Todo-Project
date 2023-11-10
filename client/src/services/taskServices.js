import axios from "axios";

const apiUrl = "https://todo-project-server.vercel.app/api/tasks";

export const getTasks = () => {
  return axios.get(apiUrl);
};

export const addTask = (task) => {
  return axios.post(apiUrl, task);
};

export const updateTask = (id, task) => {
  return axios.put(`${apiUrl}/${id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
