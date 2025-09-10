import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [data, setData] = useState<any>(null);
  const API = "/api/spotify"; // same-origin on Vercel prod

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(d => {
        console.log("[NowPlaying] data:", d);
        setData(d);
      })
      .catch(e => {
        console.error("[NowPlaying] error:", e);
        setData({ error: String(e) });
      });
  }, []);

  return (
    <div style={{
      marginTop: 16,
      padding: 12,
      borderRadius: 12,
      background: "rgba(255,105,180,0.08)",
      border: "1px solid rgba(255,105,180,0.25)",
      fontSize: 12
    }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Now Playing (debug)</div>
      <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
        {data ? JSON.stringify(data, null, 2) : "Loading…"}
      </pre>
    </div>
  );
}