import TermsController from "./terms.controller";
import ContatoRepository from "../repositories/contato.repository";

class ContatoController {

  static async addContato(contato) {
    if (TermsController.isAgreed()) {
      contato.agreement = TermsController.whenAgreed();
      return await ContatoRepository.addContato(contato);
    }
    return false;
  }
}

export default ContatoController;
