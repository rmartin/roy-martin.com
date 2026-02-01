import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-32 px-6 bg-black/80">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-sm">01 // ABOUT</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Husband. Dad. <span className="text-indigo-400">Builder.</span>
            </h2>
            <div className="space-y-4 text-lg text-neutral-400 leading-relaxed">
              <p>
                I'm a hands-on technical leader based in Portland, Oregon with over two decades 
                of experience in software and web development. Currently a Senior Software 
                Development Manager at AWS, I lead teams building tools that help developers 
                learn and grow.
              </p>
              <p>
                I'm deeply curious about how AI is transforming the way we build software—and 
                I'm learning right alongside everyone else. This site is where I share my 
                experiments, thoughts, and lessons from the frontier.
              </p>
              <p>
                When I'm not coding or leading teams, I'm a University of Oregon alum who 
                loves exploring the Pacific Northwest with my family.
              </p>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
            <img 
              src="/roy-martin-headshot.jpg" 
              alt="Roy Martin"
              className="relative w-full aspect-square object-cover rounded-2xl border border-neutral-800"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
