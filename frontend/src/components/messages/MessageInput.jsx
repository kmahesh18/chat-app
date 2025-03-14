import React, { useState } from 'react';
import { Send } from 'lucide-react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="w-full pl-4 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-black transition-colors"
        >
          {loading ? <div className='loading loading-spinner'></div> : <Send className="w-5 h-5" />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;