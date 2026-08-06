import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    transition={{ duration: 0.2 }}
    className="simongpt-msg-row bot"
  >
    <div className="simongpt-typing">
      <span />
      <span />
      <span />
    </div>
  </motion.div>
);

export default TypingIndicator;

