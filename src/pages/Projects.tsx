import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  const [demoSrc, setDemoSrc] = useState<string | null>(null)
  const [demoTitle, setDemoTitle] = useState<string>('')

  return (
    <section className="stack">
      <h2>Projects</h2>
      <div className="grid cards">
        {PROJECTS.map((p) => (
          <article key={p.slug} className="card">
            <h3>
              <a href={`/projects/${p.slug}`} className="navlink" style={{ padding: 0 }}>
                {p.title}
              </a>
            </h3>
            <p className="muted" style={{ whiteSpace: 'pre-line' }}>{p.summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {p.tech.map((t) => (
                <span
                  key={t.name}
                  className="badge"
                  style={{
                    borderColor: t.color,
                    background: `${t.color}20`,
                    color: t.color,
                  }}
                >
                  {t.name}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              {p.live && (
                <a className="btn" href={p.live} target="_blank" rel="noreferrer">
                  Try it
                </a>
              )}
              {p.repo && (
                <a className="btn" href={p.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {p.demo && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setDemoSrc(p.demo || null)
                    setDemoTitle(p.title)
                  }}
                >
                  Demo
                </button>
              )}
              {p.caseStudy && (
                <Link className="btn" to={`/case-studies/${p.slug}`}>
                  Case Study
                </Link>
              )}
              <Link className="btn primary" to={`/projects/${p.slug}`}>
                Behind the Scenes
              </Link>
            </div>
          </article>
        ))}
      </div>

      {demoSrc && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setDemoSrc(null)}
        >
          <div
            style={{ width: 'min(900px,95%)', background: '#000', padding: 12, borderRadius: 8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <strong style={{ color: '#fff' }}>{demoTitle}</strong>
              <button className="btn" onClick={() => setDemoSrc(null)}>
                Close
              </button>
            </div>
            <video controls style={{ width: '100%', maxHeight: '80vh' }} src={demoSrc}>
              Sorry — your browser doesn't support this video.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}