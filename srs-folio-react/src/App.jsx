import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ExperiencePage from './pages/ExperiencePage'
import CertificationsPage from './pages/CertificationsPage'
import ResearchPage from './pages/ResearchPage'
import './App.css'

function App() {
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar onOpenCmdPalette={() => setIsCmdPaletteOpen(true)} />
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
            <CommandPalette isOpen={isCmdPaletteOpen} setIsOpen={setIsCmdPaletteOpen} />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

