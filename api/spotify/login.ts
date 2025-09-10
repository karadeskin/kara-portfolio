import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state'
  ].join(' ');

  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    response_type: 'code',
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    scope: scopes,
    state: Math.random().toString(36).slice(2),
  });

  res.redirect('https://accounts.spotify.com/authorize?' + params.toString());
}