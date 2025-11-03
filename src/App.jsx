import { useEffect, useState, Suspense, lazy } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Menu, Moon, Sun, Github, Linkedin, Globe, Download } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import './App.css'
const Chatbot = lazy(() => import('./components/Chatbot.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))

function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('All')
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY || window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.round((scrolled / docHeight) * 100) : 0
      setScrollPct(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Shared motion variants for staggered entrances
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08, ease: 'easeOut' }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  }

  const projectTags = ['All', 'Web', 'AI/ML', 'Chatbots', 'MERN']
  const projects = [
    { t: 'Civic Report System', s: 'Full-stack civic issue reporting with geolocation tagging', tags: ['MERN'], demo: '#', code: '#' },
    { t: 'Full Stack Tour and Travel Website', s: 'Booking and itinerary management web app', tags: ['Web'], demo: '#', code: '#' },
    { t: 'Object Detection (YONO)', s: 'Python-based object detection pipeline', tags: ['AI/ML'], demo: '#', code: '#' },
    { t: 'Assistant Chatbot', s: 'Conversational assistant with intents and context', tags: ['Chatbots'], demo: '#', code: '#' },
    { t: 'Brain Tumor Detection', s: 'ML model for tumor classification', tags: ['AI/ML'], demo: '#', code: '#' },
    { t: 'Dental Clinic Website', s: 'Responsive clinic website', tags: ['Web'], demo: 'https://dental-websites.vercel.app/', code: '#' },
  ]
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(projectFilter))

  function HomeContent() {
    return (
      <main className="max-w-[1200px] mx-auto px-4">
        {/* Hero */}
        <section id="home" className="py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Photo Section Start */}
              <div className="mb-6 flex justify-center">
                <motion.div 
                  className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src="/portfolio/photos.jpg"
                    alt="Avay Choudhary Kurmi"
                    loading="lazy"
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/portfolio/photos.jpg'; // Fallback to second image if first fails
                    }}
                  />
                </motion.div>
              </div>
              {/* Photo Section End */}
              <p className="text-accent font-mono">Hi, I’m</p>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 font-display">Avay Choudhary Kurmi</h1>
              <h2 className="mt-2 text-xl text-accent">
                <Typewriter words={['Full Stack Developer','AI & ML Enthusiast','Problem Solver']} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={40} delaySpeed={1400} />
              </h2>
              <p className="mt-4 opacity-85 text-lg max-w-prose">I build responsive, accessible, and performant web applications with modern JavaScript, React, and backend services.</p>
              {/* Tech stack badges */}
              <div className="mt-4 flex flex-wrap gap-3 items-center">
                <span className="tech-badge" title="React">
                  <svg width="16" height="16" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g fill="#61DAFB">
                      <path d="M64 45.9a18.1 18.1 0 1 0 0 36.2 18.1 18.1 0 0 0 0-36.2z"/>
                    </g>
                    <g stroke="#61DAFB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                      <ellipse cx="64" cy="64" rx="48" ry="16"/>
                      <ellipse cx="64" cy="64" rx="48" ry="16" transform="rotate(60 64 64)"/>
                      <ellipse cx="64" cy="64" rx="48" ry="16" transform="rotate(120 64 64)"/>
                    </g>
                  </svg>
                  <span>React</span>
                </span>

                <span className="tech-badge" title="Node.js">
                  <svg width="16" height="16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fill="#68A063" d="M64 10L108 32v64L64 118 20 96V32z"/>
                    <path fill="#fff" d="M64 38v52l22-13V51z" opacity=".1"/>
                  </svg>
                  <span>Node.js</span>
                </span>

                <span className="tech-badge" title="MongoDB">
                  <svg width="16" height="16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fill="#47A248" d="M64 10s18 18 18 34c0 24-18 44-18 44s-18-20-18-44C46 28 64 10 64 10z"/>
                    <path fill="#7AC142" d="M64 54s12 10 12 20c0 14-12 26-12 26s-12-12-12-26c0-10 12-20 12-20z"/>
                  </svg>
                  <span>MongoDB</span>
                </span>
              </div>
              <div className="mt-8 flex gap-3">
                  <a href="#projects" className="btn btn-accent-filled inline-flex items-center gap-2">
                    <Globe size={16} />
                    <span>View Projects</span>
                  </a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="/portfolio/Avay_Choudhary_Kurmi_Resume(U).pdf" className="btn btn-accent-filled inline-flex items-center gap-2" download="Avay_Choudhary_Kurmi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download size={18} />
                    <span>Download Resume</span>
                  </motion.a>
              </div>
              <div className="mt-6 flex gap-4 opacity-90">
                <a href="https://github.com/kurmiz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href="https://linkedin.com/in/avay-choudhary-kurmi-773b26303" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="http://kurmiabhay.com.np" target="_blank" rel="noreferrer" aria-label="Portfolio"><Globe /></a>
              </div>
            </div>
            <div className="relative">
              <div className="animated-glow" />
              <div className="h-60 md:h-80 rounded-2xl glass flex items-center justify-center">
                <span className="font-mono opacity-80">Dark Tech Theme</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section id="about" className="py-16" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }} transition={{ duration: 0.45 }}>
          <motion.div>
            <h3 className="text-2xl font-semibold font-display heading">About</h3>
            <p className="mt-3 max-w-prose opacity-85">I am a developer focused on building practical projects and learning modern web development. I enjoy solving problems and continuously improving my skills.</p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="glass p-5">
                <h4 className="font-semibold">Education</h4>
                <ul className="mt-2 space-y-2 text-sm opacity-90">
                  <li><span className="font-mono text-accent">2021–2025</span> — Jain Deemed-to-be University, B.Tech CSE</li>
                  <li><span className="font-mono text-accent">Completed 2021</span> — Global School of Science, +2 Science</li>
                </ul>
                <a href="/resume.pdf" className="inline-block mt-3 px-3 py-1.5 rounded border border-white/15">Download Resume</a>
              </div>
              <div className="glass p-5">
                <h4 className="font-semibold">What Others Say</h4>
                <div className="mt-3 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">AC</div>
                  <blockquote className="text-sm opacity-90">
                    “Avay is proactive, detail-oriented, and ships features reliably. A pleasure to collaborate with.”
                    <footer className="mt-1 opacity-70">— Mentor, Full Stack Engineering</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="glass p-5 md:col-span-2">
                <h4 className="font-semibold">My Journey</h4>
                <ol className="mt-3 relative">
                  <li className="pl-5 border-l border-white/15 pb-3">
                    <span className="font-mono text-accent">2021</span>
                    <div className="mt-1 text-sm opacity-85">Started CSE at Jain University; built first JS projects.</div>
                  </li>
                  <li className="pl-5 border-l border-white/15 pb-3">
                    <span className="font-mono text-accent">2023</span>
                    <div className="mt-1 text-sm opacity-85">Dove into MERN; shipped multiple web apps and APIs.</div>
                  </li>
                  <li className="pl-5 border-l border-white/15 pb-3">
                    <span className="font-mono text-accent">2024</span>
                    <div className="mt-1 text-sm opacity-85">Internship in web dev; published ML research work.</div>
                  </li>
                  <li className="pl-5 border-l border-white/15">
                    <span className="font-mono text-accent">2025</span>
                    <div className="mt-1 text-sm opacity-85">Full-stack internship; building civic tech and chatbots.</div>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
  </motion.section>

        {/* Skills */}
        <motion.section id="skills" className="py-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }} transition={{ duration: 0.45 }}>
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-semibold font-display heading">Skills</h3>
            <motion.div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Languages', items: ['Python', 'Java', 'JavaScript', 'SQL', 'PHP'] },
                { title: 'Frameworks', items: ['React', 'Node.js', 'Express'] },
                { title: 'Databases', items: ['MongoDB', 'MySQL'] },
                { title: 'Tools', items: ['Git', 'Docker', 'Vercel', 'Netlify', 'Render'] },
                { title: 'Concepts', items: ['REST API', 'WebSocket', 'Agile Development'] },
              ].map((grp) => (
                <motion.div key={grp.title} variants={itemVariants} className="glass p-5">
                  <h4 className="font-semibold mb-2">{grp.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((it) => (
                      <span key={it} className="px-2 py-1 text-sm rounded border border-white/15">{it}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
  </motion.section>

        {/* Projects */}
        <motion.section id="projects" className="py-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }} transition={{ duration: 0.45 }}>
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-semibold font-display heading">Projects</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {projectTags.map(tag => (
                <button key={tag} onClick={() => setProjectFilter(tag)} aria-pressed={projectFilter === tag} className={`btn ${projectFilter === tag ? 'btn-accent' : 'btn-ghost'}`}>
                  {tag}
                </button>
              ))}
            </div>
            <motion.div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <motion.article key={p.t} variants={itemVariants} className="glass p-5">
                  <h4 className="font-semibold">{p.t}</h4>
                  <p className="mt-1 text-sm opacity-85">{p.s}</p>
                  <div className="mt-2 flex gap-2 text-xs opacity-80">
                    {p.tags.map((tg) => <span key={tg} className="px-2 py-0.5 rounded border border-white/15">{tg}</span>)}
                  </div>
                  <div className="mt-3 flex gap-3 text-sm">
                    <a 
                      className={`link-accent ${p.demo === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`} 
                      href={p.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => p.demo === '#' && e.preventDefault()}
                    >
                      Demo
                    </a>
                    <a 
                      className={`link-accent ${p.code === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
                      href={p.code} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => p.code === '#' && e.preventDefault()}
                    >
                      Code
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
  </motion.section>

        {/* Experience */}
        <motion.section id="experience" className="py-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }} transition={{ duration: 0.45 }}>
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-semibold font-display heading">Experience & Internships</h3>
            <motion.div className="mt-6 grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="glass p-5">
                <h4 className="font-semibold">RKM THE WEB BUILDER — Web Dev Intern</h4>
                <p className="text-sm opacity-80">Feb–Mar 2024</p>
                <p className="mt-2 text-sm opacity-85">Built responsive front-ends with HTML, CSS, JavaScript.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="glass p-5">
                <h4 className="font-semibold">Jain (Deemed-to-be) University — Full Stack Dev Intern</h4>
                <p className="text-sm opacity-80">Jan–May 2025</p>
                <p className="mt-2 text-sm opacity-85">Developed civic report web app with geolocation; implemented chatbots; deployed MERN apps.</p>
              </motion.div>
            </motion.div>
          </motion.div>
  </motion.section>

        {/* Achievements */}
        <motion.section id="achievements" className="py-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }} transition={{ duration: 0.45 }}>
          <motion.div>
            <h3 className="text-2xl font-semibold font-display heading">Achievements & Research</h3>
            <ul className="mt-4 space-y-3">
              <li className="glass p-5">
                <span className="font-semibold">Research Paper:</span> Predicting Health Insurance Charges using ML (2024)
              </li>
              <li className="glass p-5">
                <span className="font-semibold">Publication:</span> Smart Farming Decision Support System (DSS) — Transformer-based NLP with real-time weather/market data.
                <div className="mt-2 text-sm">
                  <a className="link-accent" href="https://ieeexplore.ieee.org/document/11199188" target="_blank" rel="noreferrer">View on IEEE Xplore</a>
                </div>
              </li>
            </ul>
          </motion.div>
  </motion.section>

        {/* Contact */}
        <motion.section id="contact" className="py-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "-100px 0px" }} transition={{ duration: 0.45 }}>
          <motion.div>
            <h3 className="text-2xl font-semibold font-display heading">Contact</h3>
            <p className="mt-2 opacity-85">I’m open to internships and freelance opportunities. Let’s connect.</p>
            <form className="mt-6 grid gap-3 max-w-lg" action="https://formspree.io/f/your-form-id" method="POST">
              <input className="px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-accent/70" placeholder="Name" name="name" required />
              <input type="email" className="px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-accent/70" placeholder="Email" name="email" required />
              <textarea className="px-3 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-accent/70" placeholder="Message" name="message" rows="5" required />
              <button type="submit" className="justify-self-start btn btn-accent">Send</button>
            </form>
          </motion.div>
          <div className="mt-6 flex gap-3 opacity-90">
            <a href="https://github.com/kurmiz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://linkedin.com/in/avay-choudhary-kurmi-773b26303" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="http://kurmiabhay.com.np" target="_blank" rel="noreferrer" aria-label="Portfolio"><Globe /></a>
          </div>
  </motion.section>
      </main>
    )
  }

  return (
    <div className="min-h-dvh bg-background text-text dark:bg-background">
      {/* Scroll progress bar */}
      <div className="progress-wrap" aria-hidden>
        <div className="progress-bar" style={{ width: `${scrollPct}%` }} />
      </div>
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-white/10 relative">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg md:text-xl">Avay Choudhary Kurmi</Link>
          <nav className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
            <Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button 
              aria-label="Toggle theme" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="p-2 rounded border border-white/15 hover:border-accent/60 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <Menu />
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        {menuOpen && (
          <div className="md:hidden px-4 pb-3 flex flex-col gap-2">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link>
          </div>
        )}
      </header>
      <Suspense fallback={<div className="suspense-fallback"><div className="suspense-spinner" aria-hidden></div><div>Loading content…</div></div>}>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Suspense>

      <footer className="border-t border-white/10 py-6 text-center opacity-80">
        © {new Date().getFullYear()} Avay Choudhary Kurmi
      </footer>
      <Suspense fallback={<div className="suspense-fallback"><div className="suspense-spinner" aria-hidden></div><div>Loading chat…</div></div>}>
        <Chatbot />
      </Suspense>
      </div>
  )
}

export default App
