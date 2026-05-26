import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="page-content">
        <div id="content">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Portfolio />
          <Experience />
          <Certifications />
          <Research />
          <Contact />
          {/* Other sections will be added here */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
