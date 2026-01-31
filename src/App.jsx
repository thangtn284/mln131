import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import InfoPage from './components/InfoPage'
import QuizGame from './components/QuizGame'
import Chatbot from './components/Chatbot'

function App() {
  const [currentPage, setCurrentPage] = useState('info')

  const renderPage = () => {
    switch (currentPage) {
      case 'info':
        return <InfoPage />
      case 'quiz':
        return <QuizGame />
      case 'chatbot':
        return <Chatbot />
      default:
        return <InfoPage />
    }
  }

  return (
    <div className="app">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="app-footer">
        <p>© 2026 Website Triết Học Mác-Lênin - Học tập và nghiên cứu</p>
      </footer>
    </div>
  )
}

export default App
