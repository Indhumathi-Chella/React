import api from "./api";

class UserService {
  getUsers() {
    return api.get("/users");
  }

  createUser(userData) {
    return api.post("/users", userData);
  }

  updateUser(userId, userData) {
    return api.put(`/users/${userId}`, userData);
  }

  deleteUser(userId) {
    return api.delete(`/users/${userId}`);
  }
}

const userService = new UserService();

export default userService;

