import { loadData } from './data-provider.mjs';
import { mean, percentile } from './math-utils.mjs';

(async ()=>{
  const data = await loadData('./data/numbers.txt');
  console.log('Mean:', mean(data));
  console.log('90th percentile:', await percentile(data, 90));
})();