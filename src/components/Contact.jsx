import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const socials = [
  { name: 'GitHub', url: 'https://github.com/rmartin' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/roycmartin' },
  { name: 'YouTube', url: 'https://youtube.com/channel/UCo01NdFAR0cfIXSaB2IlzDg' },
  { name: 'CodePen', url: 'https://codepen.io/roymartin' },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-32 px-6 bg-black/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent" />
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-sm">05 // CONTACT</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's explore the <span className="text-indigo-400">unknown</span>
        </h2>
        <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto">
          Charting new territory in AI and software. Want to connect and share ideas about where we're headed?
        </p>

        <motion.a 
          href="mailto:roy@roy-martin.com?subject=Houston%2C%20we%20have%20a%20connection&body=Hey%20Roy%2C%0A%0AI%20found%20your%20site%20floating%20through%20the%20internet%20and...%0A%0A"
          whileHover={{ scale: 1.05 }}
          className="inline-block text-2xl md:text-3xl font-mono text-indigo-400 hover:text-indigo-300 mb-12"
        >
          roy@roy-martin.com
        </motion.a>

        <div className="flex justify-center gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="text-neutral-500 hover:text-indigo-400 transition-colors font-mono text-sm"
            >
              [{s.name}]
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
