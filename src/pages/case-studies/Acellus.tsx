import React from 'react'
import { PROJECTS } from '../../data/projects'

export default function AcellusCaseStudy() {
  const p = PROJECTS.find((x) => x.slug === 'acellus-gold-store')!
  return (
    <main className="case-study stack">
      <header className="hero">
  <a className="navlink active" href="/projects">← Back to Projects</a>
        <h1>{p.title}</h1>
        <p className="muted">Acellus Gold Store E commerce contributions</p>
        {/* Intentionally left empty: project links live on the Projects page */}
      </header>

      <section>
        <h2>Problem</h2>
        <p>
          While working on the Acellus Gold Store I focused on improving product listing performance and
          stabilizing the checkout flow and other areas that directly impact conversions.
        </p>
      </section>

      <section>
        <h2>Approach</h2>
        <p>
          I prioritized quick wins by lazy-loading images, memoizing product cards, and adding retry and caching for
          critical APIs. These changes were rolled out incrementally so we could measure impact.
        </p>
      </section>

      <section>
        <h2>Implementation highlights</h2>
        <p>
          Small frontend performance wins (image placeholders, memoized components) combined with backend
          retry logic reduced error noise and improved user experience.
        </p>
        <pre>
{`const ProductCard = React.memo(({product}) => {
  return <article className="card">...</article>
})`}
        </pre>
      </section>

      <section>
        <h2>Outcomes</h2>
        <p>
          Together the improvements reduced perceived product list load time by about 30% and cut checkout
          errors by ~35% during the test window, correlating with a 4 to 5 percent increase in add to cart conversions
          for the tested cohort.
        </p>
      </section>
    </main>
  )
}
