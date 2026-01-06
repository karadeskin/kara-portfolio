// about page component

export default function About() {
  const skills = [
    { name: 'React', color: '#FF8A80' },
    { name: 'Typescript', color: '#FF8A80' },
    { name: 'JavaScript', color: '#FFA860' },
    { name: 'HTML5', color: '#FFB3D9' },
    { name: 'CSS3', color: '#A89BFF' },
    { name: 'Tailwind CSS', color: '#FFA860' },
    { name: 'Flask', color: '#FFB3D9' },
    { name: 'Streamlit', color: '#FF8A80' },
    { name: 'Python', color: '#FFA860' },
    { name: 'GO', color: '#A89BFF' },
    { name: 'REST APIs', color: '#FF8A80' },
    { name: 'C++', color: '#FFB3D9' },
    { name: 'pandas', color: '#FFA860' },
    { name: 'NumPy', color: '#FFB3D9' },
    { name: 'C', color: '#E8B3E8' },
    { name: 'SQL', color: '#FF8A80' },
    { name: 'Docker', color: '#E8B3E8' },
    { name: 'AWS', color: '#E8B3E8' },
    { name: 'Azure', color: '#A89BFF' },
    { name: 'Git', color: '#FF8A80' },
    { name: 'Vercel', color: '#FFA860' },
  ]

  return (
    <main data-custom-footer>
      {/* Main content grid */}
      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: '1fr 380px',
        marginBottom: '24px'
      }}>
        {/* About Me Card */}
        <div className="card">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '20px' }}>
            About Me
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1rem', color: 'var(--text)' }}>
            Hi, I'm Kara! I graduated in May 2025 with a Computer Science degree from KU 
            and am currently a Full-Stack Development Apprentice at Acellus. I enjoy building 
            applications, from clean React frontends to efficient Go APIs. I'm especially 
            passionate about projects that combine technology with education, health, or 
            tools that make people's lives easier. Outside of coding, I love working out, hiking, 
            and spending time outdoors — and I'm passionate about helping children and 
            giving back to my community.
          </p>
        </div>

        {/* Photo Card */}
        <div 
          className="card" 
          style={{ 
            padding: 0,
            overflow: 'hidden',
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
      </div>

      {/* Skills Card - full width */}
      <div 
        className="card" 
        style={{ 
          marginBottom: '32px',
          background: 'var(--surface)'
        }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>
          Skills
        </h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
        }}>
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="badge"
              style={{
                backgroundColor: 'transparent',
                borderColor: skill.color,
                color: skill.color,
                fontSize: '0.95rem',
                padding: '8px 16px',
                fontWeight: 500,
                borderWidth: '2px'
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
