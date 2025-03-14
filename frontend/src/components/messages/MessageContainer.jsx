import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { MessageSquare } from 'lucide-react';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    //cleanup function (unmounts)
    return () => setSelectedConversation(null);
  },[setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-full bg-white/5 backdrop-blur-sm">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 mb-2 border-b border-white/20">
            <span className="text-white/70">To:</span>{" "}
            <span className="text-white font-medium">{selectedConversation.fullName}</span>
          </div>

          <div className="flex-1 overflow-hidden">
            <Messages />
          </div>
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser}=useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-white/90 font-semibold flex flex-col items-center gap-2">
        <div className='flex justify-between'>
          <p className='mr-2'>Welcome 👋 </p>
        <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
          {authUser.fullName}
        </p>
        <p>😁</p>
        </div>
        <p className="text-white/70">Select a chat to start messaging</p>
        <MessageSquare className="text-3xl md:text-6xl text-white/60" />
      </div>
    </div>
  );
};

export default MessageContainer;