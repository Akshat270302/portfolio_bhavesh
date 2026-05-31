import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'Resume (13).pdf');
  try {
    const data = await fs.readFile(filePath);
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Resume.pdf"',
      },
    });
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
