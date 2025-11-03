import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Who are you and what do you do?', a: 'I am Avay Choudhary Kurmi, a full-stack developer focused on building responsive, performant web apps and practical AI features.' },
  { q: 'What tech do you use?', a: 'JavaScript/TypeScript, React, Node.js/Express, MongoDB/MySQL; with Tailwind, Framer Motion, and deployment on Vercel/Render/Netlify.' },
  { q: 'What projects are you most proud of?', a: 'Civic Report System (MERN, geolocation), AI/ML experiments like tumor detection, and a conversational assistant chatbot.' },
  { q: 'Are you open to internships or freelance?', a: 'Yes. I am actively open to internships and selective freelance work.' },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <main className="max-w-[900px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-display font-semibold heading">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-3">
        {faqs.map((f, idx) => {
          const open = openIdx === idx
          return (
            <motion.div key={f.q} className="glass p-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <button onClick={() => setOpenIdx(open ? null : idx)} className="w-full text-left flex items-center justify-between gap-2">
                <span className="font-medium">{f.q}</span>
                <span className={`transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="mt-2 opacity-85">
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}


