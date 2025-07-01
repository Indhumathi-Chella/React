import api from "./api";

export const getUsers = () => api.get("/users");

export const createUser = (userData) => api.post("/users", userData);

export const updateUser = (userId, userData) =>
  api.put(`/users/${userId}`, userData);

export const deleteUser = (userId) => api.delete(`/users/${userId}`);
