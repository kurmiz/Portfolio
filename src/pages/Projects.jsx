const demoProjects = [
  {
    title: 'Project One',
    description: 'Brief description of what this project does and tech used.',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project showcasing your skills and learning.',
    liveUrl: '#',
    codeUrl: '#',
  },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        {demoProjects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="actions">
              <a href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>
              <a href={p.codeUrl} target="_blank" rel="noreferrer">Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


