import React from 'react';
import { motion } from 'framer-motion';

const formatTimestamp = (ts) => {
  if (!ts) return '';
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const MessageBubble = ({ message, onAction }) => {
  const { role, text, timestamp, action } = message;
  const isUser = role === 'user';

  // Render clickable action button for command responses
  const renderAction = () => {
    if (!action || !onAction) return null;
    const labels = {
      resume: '📄 View Resume',
      github: '🐙 Open GitHub',
      linkedin: '💼 Open LinkedIn',
      contact: '📬 Contact Simon',
    };
    return (
      <div className="simongpt-actions">
        <button
          className="simongpt-action-btn"
          onClick={() => onAction(action)}
        >
          {labels[action] || 'Open'}
        </button>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`simongpt-msg-row ${isUser ? 'user' : 'bot'}`}
    >
      <div className={`simongpt-bubble ${isUser ? 'user' : 'bot'}`}>
        {text}
        <span className="simongpt-msg-time">{formatTimestamp(timestamp)}</span>
        {renderAction()}
      </div>
    </motion.div>
  );
};

export default MessageBubble;

