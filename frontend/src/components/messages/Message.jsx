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
  const bubbleBgColor = fromMe ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : "bg-gray-200 text-gray-800";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName} w-full mb-4`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full border-2 border-white/20">
          <img
            src={profilePic}
            alt="avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white/70">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;