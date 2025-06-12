import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { MessageSquare, ArrowLeft, MoreVertical } from 'lucide-react';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { useSocketContext } from '../../context/SocketContext';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const {onlineUsers} = useSocketContext();
  const isOnline = selectedConversation && onlineUsers.includes(selectedConversation._id);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="h-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Chat Header */}
          <div className="bg-dark-700/50 border-b border-dark-500/50 p-3 animate-slideInRight">
            <div className="flex items-center">
              {/* Back button for mobile */}
              <button 
                onClick={() => setSelectedConversation(null)}
                className="sm:hidden p-2 mr-2 rounded-md hover:bg-dark-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              
              {/* User Info */}
              <div className="flex items-center flex-1">
                <div className="relative mr-3">
                  <div className="w-10 h-10 rounded-full border border-dark-500 overflow-hidden">
                    <img 
                      src={selectedConversation.profilePic} 
                      alt={selectedConversation.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent-green rounded-full border-2 border-dark-700"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-white text-base">
                    {selectedConversation.fullName}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {isOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              
              {/* Options button */}
              <button className="p-2 rounded-md hover:bg-dark-600 transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-hidden bg-dark-800/30 animate-fadeInUp animation-delay-200">
            <Messages />
          </div>
          
          {/* Message Input */}
          <div className="mobile-safe-area animate-slideInUp animation-delay-400">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser}=useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full p-4 bg-dark-800/30 animate-fadeInUp">
      <div className="text-center flex flex-col items-center max-w-md">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
          <div className="relative bg-dark-700 p-5 rounded-full">
            <MessageSquare className="w-12 h-12 text-gray-400 animate-float" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Welcome, <span className="gradient-text">{authUser.fullName}</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Select a conversation from the sidebar to start messaging
          </p>
          
          <div className="flex items-center justify-center mt-6 gap-2">
            <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;