export default function Contact() {
  return (
    <main data-custom-footer>
      {/* Main grid layout */}
      <div style={{ 
        display: 'grid', 
        gap: '20px',
        gridTemplateColumns: '320px 1fr 1fr',
        marginBottom: '32px'
      }}>
        {/* Photo Card */}
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

        {/* Contact Me Gradient Card */}
        <div 
          className="card" 
          style={{ 
            background: 'linear-gradient(135deg, #FFA860 0%, #FF8A80 50%, #FFB3D9 100%)',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            minHeight: '200px',
            gap: '16px',
            padding: '32px 24px'
          }}
        >
          <h1 style={{ 
            margin: 0, 
            fontSize: '3.5rem', 
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
            lineHeight: 1.2
          }}>
            Contact<br />Me!
          </h1>
          <p style={{
            margin: 0,
            fontSize: '1.05rem',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 500,
            opacity: 0.95
          }}>
            Open to freelance, collab,<br />and opportunities
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="card" style={{ gridRow: '1 / 3' }}>
          <form 
            action="https://formspree.io/f/xgovjgyb" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <label 
                htmlFor="name" 
                style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '999px',
                  border: '2px solid var(--border)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pink)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '999px',
                  border: '2px solid var(--border)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pink)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                style={{ 
                  display: 'block', 
                  marginBottom: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '20px',
                  border: '2px solid var(--border)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pink)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                alignSelf: 'center',
                padding: '12px 32px',
                fontSize: '1rem'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location & Contact Info Card */}
        <div className="card">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: 700, 
                marginBottom: '12px' 
              }}>
                Located in
              </h3>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Leawood,<br />
                Kansas
              </p>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: 700, 
                marginBottom: '12px' 
              }}>
                Reach Me At
              </h3>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                913.553.8412<br />
                kmdeskin@me.com
              </p>
            </div>
          </div>
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
