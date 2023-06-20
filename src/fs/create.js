import { open } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const text = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  try {
    const file = await open(path.join(__dirname, 'files/fresh.txt'), 'wx');
    await file.writeFile(text);
  } catch {
    throw new Error(errorMessage);
  }
};

await create();