import React from 'react'
import { PROJECTS } from '../../data/projects'
import { Link } from '@tanstack/react-router'

export default function ReframeCaseStudy() {
  const p = PROJECTS.find((x) => x.slug === 'reframe-ai')!
  return (
    <main className="case-study stack">
    <header className="hero">
  <Link className="navlink active" to="/projects">← Back to Projects</Link>
        <h1>{p.title}</h1>
        <p className="muted">Reframe AI Mental Health Chatbot</p>
        {p.live && (
          <p style={{ marginTop: 8 }}>
            <a href={p.live} target="_blank" rel="noreferrer" className="btn">
              Try it live ↗
            </a>
            <span className="muted" style={{ marginLeft: 12, fontSize: '0.9rem' }}>
              Log in with test/test
            </span>
          </p>
        )}
      </header>

      <section>
        <h2>Problem</h2>
        <p>
          I wanted a simple, private way to test whether journaling + lightweight sentiment feedback could help
          people notice mood patterns. There weren't many small, privacy-first tools that did this without
          heavy infrastructure, so I built a prototype to learn fast.
        </p>
      </section>

      <section>
        <h2>Approach</h2>
        <p>
          I used Streamlit so I could iterate UI ideas quickly, added a small sentiment model to score entries,
          and logged everything to SQLite so I could run quick pandas analyses and charts.
        </p>
      </section>

      <section>
        <h2>Implementation highlights</h2>
        <p>
          The prototype focused on minimal friction: short prompts, an easy journaling flow, and immediate
          feedback. On the backend I used a pre-trained sentiment pipeline and a tiny SQL table to store entries
          with timestamps for trend analysis.
        </p>
        <pre>
{`# sentiment example (conceptual)
from transformers import pipeline
classifier = pipeline("sentiment-analysis")

def score_text(text):
    result = classifier(text)[0]
    return 1 if result['label']=='POSITIVE' else -1, result['score']`}
        </pre>
      </section>

      <section>
        <h2>Outcomes</h2>
        <p>
          I tested the prototype with ~12 people. Around 75% reported the prompts helped them notice patterns,
          average journaling session length was ~6 minutes, and follow-up checks showed ~58% returned to
          journal at least once more within two weeks.
        </p>
      </section>
    </main>
  )
}
