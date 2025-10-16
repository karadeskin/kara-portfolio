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
      {/** remove hyphens/em dashes from displayed titles and summaries */}
      {(() => {
        const fmt = (s: string) => s.replace(/[-—]/g, ' ').replace(/\s+/g, ' ').trim()
        return (
          <>
            <h2>{fmt(p.title)}</h2>
            <p className="muted">{fmt(p.summary)}</p>
          </>
        )
      })()}

      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        {p.tech.map(t => (
          <span key={t.name} className="badge">{t.name}</span>
        ))}
      </div>
      <div style={{display:'flex',gap:10}}>
        {p.live && (
          <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
      {/* Demo removed from details page — demos live on the Projects page to avoid duplication */}

      <section style={{ marginTop: '1rem' }}>
        <h3>Role and timeline</h3>
        {p.slug === 'reframe-ai' && (
          <p className="muted">Solo prototype. From concept to working prototype in about six weeks.</p>
        )}
        {p.slug === 'music-recs' && (
          <p className="muted">Solo project. Iterated over four weeks to tune features and latency.</p>
        )}
        {p.slug === 'acellus-gold-store' && (
          <p className="muted">Full stack engineer. Work is in progress since August, working across frontend and backend with the product team.</p>
        )}
        {p.slug === 'travel-journal' && (
          <p className="muted">Personal project built over a few weekends and improved gradually. I focused on reliability so I could capture trips even when offline.</p>
        )}

        <h3>Approach</h3>
        {p.slug === 'reframe-ai' && (
          <p className="muted">I built a Streamlit interface for fast UI iteration, wired in a small sentiment model to score entries, and logged entries to SQLite so I could run quick pandas analyses and show trends.</p>
        )}
        {p.slug === 'music-recs' && (
          <p className="muted">I preprocessed Spotify audio features, scaled them, used PCA to reduce dimensionality, and indexed tracks with KNN. A tiny Flask API served recommendations for quick evaluation.</p>
        )}
        {p.slug === 'acellus-gold-store' && (
          <p className="muted">I work on both the frontend and backend, prioritizing features that directly unblock users and ops. That has meant shipping UI improvements, building backend endpoints, and tying them together so new features are reliable and easy to manage.</p>
        )}
        {p.slug === 'travel-journal' && (
          <p className="muted">I built offline support and map views so logging trips, photos, and notes feels effortless. I added a lightweight sync flow to upload entries when a connection is available and made the UI fast and friendly for quick capture.</p>
        )}

        <h3>Implementation highlights</h3>
        <ul className="muted">
          {p.slug === 'reframe-ai' && (
            <>
              <li>Tech: {p.tech.map((t) => t.name).join(', ')}</li>
              <li>Used a small transformer sentiment pipeline for reliable scoring and simple SQLite logging for privacy and portability</li>
              <li>Quick analytics via pandas for trend visualization</li>
            </>
          )}
          {p.slug === 'music-recs' && (
            <>
              <li>Tech: {p.tech.map((t) => t.name).join(', ')}</li>
              <li>PCA reduced dimensions to speed up nearest neighbor queries while preserving signal</li>
              <li>Served recommendations with a compact API to measure latency and gather feedback</li>
            </>
          )}
          {p.slug === 'acellus-gold-store' && (
            <>
              <li>Tech: {p.tech.map((t) => t.name).join(', ')}</li>
              <li>Built and polished the checkout and cart pages including validations and user friendly controls like radio buttons</li>
              <li>Implemented a full stack ship notification email flow: backend endpoint, queueing and email templates, and frontend admin triggers</li>
              <li>Worked on catalog population and admin tooling to make adding and managing items simpler for the team</li>
              <li>Improved reliability with retries and better error handling for key APIs</li>
            </>
          )}
          {p.slug === 'travel-journal' && (
            <>
              <li>Tech: {p.tech.map((t) => t.name).join(', ')}</li>
              <li>Offline first design using local storage and a simple sync mechanism to persist entries</li>
              <li>Map integration for geotagging entries and easy visual navigation</li>
              <li>Image handling with client-side sizing to keep uploads quick on mobile</li>
            </>
          )}
          {p.slug !== 'reframe-ai' && p.slug !== 'music-recs' && p.slug !== 'acellus-gold-store' && p.slug !== 'travel-journal' && (
            <>
              <li>Tech: {p.tech.map((t) => t.name).join(', ')}</li>
              <li>Key challenge: performance or UX improvements depending on project</li>
            </>
          )}
        </ul>

        <h3>Outcomes</h3>
        <p className="muted">
          {p.slug === 'reframe-ai' && (
            <>Solo prototype validated with about 12 testers, and roughly 75% said it helped them reflect more. The average journaling session was about 6 minutes and retention was around 58% after two weeks.</>
          )}
          {p.slug === 'music-recs' && (
            <>I served recommendations from a 10k track dataset with average latency around 50 ms per request. PCA reduced dimensions from about 24 to 6, which kept the signal while making queries faster. In quick listener tests, about seven out of ten recommendations felt like a good fit.</>
          )}
          {p.slug === 'acellus-gold-store' && (
            <>This work has made the checkout flow more reliable and reduced friction for customers. It also made day to day operations easier for the team by simplifying how items are added and managed. The project is ongoing and I continue to iterate with the team to improve stability and UX.</>
          )}
          {p.slug === 'travel-journal' && (
            <>The app makes it easy to capture travel moments even without a connection. It feels polished and reliable for day to day use, and I continue to refine the UI and sync behavior as I use it on trips.</>
          )}
          {p.slug !== 'reframe-ai' && p.slug !== 'music-recs' && p.slug !== 'acellus-gold-store' && p.slug !== 'travel-journal' && (
            <>Add metrics, user feedback, or short lessons learned here (e.g. "reduced load time by 30%", "validated prototype with 8 users").</>
          )}
        </p>
      </section>
    </article>
  )
}