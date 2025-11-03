import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send } from 'lucide-react'

const knowledge = [
  { k: ['name', 'who are you', 'yourself'], a: 'I’m Avay Choudhary Kurmi, a full‑stack developer focused on React, Node.js and practical AI.' },
  { k: ['skills', 'stack', 'tech'], a: 'Core stack: React, Node/Express, MongoDB/MySQL. Also Tailwind, Framer Motion, Docker, Vercel/Render.' },
  { k: ['project', 'projects'], a: 'Highlights: Civic Report System (MERN + geolocation), AI/ML experiments (tumor detection), assistant chatbot.' },
  { k: ['contact', 'email'], a: 'Use the Contact section form, or connect on LinkedIn: linkedin.com/in/avay-choudhary-kurmi-773b26303' },
  { k: ['resume', 'cv'], a: 'You can download my resume from the hero section or the About card.' },
]

function answerFor(input) {
  const q = input.toLowerCase()
  for (const item of knowledge) {
    if (item.k.some(keyword => q.includes(keyword))) return item.a
  }
  return "I can help with info about me, my skills, and projects. Try asking about skills or projects."
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hi! Ask me about my skills, projects, or how to contact me.' }])
  const [input, setInput] = useState('')
  const panelRef = useRef(null)

  const send = () => {
    const text = input.trim()
    if (!text) return
    const reply = answerFor(text)
    setMessages(m => [...m, { role: 'user', text }, { role: 'bot', text: reply }])
    setInput('')
  }

  const containerVariants = useMemo(() => ({ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }), [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            className="w-[90vw] max-w-sm glass p-3 pb-2 mr-1 mb-3"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold">Ask Avay</div>
              <button aria-label="Close" className="p-1 rounded hover:bg-white/10" onClick={() => setOpen(false)}><X size={16} /></button>
            </div>
            <div className="mt-2 h-56 overflow-auto space-y-2 pr-1">
              {messages.map((m, i) => (
                <motion.div key={i} variants={containerVariants} initial="hidden" animate="show" className={`text-sm ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block px-2 py-1 rounded ${m.role === 'user' ? 'bg-white/10' : 'bg-white/5'}`}>{m.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 px-2 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-accent/70" placeholder="Type a message..." />
              <button onClick={send} className="btn btn-accent"><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} aria-label="Open Chatbot" onClick={() => setOpen(v => !v)} className="btn btn-accent shadow-lg">
        <MessageSquare size={18} /> Chat
      </motion.button>
    </div>
  )
}


