class SmsClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  send(to, message) {
    console.log(`SMS via API ${this.apiKey}: ${to} -> ${message}`);
  }
}
module.exports = SmsClient;