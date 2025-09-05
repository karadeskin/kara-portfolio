// about page component

export default function About() {
  return (
    <section className="flex items-center gap-6">
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
        <h2>About Me </h2>
        <p>Hi, I’m Kara! I graduated in May 2025 with a Computer Science degree from KU and am currently a Full-Stack Development Apprentice at Acellus. I enjoy building applications, from clean React frontends to efficient Go APIs. I’m especially passionate about projects that combine technology with education, health, or tools that make people’s lives easier. Outside of coding, I love working out, hiking, and spending time outdoors — and I’m passionate about helping children and giving back to my community. </p>
      </div>
    </section>
  )
}