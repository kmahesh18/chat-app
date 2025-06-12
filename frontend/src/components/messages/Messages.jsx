import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

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
    <div className="px-4 py-4 flex-1 h-full overflow-y-auto">
      {/* Messages Header */}
      {messages.length > 0 && (
        <div className="text-center mb-6 animate-slideUp2D">
          <div className="inline-block px-4 py-2 border border-white/20 bg-black/60 text-xs text-white/60 text-mono">
            ENCRYPTED_CONVERSATION
          </div>
          <div className="w-24 h-px bg-white/20 mx-auto mt-2"></div>
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMessageRef : undefined}
            className="animate-slideUp2D"
            style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
          >
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="text-center h-full flex items-center justify-center animate-slideUp2D">
          <div className="space-y-4">
            <div className="w-16 h-16 border-2 border-white/20 mx-auto flex items-center justify-center">
              <div className="w-8 h-8 border border-white/30"></div>
            </div>
            <p className="text-white/40 text-sm text-mono">NO_MESSAGES_YET</p>
            <p className="text-white/30 text-xs text-mono">
              Send a message to start conversation
            </p>
            <div className="w-32 h-px bg-white/10 mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
