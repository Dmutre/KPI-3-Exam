export function mean(arr) {
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

export async function percentile(arr, p) {
  const sorted = [...arr].sort((a,b)=>a-b);
  const idx = Math.ceil(p/100*sorted.length)-1;
  return sorted[idx];
}