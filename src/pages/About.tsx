// about page component
import NowPlaying from '../components/NowPlaying';

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-6">
      <img
        src="/me.JPG"
        alt="Kara Deskin"
        style={{
          width: 200,
          height: 250,
          objectFit: "cover",
          borderRadius: "50%",
          display: "block"
        }}
        loading="lazy"
        decoding="async"
      />
      <div>
        <h2>About Me</h2>
        <p>
          Hi, I’m Kara! I graduated in May 2025 with a Computer Science degree
          from KU and am currently a Full-Stack Development Apprentice at Acellus.
          I enjoy building applications, from clean React frontends to efficient Go APIs.
          I’m especially passionate about projects that combine technology with education,
          health, or tools that make people’s lives easier. Outside of coding, I love working
          out, hiking, and spending time outdoors — and I’m passionate about helping children
          and giving back to my community.
        </p>

        <h3 className="mt-6">Skills</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
          {[
            "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
            "REST APIs", "Flask", "Streamlit",
            "Go", "Python", "SQL", "pandas", "NumPy", "C", "C++",
            "Git", "Docker", "AWS", "Azure", "Vercel"
          ].map((skill) => (
            <span
              key={skill}
              style={{
                display: "inline-block",
                padding: "6px 10px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                background: "rgba(255, 105, 180, 0.12)",
                color: "#b83280",
                border: "1px solid rgba(255,105,180,0.25)"
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 👇 Add your NowPlaying widget right here */}
        <div className="mt-4">
          <NowPlaying />
        </div>
        <div style={{ marginTop: 8, padding: 8, border: '1px dashed #f0a' }}>
          about debug: i am rendering
        </div>
      </div>
    </section>
  )
}