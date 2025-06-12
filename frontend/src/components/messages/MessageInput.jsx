import React, { useState } from 'react';
import { Send, Smile, Paperclip } from 'lucide-react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <div className="p-3 bg-dark-700/50 border-t border-dark-500/50">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Emoji Button */}
        <button
          type="button"
          className="p-2 rounded-full hover:bg-dark-600 transition-colors"
        >
          <Smile className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
        </button>
        
        {/* Attachment Button */}
        <button
          type="button"
          className="p-2 rounded-full hover:bg-dark-600 transition-colors"
        >
          <Paperclip className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
        </button>
        
        {/* Message Input */}
        <div className="flex-1">
          <input
            type="text"
            className="w-full px-4 py-2 bg-dark-600/80 border border-dark-500/50 rounded-full text-white placeholder:text-gray-500 focus:ring-1 focus:ring-accent-blue/30 focus:outline-none transition-all duration-300"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
        </div>
        
        {/* Send Button */}
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className={`p-3 rounded-full transition-all duration-300 
            ${loading || !message.trim() 
              ? 'bg-dark-600 text-gray-500 cursor-not-allowed' 
              : 'bg-accent-blue hover:bg-accent-blue/80 text-white'}`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;