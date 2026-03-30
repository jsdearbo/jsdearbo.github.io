
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, Loader2, X } from 'lucide-react';

const ResearchBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const systemPrompt = `You are a professional AI research assistant for Jake Dearborn.
      Jake is a PhD candidate at UVM (Larner College of Medicine) focusing on Computational Genomics, ML, and RNA Biology.
      Key Work:
      - Splicing kinetics (Programmed Delayed Splicing).
      - Cell-type specific alternative splicing in immune cells (B/T/Macrophages).
      - Deep learning for genomics (Borzoi fine-tuning, LoRA/PEFT, PyTorch).
      - Tools: rMATS, StringTie, STAR, DeepLIFT, TF-MoDISco.
      - Publications in eLife (review) and ACS Nano.
      Answer questions about Jake's work professionally and concisely. If you don't know something specific not in the context, refer to his CV or GitHub.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: { systemInstruction: systemPrompt }
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || 'I apologize, I could not generate a response.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'There was an error connecting to the knowledge base.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <MessageSquare className="text-white w-6 h-6" />
        </button>
      ) : (
        <div className="w-80 md:w-96 glass rounded-2xl shadow-2xl flex flex-col border border-white/10 overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          <div className="bg-blue-600/20 px-4 py-3 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-100">Research Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-blue-200 hover:text-white">
              <X size={18} />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 text-sm bg-black/20">
            {messages.length === 0 && (
              <p className="text-gray-400 italic text-center py-4">Ask me anything about Jake's research or ML background.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-200 border border-white/5'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-3 py-2 rounded-xl border border-white/5">
                  <Loader2 size={16} className="animate-spin text-blue-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about splicing..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-white"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg text-white transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchBot;
