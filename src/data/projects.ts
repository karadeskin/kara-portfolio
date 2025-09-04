//project info 

export type Project = {
    slug: string
    title: string
    summary: string
    tech: { name: string; color: string }[] 
    repo?: string
    live?: string
  }
  
  export const PROJECTS: Project[] = [
    {
      slug: 'reframe-ai',
      title: 'Reframe — AI Mental Health Chatbot',
      summary:
        'Streamlit app for journaling + mood tracking with sentiment analysis and SQL logging.',
      tech: [
        { name: 'Python', color: '#FF7F50' }, 
        { name: 'Streamlit', color: '#FF69B4' }, 
        { name: 'SQL', color: '#FFA500' }, 
        { name: 'pandas', color: '#FFB347' }, 
      ],
      repo: 'https://github.com/karadeskin/reframe',
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
    },
    {
      slug: 'acellus-gold-store',
      title: 'Acellus Gold Store Website',
      summary:
        'Full-stack contributions to e-commerce site; React (Vite+TS) front end and Go APIs.',
      tech: [
        { name: 'React', color: '#FF69B4' },
        { name: 'TypeScript', color: '#FF7F50' },
        { name: 'Go', color: '#FFA07A' },
      ],
    },
  ]