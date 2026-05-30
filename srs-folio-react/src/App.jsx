import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ExperiencePage from './pages/ExperiencePage'
import CertificationsPage from './pages/CertificationsPage'
import ResearchPage from './pages/ResearchPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/research" element={<ResearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
