import React from 'react';

const PROMPTS = [
  'Tell me about Simon',
  'Show AI Projects',
  'Explain Traffic Management System',
  'Explain LENS E-Commerce Project',
  'What technologies does Simon know?',
  'Why should I hire Simon?',
  'Show internship experience',
  'Show certifications',
  'Show achievements',
  'Download resume',
  'Contact Simon',
];

const SuggestedPrompts = ({ onSelect }) => (
  <div className="simongpt-prompts">
    {PROMPTS.map((prompt) => (
      <button
        key={prompt}
        type="button"
        className="simongpt-prompt-chip"
        onClick={() => onSelect(prompt)}
      >
        {prompt}
      </button>
    ))}
  </div>
);

export default SuggestedPrompts;

