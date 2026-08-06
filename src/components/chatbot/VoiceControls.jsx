import React, { useRef } from 'react';
import { personal } from '../../data/chatbotKnowledge';

// ============================================================
// VoiceControls — Speech-to-Text (input) & Text-to-Speech (output)
// Uses browser SpeechRecognition + SpeechSynthesis APIs.
// ============================================================

const VoiceControls = ({ onTranscript, isSpeaking, setIsSpeaking }) => {
  const recognitionRef = useRef(null);
  const listeningRef = useRef(false);
  const [isListening, setIsListening] = React.useState(false);
  const [supported, setSupported] = React.useState(null);

  React.useEffect(() => {
    // Check support on mount
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const synthOk = 'speechSynthesis' in window;
    setSupported(Boolean(SpeechRecognition) || synthOk);
  }, []);

  // ---- Text-to-Speech ----
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    // Build a speech text from key facts
    const speechText =
      `Hi! This is SimonGPT. ` +
      `${personal.name} is a ${personal.title}. ` +
      `He is a computer science undergraduate with experience in ${skillsBrief()}. ` +
      `You can reach him at ${personal.email}.`;
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const skillsBrief = () =>
    'Python, React, Node.js, MySQL, Machine Learning, Computer Vision, and Generative AI';

  // ---- Speech-to-Text ----
  const handleListen = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Try Chrome or Edge.');
      return;
    }

    if (listeningRef.current) {
      recognitionRef.current?.stop();
      listeningRef.current = false;
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      listeningRef.current = true;
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      if (transcript && onTranscript) {
        onTranscript(transcript);
      }
    };

    recognition.onerror = () => {
      listeningRef.current = false;
      setIsListening(false);
    };

    recognition.onend = () => {
      listeningRef.current = false;
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch {
      // Already started — ignore
    }
  };

  return (
    <React.Fragment>
      {/* Voice input button */}
      <button
        type="button"
        className={`simongpt-icon-btn ${isListening ? 'active' : ''}`}
        onClick={handleListen}
        title={isListening ? 'Stop listening' : 'Voice input'}
        aria-label="Voice input"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      </button>

      {/* Voice output button */}
      <button
        type="button"
        className={`simongpt-icon-btn ${isSpeaking ? 'active' : ''}`}
        onClick={handleSpeak}
        title={isSpeaking ? 'Stop speaking' : 'Voice output'}
        aria-label="Voice output"
      >
        {isSpeaking ? (
          <span className="simongpt-speaking-wave">
            <span /><span /><span /><span /><span />
          </span>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </React.Fragment>
  );
};

export default VoiceControls;

