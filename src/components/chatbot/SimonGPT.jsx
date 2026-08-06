import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useChatbot from '../../hooks/useChatbot';
import ChatWindow from './ChatWindow';
import './chatbot.css';

// ============================================================
// SimonGPT — Floating AI Assistant
// Appears bottom-right; fully self-contained component.
// ============================================================

const SimonGPT = () => {
  const {
    messages,
    isOpen,
    isMinimized,
    isTyping,
    analytics,
    sendMessage,
    clearConversation,
    toggleOpen,
    toggleMinimize,
  } = useChatbot();

  return (
    <div className="simongpt-root">
      {/* Floating button */}
      <motion.button
        className="simongpt-fab"
        onClick={toggleOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close SimonGPT' : 'Open SimonGPT'}
        title="Ask SimonGPT"
      >
        <span className="simongpt-pulse-ring" />
        <span className="simongpt-status-dot" />
        {isOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="13" y2="13" />
          </svg>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <ChatWindow
            messages={messages}
            isTyping={isTyping}
            analytics={analytics}
            sendMessage={sendMessage}
            clearConversation={clearConversation}
            onMinimize={toggleMinimize}
            isMinimized={isMinimized}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimonGPT;

