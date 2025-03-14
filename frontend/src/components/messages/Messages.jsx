import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 h-full overflow-y-auto custom-scrollbar">
      {!loading && messages.length > 0 && 
        messages.map((message, index) => (
          <div 
            key={message._id}
            // Only attach ref to the last message
            ref={index === messages.length - 1 ? lastMessageRef : undefined}
          >
            <Message message={message} />
          </div>
        ))
      }

      {loading && [...Array(3)].map((_, idx) => (
        <MessageSkeleton key={idx} />
      ))}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;