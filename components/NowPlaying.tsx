import { useEffect, useState } from 'react';

type Track = {
  playing: boolean;
  title?: string | null;
  artist?: string | null;
  albumImageUrl?: string | null;
  url?: string | null;
  recent?: boolean;   // optional: if you add "recently played" fallback server-side
  error?: string;
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchNow = () =>
      fetch('/api/spotify')
        .then(r => r.json())
        .then(d => { if (mounted) setTrack(d); })
        .catch(() => { if (mounted) setTrack({ playing: false }); });

    fetchNow();
    const id = setInterval(fetchNow, 30000); // refresh every 30s
    return () => { mounted = false; clearInterval(id); };
  }, []);

  if (!track) return null;

  const hasTrack = Boolean(track.title);

  // If there is truly no track info, show the follow link
  if (!hasTrack) {
    return (
      <a
        href="https://open.spotify.com/user/kmdeskin"
        target="_blank" rel="noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          marginTop: 16, padding: 12, borderRadius: 12,
          background: 'rgba(255,105,180,0.08)', border: '1px solid rgba(255,105,180,0.25)'
        }}
      >
        <span style={{ fontSize: 18 }}>🎧</span>
        <div style={{ fontSize: 14 }}>Not listening right now — follow me on Spotify</div>
        <span style={{ marginLeft: 'auto' }}>↗</span>
      </a>
    );
  }

  return (
    <a
      href={track.url ?? '#'} target="_blank" rel="noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        marginTop: 16, padding: 12, borderRadius: 12,
        background: 'rgba(255,105,180,0.08)', border: '1px solid rgba(255,105,180,0.25)'
      }}
    >
      {track.albumImageUrl && (
        <img src={track.albumImageUrl} alt="" width={48} height={48} style={{ borderRadius: 8 }} />
      )}

      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontWeight: 600, fontSize: 14 }}>
          {track.title}
          {!track.playing && (
            <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.7 }}>
              ({track.recent ? 'last played' : 'paused'})
            </span>
          )}
        </div>
        <div style={{ fontSize: 12, opacity: 0.75 }}>{track.artist}</div>
      </div>

      <span style={{ marginLeft: 'auto', fontSize: 18 }}>🎵</span>
    </a>
  );
}