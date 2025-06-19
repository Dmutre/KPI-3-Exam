class NotificationService {
  constructor(emailClient, smsClient) {
    this.emailClient = emailClient;
    this.smsClient = smsClient;
  }
  notifyAdmin(error) {
    const msg = `System error: ${error.message}`;
    this.emailClient.send('admin@example.com', 'System is down!', msg);
    this.smsClient.send('+380501234567', msg);
  }
}
module.exports = NotificationService;