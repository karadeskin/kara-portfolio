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
          <p style={{ lineHeight: 1.7, fontSize: '1rem', color: 'var(--text)', marginBottom: '16px' }}>
            Hi, I'm Kara! I graduated in May 2025 with a Bachelor of Science in Computer Science from the University of Kansas School of Engineering
            and now work as a Clinical Solution Delivery Consultant at Netsmart. I still love the builder side of things too, especially backend development,
            APIs, and shipping tools that actually make work easier.
          </p>
          <p style={{ lineHeight: 1.7, fontSize: '1rem', color: 'var(--text)' }}>
            I like being in that sweet spot between technical problem-solving and client-facing work, translating needs into solutions and then helping teams
            bring them to life. Outside of work, I love traveling, working out, hiking, and finding new places outdoors with my mini goldendoodle, Tucker.
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
            src="/vibe.PNG" 
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

      {/* Fun Facts Card - full width */}
      <div 
        className="card" 
        style={{ 
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #FFA860 0%, #FF8A80 50%, #FFB3D9 100%)',
          border: 'none',
          color: '#fff'
        }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>
          Fun Facts
        </h3>
        <ul style={{ 
          margin: 0,
          padding: 0,
          listStyle: 'none',
          fontSize: '1.05rem',
          lineHeight: 2,
          marginBottom: '24px'
        }}>
          <li style={{ 
            paddingLeft: '28px',
            position: 'relative'
          }}>
            <span style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              fontSize: '1.2rem'
            }}>✦</span>
            I have a mini goldendoodle named Tucker
          </li>
          <li style={{ 
            paddingLeft: '28px',
            position: 'relative'
          }}>
            <span style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              fontSize: '1.2rem'
            }}>✦</span>
            I love EDM & rap music
          </li>
          <li style={{ 
            paddingLeft: '28px',
            position: 'relative'
          }}>
            <span style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              fontSize: '1.2rem'
            }}>✦</span>
            My favorite color is orange
          </li>
        </ul>
        <a
          href="https://open.spotify.com/user/kmdeskin"
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{
            background: '#fff',
            borderColor: 'transparent',
            color: '#FF8A80',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          Check out my Spotify →
        </a>
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
