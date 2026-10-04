import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Plane, Sprout, Bot, RotateCcw, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { generateAIResponse } from '../utils/aiEngine';
import { sound } from '../utils/soundFx';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeMode, setActiveMode] = useState('portfolio'); // 'portfolio' | 'travel' | 'agri'
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'ai',
      text: "👋 Hi! I'm **SYED · AI**, Syed Rehan's virtual portfolio copilot. Ask me anything about his projects, cybersecurity skills, prompt engineering philosophy, or internship availability!"
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, isMinimized]);

  const handleSend = (textToSend = null) => {
    const text = textToSend || inputVal.trim();
    if (!text || isTyping) return;

    sound.playClick();
    const userMsg = { id: `u-${Date.now()}`, sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate smart thinking and character streaming
    setTimeout(() => {
      sound.playBeep(880, 0.06);
      const fullReply = generateAIResponse(text, activeMode);
      
      let charIndex = 0;
      const aiMsgId = `ai-${Date.now()}`;
      
      setMessages((prev) => [...prev, { id: aiMsgId, sender: 'ai', text: '' }]);
      
      const streamInterval = setInterval(() => {
        charIndex += 4;
        const currentSlice = fullReply.slice(0, charIndex);
        
        setMessages((prev) =>
          prev.map((msg) => (msg.id === aiMsgId ? { ...msg, text: currentSlice } : msg))
        );

        if (charIndex >= fullReply.length) {
          clearInterval(streamInterval);
          setIsTyping(false);
          sound.playSuccess();
        }
      }, 16);
    }, 380);
  };

  const suggestionChips = {
    portfolio: [
      "💡 What I Bring & My Goal",
      "🎓 Academic CGPA & Certifications",
      "What projects did you build?",
      "Tell me about your cybersecurity skills",
      "Prompt engineering takeaways",
      "Are you available for internships?"
    ],
    travel: [
      "Plan a 3-day trip to Goa under ₹10k",
      "Weekend getaway near Chennai",
      "Budget trip to Manali for 4 days"
    ],
    agri: [
      "When to irrigate paddy crops?",
      "Wheat fertilizer schedule",
      "धान की फसल में पानी कब देना चाहिए?"
    ]
  };

  const handleModeChange = (mode) => {
    sound.playClick();
    setActiveMode(mode);
    let intro = "";
    if (mode === 'travel') {
      intro = "✈️ **AI Travel Planner Mode Activated!** Where do you want to travel? Tell me your destination, days, or budget (e.g., 'Plan a 3-day trip to Goa under ₹10k').";
    } else if (mode === 'agri') {
      intro = "🌾 **Agri-AI Assistant Activated!** Ask questions regarding crop selection, monsoon irrigation, or fertilizer in English, Hindi, Telugu, or Urdu.";
    } else {
      intro = "🤖 **Portfolio Guide Mode Activated!** Ask me anything about Syed's projects, technical skills, or hiring status.";
    }
    setMessages((prev) => [
      ...prev,
      { id: `mode-${Date.now()}`, sender: 'ai', text: intro }
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => {
            sound.playCyberOpen();
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-3 px-4 py-3 bg-[#080808] border-2 border-[#FF3B30] text-white shadow-[0_0_25px_rgba(255,59,48,0.4)] hover:shadow-[0_0_35px_rgba(255,59,48,0.7)] hover:bg-[#FF3B30] hover:text-black transition-all group hud-corner cursor-pointer select-none"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32D74B] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#32D74B]" />
          </span>
          <div className="text-left font-mono">
            <div className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF3B30] group-hover:text-black" />
              <span>SYED · AI</span>
            </div>
            <div className="text-[9px] text-[#A1A1AA] group-hover:text-black/80">
              [ CHATBOT ONLINE ]
            </div>
          </div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 z-50 w-[95vw] sm:w-[420px] bg-[#070707] border-2 border-white/20 shadow-2xl transition-all duration-300 flex flex-col overflow-hidden hud-corner font-mono ${
            isMinimized ? 'h-14' : 'h-[580px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#0D0D0D]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#32D74B] animate-pulse" />
              <div>
                <h3 className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                  <span>SYED · AI COPILOT</span>
                  <span className="text-[9px] text-[#FF3B30] border border-[#FF3B30]/30 px-1">v2.1</span>
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-white/60">
              <button
                onClick={() => {
                  sound.playClick();
                  setMessages([
                    {
                      id: `reset-${Date.now()}`,
                      sender: 'ai',
                      text: "Session cleared. What would you like to explore next?"
                    }
                  ]);
                }}
                title="Clear Conversation"
                className="p-1 hover:text-white border border-transparent hover:border-white/10"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsMinimized(!isMinimized);
                }}
                title={isMinimized ? "Expand" : "Minimize"}
                className="p-1 hover:text-white border border-transparent hover:border-white/10"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                title="Close"
                className="p-1 hover:text-[#FF3B30] border border-transparent hover:border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Specialized Mode Tabs */}
              <div className="grid grid-cols-3 border-b border-white/10 bg-[#0A0A0A] text-[10px]">
                <button
                  onClick={() => handleModeChange('portfolio')}
                  className={`py-2 px-1 text-center border-r border-white/10 flex items-center justify-center gap-1 transition-colors ${
                    activeMode === 'portfolio'
                      ? 'bg-white/10 text-white font-bold border-b-2 border-b-[#FF3B30]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Bot className="w-3 h-3 text-[#FF3B30]" />
                  <span>Portfolio</span>
                </button>

                <button
                  onClick={() => handleModeChange('travel')}
                  className={`py-2 px-1 text-center border-r border-white/10 flex items-center justify-center gap-1 transition-colors ${
                    activeMode === 'travel'
                      ? 'bg-white/10 text-white font-bold border-b-2 border-b-[#32D74B]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Plane className="w-3 h-3 text-[#32D74B]" />
                  <span>Travel Bot</span>
                </button>

                <button
                  onClick={() => handleModeChange('agri')}
                  className={`py-2 px-1 text-center flex items-center justify-center gap-1 transition-colors ${
                    activeMode === 'agri'
                      ? 'bg-white/10 text-white font-bold border-b-2 border-b-[#FFD60A]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Sprout className="w-3 h-3 text-[#FFD60A]" />
                  <span>Agri-AI</span>
                </button>
              </div>

              {/* Chat Messages Log */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 font-mono text-xs leading-relaxed bg-[#050505]">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <span className="text-[9px] mono-label text-white/40 mb-1">
                      {m.sender === 'user' ? 'YOU' : 'SYED · AI'}
                    </span>
                    <div
                      className={`max-w-[90%] p-3 whitespace-pre-wrap ${
                        m.sender === 'user'
                          ? 'bg-white text-black font-medium border border-white'
                          : 'bg-[#101010] text-white border border-white/15'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-[#32D74B] text-[11px]">
                    <span className="mono-label">SYNTHESIZING RESPONSE</span>
                    <span className="blinking-cursor" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestion Chips */}
              <div className="border-t border-white/10 px-3 py-2 bg-[#090909] flex gap-1.5 overflow-x-auto whitespace-nowrap">
                {suggestionChips[activeMode].map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip)}
                    className="font-mono text-[10px] px-2.5 py-1 border border-white/15 bg-white/5 text-white/80 hover:border-[#FF3B30] hover:text-[#FF3B30] transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="border-t border-white/10 p-2.5 bg-[#0C0C0C] flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={
                    activeMode === 'travel'
                      ? "e.g. Plan a 3-day trip to Goa under ₹10k..."
                      : activeMode === 'agri'
                      ? "e.g. When to irrigate paddy crops? / पानी कब दें?"
                      : "Ask about projects, cybersecurity, prompt engineering..."
                  }
                  className="flex-1 bg-transparent font-mono text-xs text-white placeholder-white/40 outline-none px-2 py-1.5"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="mono-label px-3 py-1.5 border border-[#FF3B30] text-[#FF3B30] hover:bg-[#FF3B30] hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#FF3B30] text-xs flex items-center gap-1"
                >
                  <Send className="w-3 h-3" />
                  <span className="hidden sm:inline">SEND</span>
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
