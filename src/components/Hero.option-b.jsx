import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/roy-martin-headshot.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-indigo-500 mb-8"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-6xl md:text-8xl font-black text-white leading-tight mb-4"
        >
          Roy Martin
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-2xl text-white/70 mb-8"
        >
          Full-Stack Developer · Creative Technologist
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6"
        >
          <a href="#contact" className="text-white hover:text-indigo-400 transition-colors">Contact ↗</a>
          <a href="#portfolio" className="text-white hover:text-indigo-400 transition-colors">Work ↗</a>
          <a href="/resume.pdf" className="text-white/50 hover:text-white transition-colors">Resume ↗</a>
        </motion.div>
      </div>
    </section>
  )
}
