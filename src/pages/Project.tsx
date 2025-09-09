import { useParams, Link } from '@tanstack/react-router'
import { PROJECTS } from '../data/projects'

export default function Project() {
  const { slug } = useParams({ from: '/projects/$slug' })
  const p = PROJECTS.find(x => x.slug === slug)
  if (!p) {
    return (
      <section className="stack">
        <h2>Not found</h2>
        <Link to="/projects" className="navlink">← Back to Projects</Link>
      </section>
    )
  }

  return (
    <article className="card stack">
      <Link to="/projects" className="navlink">← Back to Projects</Link>
      <h2>{p.title}</h2>
      <p className="muted">{p.summary}</p>

      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        {p.tech.map(t => (
          <span key={t.name} className="badge">{t.name}</span>
        ))}
      </div>
      <div style={{display:'flex',gap:10}}>
        {p.repo && (
          <a className="btn" href={p.repo} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {p.live && (
          <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
      {p.demo && (
        <figure style={{ marginTop: '1rem' }}>
          <video
            controls
            poster="/reframe.png" 
            style={{ width: '100%', borderRadius: 12 }}
          >
            <source src={p.demo} type="video/mp4" />
            Sorry, your browser doesn’t support embedded videos.
          </video>
          <figcaption className="muted" style={{ marginTop: '.5rem' }}>
            Demo walkthrough
          </figcaption>
        </figure>
      )}
    </article>
  )
}