import { useEffect, useState } from 'react';

type Track = {
  playing: boolean;
  title?: string | null;
  artist?: string | null;
  albumImageUrl?: string | null;
  url?: string | null;
  error?: string;
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/spotify')
      .then(r => r.json())
      .then(d => { if (mounted) setTrack(d); })
      .catch(() => { if (mounted) setTrack({ playing: false }); });
    return () => { mounted = false; };
  }, []);

  if (!track) return null;

  // Show a friendly fallback if nothing’s playing
  if (!track.playing) {
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
        <div style={{ fontSize: 14 }}>
          Not listening right now — follow me on Spotify
        </div>
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
        <div style={{ fontWeight: 600, fontSize: 14 }}>{track.title}</div>
        <div style={{ fontSize: 12, opacity: 0.75 }}>{track.artist}</div>
      </div>
      <span style={{ marginLeft: 'auto', fontSize: 18 }}>🎵</span>
    </a>
  );
}