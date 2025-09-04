export default function Home() {
    return (
      <section className="section stack hero">
        <span className="badge">AI • Full-Stack • Web</span>
        <h1>Hi, I’m Kara</h1>
        <p className="muted">
          CS @ KU ’25 · Apprentice @ Acellus · I build React/TS apps and Go APIs. Here are a few things I’m proud of ↓
        </p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          <a className="btn primary" href="/projects">View Projects</a>
          <a className="btn" href="mailto:kmdeskin@me.com">Contact me</a>
        </div>
      </section>
    )
  }
