import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';

const mimeTypes: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

export const filePathToDataUrl = cache(async (relativePath: string) => {
  const absolutePath = path.join(process.cwd(), relativePath);
  const fileBuffer = await fs.readFile(absolutePath);
  const mimeType = mimeTypes[path.extname(absolutePath).toLowerCase()] ?? 'application/octet-stream';

  return `data:${mimeType};base64,${fileBuffer.toString('base64')}`;
});