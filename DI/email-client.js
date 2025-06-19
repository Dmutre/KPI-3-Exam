class EmailClient {
  constructor(smtpConfig) {
    this.smtpConfig = smtpConfig;
  }
  send(to, subject, body) {
    console.log(`SMTP ${this.smtpConfig.host}: email sent -> ${to}: ${subject}`);
  }
}
module.exports = EmailClient;