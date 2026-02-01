import { motion } from 'framer-motion'
import ParticleField from './ParticleField'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-mono text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10">
            Sr. Software Development Manager @ AWS • Full-Stack Developer • AI Enthusiast
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 leading-none mb-6"
        >
          ROY MARTIN
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-4 font-light"
        >
          Navigating the future of building with <span className="text-indigo-400 font-medium">AI</span>
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-mono text-sm text-neutral-500 mb-12"
        >
          {'>'} One small step for code, one giant leap for mankind_
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
            href="#contact" 
            className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg"
          >
            Let's Connect
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#experience" 
            className="px-8 py-4 border border-neutral-700 text-neutral-300 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-colors"
          >
            Explore My Journey
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-neutral-600 text-sm font-mono"
        >
          scroll ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
