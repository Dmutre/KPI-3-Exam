import fs from 'fs/promises';

export async function loadData(path) {
  const raw = await fs.readFile(path, 'utf8');
  return raw.split('\n').map(Number);
}