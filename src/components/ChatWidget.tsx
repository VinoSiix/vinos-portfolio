import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Placeholder for AI chat integration
    console.log('Chat message:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="wine-btn rounded-full p-4 shadow-lg animate-wine-glow"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="glass-effect rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-border/50">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <h4 className="font-semibold">Chat with Vino</h4>
                <p className="text-xs opacity-90">AI-powered assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-background/50">
            <div className="space-y-4">
              <div className="flex">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl rounded-bl-sm max-w-xs">
                  <p className="text-sm">
                    Hi! I'm Vino's AI assistant. How can I help you today? 
                    You can ask about projects, skills, or availability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-foreground"
              />
              <button
                type="submit"
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Powered by AI • Currently in demo mode
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;