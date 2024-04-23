import api from "./api.service";

class userService{
  async login(user) {
    const response = await api.post(`/auth/login`, user);
    return response.data;
  };
  async signup(user) {
    return (await api.post(`/auth/register`, user)).data;
  }
}


export default new userService();