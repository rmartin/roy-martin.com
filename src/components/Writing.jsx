import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const posts = [
  { title: 'The Future of AI Agents', excerpt: 'How autonomous systems will reshape software development.', date: '2026.01' },
  { title: 'Building with LLMs', excerpt: 'Practical patterns for production AI applications.', date: '2025.12' },
  { title: 'ML Systems at Scale', excerpt: 'Lessons from deploying models to millions of users.', date: '2025.11' },
]

export default function Writing() {
  const [ref, inView] = useInView()

  return (
    <section id="thoughts" className="py-32 px-6 bg-neutral-950/80">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-sm">04 // THOUGHTS</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>
        
        <div className="text-center py-16 border border-neutral-800 rounded-xl">
          <span className="text-indigo-400 font-mono text-sm">COMING SOON</span>
          <p className="text-neutral-500 mt-2">Thoughts on AI, leadership, and building software</p>
        </div>
      </motion.div>
    </section>
  )
}
