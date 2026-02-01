import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/roy-martin-headshot.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
      
      <div className="relative text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-8xl md:text-[12rem] font-black text-white leading-none tracking-tighter"
        >
          RM
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl text-white/80 mt-4 tracking-wide"
        >
          Roy Martin
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/50 mt-2 mb-10"
        >
          Developer & Designer
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-8 text-sm tracking-widest uppercase"
        >
          <a href="#contact" className="text-white/70 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all">Contact</a>
          <a href="#portfolio" className="text-white/70 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all">Work</a>
        </motion.div>
      </div>
    </section>
  )
}
