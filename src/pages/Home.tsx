//home page

import { Link } from '@tanstack/react-router'
import Button from '../components/Button'

export default function Home() {
  const skills = [
    { name: 'Flask', color: '#FFB3D9' },
    { name: 'pandas', color: '#FFA860' },
    { name: 'Go', color: '#A89BFF' },
    { name: 'SQL', color: '#E8B3E8' },
    { name: 'Python', color: '#FFB3D9' },
    { name: 'Leaflet', color: '#FFB3D9' },
    { name: 'Streamlit', color: '#FF8A80' },
    { name: 'Typescript', color: '#FF8A80' },
    { name: 'NumPy', color: '#A89BFF' },
    { name: 'React', color: '#FF8A80' },
  ]

  return (
    <main data-home-page>
      {/* 2x2 Grid Layout */}
      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: '380px 1fr',
        gridTemplateRows: 'auto auto',
        marginBottom: '32px'
      }}>
        {/* Photo Card - spans 2 rows */}
        <div 
          className="card" 
          style={{ 
            gridRow: '1 / 3',
            padding: 0,
            overflow: 'hidden',
            height: '100%'
          }}
        >
          <img 
            src="/me.JPG" 
            alt="Kara Deskin" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Name & Title Card */}
        <div className="card">
          <h1 style={{ 
            fontSize: '4rem', 
            margin: '0 0 20px 0', 
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            Kara<br />Deskin
          </h1>
          <span 
            className="badge" 
            style={{ 
              background: 'var(--gradient-orange-pink)',
              borderColor: 'transparent',
              color: 'var(--text)',
              fontSize: '1rem',
              padding: '10px 20px',
              fontWeight: 600
            }}
          >
            AI•Full-Stack•Web
          </span>
          <p style={{ marginTop: '20px', lineHeight: 1.6, fontSize: '1.05rem' }}>
            Turning ideas into products. Fast learner, curious builder, AI-fluent.
          </p>
          <p style={{ marginTop: '8px', lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--muted)' }}>
            Clinical Solution Delivery Consultant + Backend Developer, Midwest made.
          </p>
        </div>

        {/* CTA Card */}
        <div 
          className="card" 
          style={{ 
            background: 'linear-gradient(135deg, #FFA860 0%, #FF8A80 50%, #FFB3D9 100%)',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 600, color: '#fff' }}>
            Here are a few things<br />I'm proud of ↓
          </h2>
          <Link
            to="/projects"
            style={{
              background: 'transparent',
              border: '2px solid #fff',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Skills Card - full width */}
      <div className="card" style={{ marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="badge"
              style={{
                backgroundColor: skill.color,
                borderColor: skill.color,
                color: '#fff',
                fontSize: '0.95rem',
                padding: '8px 16px',
                fontWeight: 500
              }}
            >
              {skill.name}
            </span>
          ))}
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
          marginTop: '32px'
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
