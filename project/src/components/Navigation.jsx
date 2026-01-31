import { useState } from 'react';
import './Navigation.css';

function Navigation({ onNavigate, currentPage }) {
  return (
    <nav className="navigation">
      <h1 className="site-title">🚩 Triết Học Mác-Lênin</h1>
      <div className="nav-buttons">
        <button 
          className={currentPage === 'info' ? 'active' : ''}
          onClick={() => onNavigate('info')}
        >
          📚 Thông Tin
        </button>
        <button 
          className={currentPage === 'quiz' ? 'active' : ''}
          onClick={() => onNavigate('quiz')}
        >
          🎮 Quiz Game
        </button>
        <button 
          className={currentPage === 'chatbot' ? 'active' : ''}
          onClick={() => onNavigate('chatbot')}
        >
          💬 Chatbot
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
