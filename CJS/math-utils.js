function mean(arr) {
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

function percentile(arr,p) {
  const s = [...arr].sort((a,b)=>a-b);
  const idx = Math.ceil(p/100*s.length)-1;
  return s[idx];
}

module.exports = { mean, percentile };