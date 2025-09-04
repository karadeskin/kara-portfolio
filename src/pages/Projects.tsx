import { Link } from '@tanstack/react-router'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <section className="stack">
      <h2>Projects</h2>
      <div className="grid cards">
        {PROJECTS.map((p) => (
          <article key={p.slug} className="card">
            <h3>
              <Link to={`/projects/${p.slug}`} className="navlink" style={{padding:0}}>
                {p.title}
              </Link>
            </h3>
            <p className="muted">{p.summary}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:8}}>
              {p.tech.map((t) => (
                <span key={t.name} className="badge" style={{borderColor:'#ffd8e6', background:'#fff7fa', color:'#d83f87'}}>
                  {t.name}
                </span>
              ))}
            </div>
            <div style={{display:'flex',gap:10,marginTop:12}}>
              {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
              <Link className="btn primary" to={`/projects/${p.slug}`}>Details</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}