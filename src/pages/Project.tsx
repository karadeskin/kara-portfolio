import { useParams, Link } from '@tanstack/react-router'
import { PROJECTS } from '../data/projects'

export default function Project() {
  const { slug } = useParams({ from: '/projects/$slug' })
  const p = PROJECTS.find(x => x.slug === slug)
  
  if (!p) {
    return (
      <section className="stack">
        <h2>Not found</h2>
        <Link to="/projects" className="btn">← Back to Projects</Link>
      </section>
    )
  }

  // Get current project index for navigation
  const currentIndex = PROJECTS.findIndex(x => x.slug === slug)
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

  // Project content data
  const projectData: Record<string, {
    role: string
    approach: string
    highlights: string[]
    outcomes: string
  }> = {
    'reframe-ai': {
      role: 'Solo prototype. From concept to working prototype in about six weeks.',
      approach: 'I built a Streamlit interface for fast UI iteration, wired in a small sentiment model to score entries, and logged entries to SQLite so I could run quick pandas analyses and show trends.',
      highlights: [
        'Tech: Python, Streamlit, SQL, pandas',
        'Used a small transformer sentiment pipeline for reliable scoring and simple SQLite logging for privacy and portability',
        'Quick analytics via pandas for trend visualization'
      ],
      outcomes: 'Solo prototype validated with about 12 testers, and roughly 75% said it helped them reflect more. The average journaling session was about 6 minutes and retention was around 58% after two weeks.'
    },
    'music-recs': {
      role: 'Solo project. Iterated over four weeks to tune features and latency.',
      approach: 'I preprocessed Spotify audio features, scaled them, used PCA to reduce dimensionality, and indexed tracks with KNN. A tiny Flask API served recommendations for quick evaluation.',
      highlights: [
        'Tech: Python, NumPy, Flask',
        'PCA reduced dimensions to speed up nearest neighbor queries while preserving signal',
        'Served recommendations with a compact API to measure latency and gather feedback'
      ],
      outcomes: 'I served recommendations from a 10k track dataset with average latency around 50 ms per request. PCA reduced dimensions from about 24 to 6, which kept the signal while making queries faster. In quick listener tests, about seven out of ten recommendations felt like a good fit.'
    },
    'acellus-gold-store': {
      role: 'Full stack engineer. Work is in progress since August, working across frontend and backend with the product team.',
      approach: 'I work on both the frontend and backend, prioritizing features that directly unblock users and ops. That has meant shipping UI improvements, building backend endpoints, and tying them together so new features are reliable and easy to manage.',
      highlights: [
        'Tech: React, TypeScript, Go',
        'Built and polished the checkout and cart pages including validations and user friendly controls',
        'Implemented a full stack ship notification email flow',
        'Improved reliability with retries and better error handling for key APIs'
      ],
      outcomes: 'This work has made the checkout flow more reliable and reduced friction for customers. It also made day to day operations easier for the team by simplifying how items are added and managed.'
    },
    'travel-journal': {
      role: 'Personal project built over a few weekends and improved gradually.',
      approach: 'I built offline support and map views so logging trips, photos, and notes feels effortless. I added a lightweight sync flow to upload entries when a connection is available.',
      highlights: [
        'Tech: React, TypeScript, Leaflet',
        'Offline first design using local storage and simple sync mechanism',
        'Map integration for geotagging entries and easy visual navigation'
      ],
      outcomes: 'The app makes it easy to capture travel moments even without a connection. It feels polished and reliable for day to day use.'
    }
  }

  const data = projectData[slug] || {
    role: 'Project details coming soon.',
    approach: 'Project details coming soon.',
    highlights: ['Tech: ' + p.tech.map(t => t.name).join(', ')],
    outcomes: 'Project details coming soon.'
  }

  return (
    <main data-custom-footer>
      {/* Header with navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <Link 
          to="/projects" 
          className="btn"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          ← Back to projects
        </Link>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className="btn" style={{ padding: '10px 16px' }}>
              ←
            </Link>
          ) : (
            <button className="btn" disabled style={{ padding: '10px 16px', opacity: 0.3, cursor: 'not-allowed' }}>
              ←
            </button>
          )}
          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className="btn" style={{ padding: '10px 16px' }}>
              →
            </Link>
          ) : (
            <button className="btn" disabled style={{ padding: '10px 16px', opacity: 0.3, cursor: 'not-allowed' }}>
              →
            </button>
          )}
        </div>
      </div>

      {/* Project Title */}
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '32px' }}>
        {p.title.replace(/[-—]/g, ' ').replace(/\s+/g, ' ').trim()}
      </h1>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* Overview Card */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            Overview
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: '20px' }}>
            {p.summary.replace(/[-—]/g, ' ').replace(/\s+/g, ' ').trim()}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {p.tech.map((t) => (
              <span
                key={t.name}
                className="badge"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: t.color,
                  color: t.color,
                  fontSize: '0.9rem',
                  padding: '6px 14px',
                  borderWidth: '2px'
                }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Role & Timeline Card */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            Role & Timeline
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            {data.role}
          </p>
        </div>

        {/* Implementation Highlights Card - spans 2 columns */}
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            Implementation highlights
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
            {data.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginBottom: '32px'
      }}>
        {/* Approach Card */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            Approach
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            {data.approach}
          </p>
        </div>

        {/* Outcomes Card */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            Outcomes
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            {data.outcomes}
          </p>
        </div>
      </div>

      {/* Contact Footer */}
      <div 
        style={{ 
          display: 'flex',
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          borderTop: '1px solid var(--border)',
          marginTop: '8px'
        }}
      >
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>
          © 2026 Kara Deskin, All Rights Reserved
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href="tel:+19135538412"
            className="btn"
            style={{
              background: 'var(--coral)',
              borderColor: 'transparent',
              color: '#fff',
              fontWeight: 600
            }}
          >
            +1 (913) 553-8412
          </a>
          <a
            href="mailto:kmdeskin@me.com"
            className="btn"
            style={{
              background: 'var(--coral)',
              borderColor: 'transparent',
              color: '#fff',
              fontWeight: 600
            }}
          >
            kmdeskin@me.com
          </a>
        </div>
      </div>
    </main>
  )
}
