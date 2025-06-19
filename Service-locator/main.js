const locator = require('./locator');
const CacheService = require('./cache-service');
const ApiClient = require('./api-client');
const ReportGenerator = require('./report-generator');

locator.register('cache', new CacheService());
locator.register('apiClient', new ApiClient('https://api.example.com'));

const generator = new ReportGenerator()
;(async()=> console.log(await generator.generate('r1')))();