import { About } from './components/About'
import { Contact, Footer } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
