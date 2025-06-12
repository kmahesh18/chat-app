import React from 'react';
import {useAuthContext} from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe 
    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white" 
    : "bg-dark-600 text-white";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";
  
  return (
    <div className={`chat ${chatClassName} w-full mb-4 ${fromMe ? 'animate-slideInLeft' : 'animate-slideInRight'}`}>
      <div className="chat-image avatar">
        <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${fromMe ? 'border-accent-blue/40' : 'border-dark-500'}`}>
          <img
            src={profilePic}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} shadow-md ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-70 text-xs flex gap-1 items-center text-gray-500">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;