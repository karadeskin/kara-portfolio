//home page

import { Link } from '@tanstack/react-router'

export default function Home() {
  return (
    <section className="relative section stack hero overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40 text-pink-200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FF7F50" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160L48,160C96,160,192,160,288,165.3C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>

      <span className="badge">AI • Full-Stack • Web</span>
      <h1 className="text-4xl font-bold">Hi, I’m Kara</h1>
      <p className="muted">
        Full-Stack Developer. Will never say no to coffee! Here are a few things I’m proud of ↓
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Link className="btn primary" to="/projects">
          View Projects
        </Link>
        <a className="btn" href="mailto:kmdeskin@me.com">
          Contact me
        </a>
      </div>
    </section>
  )
}
