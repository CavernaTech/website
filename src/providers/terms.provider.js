import TermsRepository from "../repositories/terms.repository";

const TermsProvider = {
  terms: TermsRepository.getTerms(),
};

export default TermsProvider;
