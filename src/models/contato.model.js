class ContatoModel {
  email;
  name;
  tel;
  subject;
  agreement;
  message;

  constructor({
    email,
    name,
    tel,
    subject,
    message,
  }) {
    this.email = email;
    this.name = name;
    this.tel = tel;
    this.subject = subject;
    this.message = message;
  }

  toJSON() {
    return JSON.stringify({
      ...this,
      agreement: this.agreement.toJSON(),
    });
  }
}

export default ContatoModel;
