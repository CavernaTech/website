class TermsModel {
  agreed = false;
  timestamp = new Date();

  constructor({
    agreed,
    timestamp
  } = {
    agreed: false,
    timestamp: new Date()
  }) {
    this.agreed = agreed;
    this.timestamp = timestamp;
  }

  static FromJSON(json) {
    return new TermsModel({
      ...json,
      timestamp: json.timestamp ? new Date(json.timestamp) : new Date(),
    });
  }

  toJSON() {
    return JSON.stringify({
      ...this,
      timestamp: this.timestamp.toJSON(),
    });
  }
}

export default TermsModel;
