import os from 'os';

export async function GET(request) {
  const osDetails = {
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
  };

  return new Response(JSON.stringify(osDetails), {
    headers: { 'Content-Type': 'application/json' },
  });
}
