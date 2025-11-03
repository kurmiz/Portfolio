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
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
              className="w-[90vw] max-w-sm bg-[#181f2a] dark:bg-[#181f2a] rounded-xl p-4 pb-3 mr-1 mb-3 shadow-2xl border border-white/15 z-50"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold">Ask Avay</div>
              <button aria-label="Close" className="p-1 rounded hover:bg-white/10" onClick={() => setOpen(false)}><X size={16} /></button>
            </div>
            <div className="mt-2 h-56 overflow-auto space-y-3 pr-1 p-1">
              {messages.map((m, i) => (
                <motion.div key={i} variants={containerVariants} initial="hidden" animate="show" className={`text-sm ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span
                    className={`inline-block px-3 py-2 rounded-lg shadow-sm border ${m.role === 'user'
                      ? 'bg-white text-[#181f2a] border-white/40 ml-auto'
                      : 'bg-accent text-white border-accent/40'} `}
                  >{m.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded-md bg-white text-[#181f2a] border border-white/40 placeholder:text-[#181f2a]/60 focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Type a message..."
                aria-label="Chat message"
              />
              <button onClick={send} className="ml-2 h-10 px-4 rounded-md bg-accent text-white flex items-center justify-center hover:opacity-95 shadow" aria-label="Send message">
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open Chatbot"
        onClick={() => setOpen(v => !v)}
        className="shadow-lg rounded-full p-2 flex items-center justify-center"
        style={{ background: 'var(--accent-color, #38bdf8)', color: 'var(--accent-foreground, #fff)' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Mini robot SVG */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" fill="rgba(255,255,255,0.06)" />
          <rect x="8" y="3" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" fill="rgba(255,255,255,0.06)" />
          <circle cx="9.5" cy="12" r="1" fill="currentColor" />
          <circle cx="14.5" cy="12" r="1" fill="currentColor" />
          <rect x="10.5" y="15" width="3" height="1.5" rx="0.3" fill="currentColor" />
          <line x1="12" y1="3" x2="12" y2="1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </motion.button>
    </div>
  )
}


