//project info 

//type Project that can be used in other files
//repo and live are optional
//tech is an array of objects with name and color
export type Project = {
  slug: string
  title: string
  summary: string
  tech: { name: string; color: string }[]
  repo?: string
  live?: string
  demo?: string
  caseStudy?: boolean
}

//constant array of projects
export const PROJECTS: Project[] = [
  {
    slug: 'reframe-ai',
    title: 'Reframe — AI Mental Health Chatbot',
    summary:
      'Streamlit app for journaling + mood tracking with sentiment analysis and SQL logging. Try it live — log in with test/test.',
    tech: [
      { name: 'Python', color: '#FF7F50' },
      { name: 'Streamlit', color: '#FF69B4' },
      { name: 'SQL', color: '#FFA500' },
      { name: 'pandas', color: '#FFB347' },
    ],
    repo: 'https://github.com/karadeskin/reframe',
    live: 'https://reframe.streamlit.app/',
    demo: '/reframe-demo.mov',
    caseStudy: true,
  },
  {
    slug: 'music-recs',
    title: 'Music Recommendation System (PCA + KNN)',
    summary:
      'Content-based song recommender using Spotify features, PCA for dimensionality reduction and KNN.',
    tech: [
      { name: 'Python', color: '#FF7F50' },
      { name: 'NumPy', color: '#FF69B4' },
      { name: 'Flask', color: '#FF8C00' },
    ],
    repo: 'https://github.com/karadeskin/Music-Recommendation',
  demo: '/music-demo.mov',
  caseStudy: true,
  },
  {
    slug: 'acellus-gold-store',
    title: 'Acellus Gold Store Website',
    summary:
      'Full-stack contributions to e-commerce site; React (Vite+TS) front end and Go APIs.\n\nUsed daily by thousands of users.',
    tech: [
      { name: 'React', color: '#FF69B4' },
      { name: 'TypeScript', color: '#FF7F50' },
      { name: 'Go', color: '#FFA07A' },
    ],
  },
  {
    slug: 'ias-forms',
    title: 'IAS Admissions Forms Engine',
    summary:
      'Built a REST API for managing student admissions data with 5 main modules (personal info, addresses, academic/employment history, interests). Designed ScyllaDB schema for concurrency and scale, with validation, error handling, and comprehensive unit tests.',
    tech: [
      { name: 'Go', color: '#00ADD8' },
      { name: 'ScyllaDB', color: '#FC5C2B' },
      { name: 'REST API', color: '#6DB33F' },
    ],
  },
  {
    slug: 'travel-journal',
    title: 'Travel Journal',
    summary: 'Personal travel journal app for logging trips, photos, and notes. Includes offline support and map views.',
    tech: [
      { name: 'React', color: '#61dafb' },
      { name: 'TypeScript', color: '#FF7F50' },
      { name: 'Leaflet', color: '#4CAF50' }
    ],
    repo: 'https://github.com/karadeskin/Travel',          
    demo: '/travel-demo.mov',
    caseStudy: false
  }
]