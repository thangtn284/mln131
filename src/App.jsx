import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import InfoPage from './components/InfoPage';
import QuizGame from './components/QuizGame'; // Giả sử bạn đã có
import Chatbot from './components/Chatbot';   // Giả sử bạn đã có

function App() {
  const [currentPage, setCurrentPage] = useState('info');

  const renderPage = () => {
    switch (currentPage) {
      case 'info':
        return <InfoPage />;
      case 'quiz':
        return <QuizGame />;
      case 'chatbot':
        return <Chatbot />;
      default:
        return <InfoPage />;
    }
  };

  return (
    <div className="app">
      {/* Navigation được đưa lên đầu, đóng vai trò Header */}
      <header className="app-header">
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      </header>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2026 Triết Học Mác-Lênin</p>
          <span className="footer-divider">•</span>
          <p>Học tập & Nghiên cứu</p>
        </div>
      </footer>
    </div>
  );
}

export default App;