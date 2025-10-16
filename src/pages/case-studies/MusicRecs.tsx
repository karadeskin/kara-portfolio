import React from 'react'
import { PROJECTS } from '../../data/projects'

export default function MusicRecsCaseStudy() {
  const p = PROJECTS.find((x) => x.slug === 'music-recs')!
  return (
    <main className="case-study stack">
  <header className="hero">
  <a className="navlink active" href="/projects">← Back to Projects</a>
    <h1>{p.title}</h1>
  <p className="muted">Music Recommendation System PCA + KNN</p>
    {/* Intentionally left empty: project links live on the Projects page */}
  </header>

      <section>
        <h2>Problem</h2>
        <p>
          I wanted to see how far you can get using only content features from Spotify. No collaborative data,
          just audio features, and to see whether you can still recommend tracks that feel similar.
        </p>
      </section>

      <section>
        <h2>Approach</h2>
        <p>
          I preprocessed Spotify audio features, scaled them, and used PCA to cut dimensionality so nearest
          neighbor queries were fast. I ran a small Flask API to serve recommendations and gather feedback and
          latency metrics.
        </p>
      </section>

      <section>
        <h2>Implementation highlights</h2>
        <p>
          PCA compressed about 24 audio features down to 6 principal components which kept the signal but made
          KNN queries fast and easier to reason about. For the prototype I used scikit learn and a KD tree
          backed NearestNeighbors index.
        </p>
        <pre>
{`# PCA + KNN example
from sklearn.decomposition import PCA
from sklearn.neighbors import NearestNeighbors
pca = PCA(n_components=6)
X_pca = pca.fit_transform(X_features)
knn = NearestNeighbors(n_neighbors=10).fit(X_pca)
`}
        </pre>
      </section>

      <section>
        <h2>Outcomes</h2>
        <p>
          On a 10k track dataset the API averaged around 50ms per recommendation. In quick listener tests about
          seven out of ten recommendations felt like a good fit which was great for a proof of concept and
          useful for playlist building experiments.
        </p>
      </section>
    </main>
  )
}
