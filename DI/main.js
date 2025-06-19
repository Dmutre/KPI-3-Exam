const EmailClient = require('./email-client');
const SmsClient = require('./sms-client');
const NotificationService = require('./notification-service');

const emailClient = new EmailClient({ host: 'smtp.mailtrap.io', port: 2525 });
const smsClient = new SmsClient('ABC123_SECRET');

const notifier = new NotificationService(emailClient, smsClient);
notifier.notifyAdmin(new Error('DB connection failed'));