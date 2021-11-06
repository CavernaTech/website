import TermsModel from "../models/terms.model";

const TERMS_STORAGE = 'terms-cavernatech';

class TermsRepository {

  static storage = window.localStorage;

  static getTerms() {
    return TermsModel.FromJSON(JSON.parse(this.storage.getItem(TERMS_STORAGE) ?? "{}"));
  }

  static setTerms(terms) {
    this.storage.setItem(TERMS_STORAGE, terms.toJSON());
  }
}

export default TermsRepository;
