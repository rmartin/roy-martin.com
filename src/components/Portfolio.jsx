import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const projects = [
  { title: 'Neural Analytics', desc: 'AI-powered insights platform with real-time ML inference', tags: ['PyTorch', 'FastAPI', 'React'], status: 'LIVE' },
  { title: 'GenAI Studio', desc: 'Creative tools powered by large language models', tags: ['LLMs', 'Next.js', 'Vercel'], status: 'BETA' },
  { title: 'DataFlow', desc: 'Real-time data pipeline orchestration system', tags: ['Kafka', 'Spark', 'K8s'], status: 'LIVE' },
  { title: 'VoiceAI', desc: 'Speech recognition and synthesis platform', tags: ['Whisper', 'TTS', 'WebRTC'], status: 'DEV' },
]

export default function Portfolio() {
  const [ref, inView] = useInView()

  return (
    <section id="experiments" className="py-32 px-6 bg-black/80">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-sm">03 // EXPERIMENTS</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>
        
        <div className="text-center py-16 border border-neutral-800 rounded-xl bg-neutral-900/30">
          <span className="text-indigo-400 font-mono text-sm">COMING SOON</span>
          <p className="text-neutral-500 mt-2">AI experiments and side projects in development</p>
        </div>
      </motion.div>
    </section>
  )
}
