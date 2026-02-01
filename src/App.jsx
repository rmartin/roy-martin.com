import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Nav from './components/Nav'
import ScrollAstronaut from './components/ScrollAstronaut'

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-white relative">
      <Nav />
      <main className="relative" style={{ zIndex: 1, background: 'transparent' }}>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Writing />
        <Contact />
      </main>
      <ScrollAstronaut />
      <footer className="py-8 text-center text-neutral-600 font-mono text-sm border-t border-neutral-900 relative bg-black/80" style={{ zIndex: 1 }}>
        © {new Date().getFullYear()} Roy Martin // Built with AI
      </footer>
    </div>
  )
}
