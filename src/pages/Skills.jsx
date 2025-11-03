const skills = [
  'React',
  'JavaScript (ES6+)',
  'HTML & CSS',
  'Git & GitHub',
  'REST APIs',
]

export default function Skills() {
  return (
    <section>
      <h1>Skills</h1>
      <ul className="skills">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}


