import React, { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      
      // Only update messages if they belong to the current selected conversation
      if (selectedConversation?._id === newMessage.senderId || 
          selectedConversation?._id === newMessage.receiverId) {
        setMessages([...messages, { ...newMessage, shouldShake: true }]);
      }
    };

    socket?.on("newMessage", handleNewMessage);

    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, messages, setMessages, selectedConversation]);
};

export default useListenMessages;