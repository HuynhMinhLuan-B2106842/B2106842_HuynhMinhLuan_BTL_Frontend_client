import api from "./api.service";
class bookService {
  async getAll() {
    return (await api.get("/book")).data;
  }
 
  async search(name) {
    return (await api.get("/book/search", { params: { name } })).data;
  }
  
 
}
export default new bookService();