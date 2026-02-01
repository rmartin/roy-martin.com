import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Experience', 'Experiments', 'Thoughts', 'Contact']

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-mono text-white">
          <span className="text-indigo-400">{'<'}</span>RM<span className="text-indigo-400">{'/>'}</span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-6 text-sm font-mono text-neutral-400">
            {links.map((link, i) => (
              <motion.li key={link} whileHover={{ y: -2 }}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-400 transition-colors">
                  <span className="text-indigo-500/50">0{i + 1}.</span> {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
