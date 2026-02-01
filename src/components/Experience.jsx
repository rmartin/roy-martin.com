import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const roles = [
  {
    company: 'Amazon Web Services (AWS)',
    location: 'Portland, Oregon',
    positions: [
      {
        title: 'Senior Software Development Manager',
        period: 'Oct 2022 – Present',
        description: null
      },
      {
        title: 'Software Development Manager, AWS Learning Services',
        period: 'Mar 2020 – Oct 2022',
        description: 'Building the next generation of Learning Management Platforms at Amazon scale, experienced by millions of users worldwide.'
      }
    ]
  },
  {
    company: 'Mod Op',
    location: 'Portland, Oregon',
    positions: [
      {
        title: 'CTO & Partner',
        period: 'Nov 2016 – Mar 2020',
        description: 'Provided technical direction for this creative digital agency. Started as employee #10 and helped grow to five US offices. Shifted company to agile development, leading to more profitable projects and better work-life balance.'
      },
      {
        title: 'VP of Technology',
        period: 'Apr 2012 – Nov 2016',
        description: 'Created DevOps capability and continuous deployment for all projects. Broke down barriers between creative and technical teams, resulting in better morale and client outcomes.'
      }
    ]
  },
  {
    company: 'OHSU',
    location: 'Portland, Oregon',
    positions: [
      {
        title: 'Senior Engineering Manager',
        period: 'Feb 2011 – May 2012',
        description: 'Worked with senior leadership to build applications transforming training and education. Implemented solutions for big data analytics in healthcare.'
      }
    ]
  },
  {
    company: 'Emerge Interactive',
    location: 'Portland, Oregon',
    positions: [
      {
        title: 'VP of Technology & Partner',
        period: 'Mar 2006 – Feb 2011',
        description: 'Defined technical direction through entire project lifecycle. Managed teams delivering client projects that won 25+ awards.'
      }
    ]
  },
  {
    company: 'University of Oregon',
    location: 'Eugene, Oregon',
    positions: [
      {
        title: 'Technical Lead, Interactive Media Designer',
        period: 'Jan 2003 – Mar 2006',
        description: 'Lead PHP developer providing technical training to a team of ten. Created training programs and taught PHP courses at the university.'
      }
    ]
  },
  {
    company: 'Intel Corporation',
    location: 'Portland, Oregon',
    positions: [
      {
        title: '3D Content Developer',
        period: 'Jun 2000 – Aug 2001',
        description: 'Created 3D content demos for Intel\'s Shockwave 3D. Demos featured at SIGGRAPH and used by CEO to unveil the Intel 2GHz processor.'
      }
    ]
  }
]

const skills = [
  { name: 'Leadership', level: 95 },
  { name: 'Full-Stack Development', level: 90 },
  { name: 'AI / Machine Learning', level: 80 },
  { name: 'Cloud Architecture (AWS)', level: 90 },
  { name: 'Agile / DevOps', level: 95 },
  { name: 'Team Building', level: 95 },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-32 px-6 bg-neutral-950/80">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-sm">02 // EXPERIENCE</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>
        
        <div className="space-y-8 mb-20">
          {roles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{role.company}</h3>
                <span className="text-sm text-neutral-500">{role.location}</span>
              </div>
              {role.positions.map((pos, j) => (
                <div key={j} className={j > 0 ? 'mt-4 pt-4 border-t border-neutral-800' : ''}>
                  <div className="flex flex-wrap justify-between items-start">
                    <p className="text-indigo-400 font-medium">{pos.title}</p>
                    <span className="text-sm text-neutral-500 font-mono">{pos.period}</span>
                  </div>
                  {pos.description && (
                    <p className="text-neutral-400 mt-2 text-sm">{pos.description}</p>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
        <div className="grid gap-4">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-300">{skill.name}</span>
                <span className="text-neutral-500 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
