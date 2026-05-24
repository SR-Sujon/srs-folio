import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="page-content">
        <div id="content">
          <Hero />
          <About />
          <Portfolio />
          <Experience />
          {/* Other sections will be added here */}
        </div>
      </main>
    </div>
  )
}

export default App
