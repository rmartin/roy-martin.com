import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/roy-martin-headshot.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-400 text-lg mb-4 tracking-widest uppercase"
        >
          Developer & Designer
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-7xl md:text-9xl font-black text-white leading-none mb-6"
        >
          ROY<br/>MARTIN
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl text-white/60 max-w-md mb-10"
        >
          Building digital experiences that matter.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#contact" 
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-indigo-400 hover:text-white transition-colors"
          >
            Get in Touch
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#portfolio" 
            className="px-8 py-4 border border-white/30 text-white rounded-full hover:border-white transition-colors"
          >
            View Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
