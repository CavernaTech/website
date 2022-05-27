import TermsProvider from "../providers/terms.provider";
import TermsRepository from "../repositories/terms.repository";

class TermsController {
  static isAgreed() {
    return TermsProvider.terms.agreed;
  }

  static whenAgreed() {
    return TermsProvider.terms.timestamp;
  }

  static agreeTerms() {
    let terms = TermsProvider.terms;
    terms.agreed = true;
    terms.timestamp = new Date();
    try {
      TermsRepository.setTerms(terms);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default TermsController;
