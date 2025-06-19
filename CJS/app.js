const { mean, percentile } = require('./math-utils');
// Dynamic condition
const provider = process.env.USE_ASYNC ? require('./async-provider') : require('./data-provider');

const data = provider.loadDataSync('./data/numbers.txt');
console.log('Mean:', mean(data));
console.log('95th percentile:', percentile(data,95));