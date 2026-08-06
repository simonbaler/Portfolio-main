import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import SuggestedPrompts from './SuggestedPrompts';
import VoiceControls from './VoiceControls';
import { personal, botInfo } from '../../data/chatbotKnowledge';

const ChatWindow = ({
  messages,
  isTyping,
  analytics,
  sendMessage,
  clearConversation,
  onMinimize,
  isMinimized,
}) => {
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState('');
  const [showPrompts, setShowPrompts] = useState(true);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    sendMessage(trimmed);
    setInput('');
    setShowPrompts(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptSelect = (prompt) => {
    sendMessage(prompt);
    setShowPrompts(false);
  };

  const handleTranscript = (transcript) => {
    setInput(transcript);
    // Auto-send after voice recognition
    setTimeout(() => {
      sendMessage(transcript);
      setShowPrompts(false);
    }, 300);
  };

  const handleAction = (action) => {
    switch (action) {
      case 'resume':
        window.open(personal.links.resume, '_blank', 'noopener,noreferrer');
        break;
      case 'github':
        window.open(personal.links.github, '_blank', 'noopener,noreferrer');
        break;
      case 'linkedin':
        window.open(personal.links.linkedin, '_blank', 'noopener,noreferrer');
        break;
      case 'contact':
        window.open(`mailto:${personal.email}`, '_self');
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      className="simongpt-window"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="simongpt-header">
        <div className="simongpt-avatar">🤖</div>
        <div className="simongpt-title-block">
          <div className="simongpt-title">{botInfo.name}</div>
          <div className="simongpt-status">
            <span className="simongpt-status-dot" style={{ position: 'relative', top: 0, right: 0, width: 7, height: 7 }} />
            Online — AI Assistant
          </div>
        </div>
        <button className="simongpt-header-btn" onClick={onMinimize} title="Minimize" aria-label="Minimize">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button className="simongpt-header-btn" onClick={clearConversation} title="Clear conversation" aria-label="Clear conversation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="simongpt-messages">
        <AnimatePresence>
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} onAction={handleAction} />
          ))}
        </AnimatePresence>
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts (shown until first message) */}
      {showPrompts && messages.length <= 1 && (
        <SuggestedPrompts onSelect={handlePromptSelect} />
      )}

      {/* Input area */}
      <div className="simongpt-input-area">
        <div className="simongpt-input-row">
          <input
            className="simongpt-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask SimonGPT anything..."
            aria-label="Chat input"
          />
          <VoiceControls
            onTranscript={handleTranscript}
            isSpeaking={false}
            setIsSpeaking={() => {}}
          />
          <button
            className="simongpt-send-btn"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Analytics badge */}
      <div className="simongpt-analytics">
        <span>💬 {analytics.conversations} convos</span>
        <span>·</span>
        <span>📊 {analytics.questions} questions</span>
        <span>·</span>
        <span>🖥️ {analytics.sessions} sessions</span>
      </div>
    </motion.div>
  );
};

export default ChatWindow;

