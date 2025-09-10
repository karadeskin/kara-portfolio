import type { VercelRequest, VercelResponse } from '@vercel/node';

async function exchangeCodeForTokens(code: string) {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  });

  const r = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });
  if (!r.ok) throw new Error('Token exchange failed');
  return r.json() as Promise<{ access_token: string; refresh_token: string }>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const code = req.query.code as string | undefined;
  const error = req.query.error as string | undefined;
  if (error) return res.status(400).send(error);
  if (!code) return res.status(400).send('Missing code');

  try {
    const tokens = await exchangeCodeForTokens(code);
    // Show the refresh token so you can paste it into Vercel envs
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <h1>Spotify connected ✔</h1>
      <p>Copy your <b>refresh token</b> and add it to Vercel as <code>SPOTIFY_REFRESH_TOKEN</code>:</p>
      <pre style="white-space:pre-wrap;border:1px solid #eee;border-radius:8px;padding:12px;">${tokens.refresh_token}</pre>
      <p>Then redeploy your site.</p>
    `);
  } catch (e: any) {
    res.status(500).send(e.message ?? 'Error');
  }
}