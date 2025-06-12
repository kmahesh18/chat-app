import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  
  return (
    <div className={`group mb-1 ${isSelected ? "animate-pulse-slow" : ""}`}>
      <div 
        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-all duration-300
          ${isSelected 
            ? "bg-gradient-to-r from-dark-700/80 to-dark-600/80 border-l-2 border-accent-blue shadow-sm" 
            : "hover:bg-dark-700/50"}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative">
          {/* User avatar with online indicator */}
          <div className={`w-10 h-10 rounded-full border ${isSelected ? "border-accent-blue/50" : "border-dark-500"} overflow-hidden`}>
            <img 
              src={conversation.profilePic} 
              alt={conversation.fullName} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Online status indicator */}
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent-green rounded-full border-2 border-dark-800"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className={`font-medium text-sm truncate ${isSelected ? "text-white" : "text-gray-300"} group-hover:text-white transition-colors duration-300`}>
              {conversation.fullName}
            </h3>
            <span className="text-base opacity-70">{emoji}</span>
          </div>
          
          {/* Optional: Last message preview */}
          <p className="text-xs text-gray-500 truncate">Tap to view conversation</p>
        </div>
      </div>
      
      {!lastIdx && <div className="h-px bg-dark-500/30 my-1 mx-2"></div>}
    </div>
  );
};

export default Conversation;