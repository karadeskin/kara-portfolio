import type { VercelRequest, VercelResponse } from '@vercel/node';

async function refreshAccessToken() {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  });
  const r = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });
  if (!r.ok) throw new Error('Refresh failed');
  return r.json() as Promise<{ access_token: string }>;
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const { access_token } = await refreshAccessToken();
    const now = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: 'no-store' as any
    });
    if (now.status === 204) {
      return res.status(200).json({ playing: false });
    }
    const data = await now.json();
    const item = data?.item;
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({
      playing: Boolean(data?.is_playing),
      title: item?.name ?? null,
      artist: item?.artists?.map((a: any) => a.name).join(', ') ?? null,
      albumImageUrl: item?.album?.images?.[0]?.url ?? null,
      url: item?.external_urls?.spotify ?? null,
    });
  } catch (e: any) {
    return res.status(200).json({ playing: false, error: e.message ?? 'error' });
  }
}