import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
        <div className="brand">My Portfolio</div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  )
}

export default App
