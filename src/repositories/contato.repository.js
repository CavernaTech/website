import axios from "axios";

const DB_URL = "https://cavernatech-website-default-rtdb.europe-west1.firebasedatabase.app/";
const DB_NAME = "contatos.json";

class ContatoRepository {
  static url = `${DB_URL}${DB_NAME}`;

  static async addContato(contato) {
    const response = await axios.post(this.url, contato.toJSON());
    console.log(response);
    if (response.status == 200) {
      return true;
    }
    return false;
  }
}

export default ContatoRepository;
