import { useEffect, useState } from "react";

type Track = {
  playing: boolean;
  title?: string | null;
  artist?: string | null;
  albumImageUrl?: string | null;
  url?: string | null;
  recent?: boolean;
};

const baseCard: React.CSSProperties = {
  display: "inline-flex",          
  alignItems: "center",
  gap: 12,
  marginTop: 16,
  padding: "10px 14px",
  borderRadius: 12,
  background: "rgba(255,105,180,0.08)",
  border: "1px solid rgba(255,105,180,0.25)",
  textDecoration: "none",
  color: "#333",
  transition: "background 0.2s ease, border-color 0.2s ease, transform 0.06s ease",
};

const hoverOn = (el: HTMLAnchorElement | null) => {
  if (!el) return;
  el.style.background = "rgba(255,105,180,0.15)";
  el.style.borderColor = "rgba(255,105,180,0.35)";
};
const hoverOff = (el: HTMLAnchorElement | null) => {
  if (!el) return;
  el.style.background = "rgba(255,105,180,0.08)";
  el.style.borderColor = "rgba(255,105,180,0.25)";
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchNow = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then((d) => { if (mounted) setTrack(d); })
        .catch(() => { if (mounted) setTrack({ playing: false }); });

    fetchNow();
    const id = setInterval(fetchNow, 30000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  if (!track) return null;

  const hasTrack = Boolean(track.title);

  if (!hasTrack) {
    return (
      <a
        href="https://open.spotify.com/user/kmdeskin"
        target="_blank"
        rel="noreferrer"
        style={{ ...baseCard, color: "#b83280" }}
        onMouseEnter={(e) => hoverOn(e.currentTarget)}
        onMouseLeave={(e) => hoverOff(e.currentTarget)}
      >
        <span style={{ fontSize: 18 }}>🎧</span>
        <span style={{ fontSize: 14, fontWeight: 500 }}>
          Not listening right now — follow me on Spotify
        </span>
        <span style={{ marginLeft: 8, fontSize: 16 }}>↗</span>
      </a>
    );
  }

  return (
    <a
      href={track.url ?? "#"}
      target="_blank"
      rel="noreferrer"
      style={baseCard}
      onMouseEnter={(e) => hoverOn(e.currentTarget)}
      onMouseLeave={(e) => hoverOff(e.currentTarget)}
    >
      {track.albumImageUrl && (
        <img
          src={track.albumImageUrl}
          alt=""
          width={40}
          height={40}
          style={{ borderRadius: 8, flex: "0 0 auto" }}
        />
      )}
      <div style={{ lineHeight: 1.3 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: "#b83280" }}>
          {track.title}
          {!track.playing && (
            <span style={{ marginLeft: 6, fontSize: 12, opacity: 0.7 }}>
              (paused)
            </span>
          )}
        </div>
        <div style={{ fontSize: 12, opacity: 0.75 }}>{track.artist}</div>
      </div>
      <span style={{ marginLeft: 8, fontSize: 18 }}>🎵</span>
    </a>
  );
}