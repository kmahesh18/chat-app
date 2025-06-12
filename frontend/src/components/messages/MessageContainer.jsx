import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {
  MessageSquare,
  ArrowLeft,
  MoreVertical,
  Monitor,
  Wifi,
} from "lucide-react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline =
    selectedConversation && onlineUsers.includes(selectedConversation._id);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="h-full flex flex-col bg-black/40">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Chat Header */}
          <div className="bg-black/80 border-b border-white/10 p-4 animate-slideIn2D">
            <div className="flex items-center">
              {/* Back button for mobile */}
              <button
                onClick={() => setSelectedConversation(null)}
                className="sm:hidden p-2 mr-3 border border-white/20 hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              {/* User Info */}
              <div className="flex items-center flex-1">
                <div className="relative mr-4">
                  <div className="w-12 h-12 border-2 border-white/30 overflow-hidden relative">
                    <img
                      src={selectedConversation.profilePic}
                      alt={selectedConversation.fullName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-white/10"></div>
                  </div>
                  {isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border-2 border-black animate-pulse2D"></div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg text-mono">
                    {selectedConversation.fullName.toUpperCase()}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className={`w-2 h-px ${isOnline ? "bg-white" : "bg-white/30"}`}
                    ></div>
                    <span className="text-xs text-white/60 text-mono">
                      {isOnline ? "ONLINE" : "OFFLINE"}
                    </span>
                    <Wifi
                      className={`w-3 h-3 ${isOnline ? "text-white" : "text-white/30"}`}
                    />
                  </div>
                </div>
              </div>

              {/* Options button */}
              <button className="p-2 border border-white/20 hover:bg-white/10 transition-colors">
                <MoreVertical className="w-5 h-5 text-white/60" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-hidden bg-black/20 animate-slideUp2D delay-200">
            <Messages />
          </div>

          {/* Message Input */}
          <div className="animate-slideUp2D delay-400">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full p-8 bg-black/20 animate-slideUp2D">
      <div className="text-center flex flex-col items-center max-w-md">
        {/* Geometric Logo */}
        <div className="relative mb-8 animate-expand2D">
          <div className="w-24 h-24 border-2 border-white/30 flex items-center justify-center relative">
            <Monitor className="w-12 h-12 text-white animate-float2D" />
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-mono text-white animate-slideIn2D delay-200">
            WELCOME, {authUser.fullName.toUpperCase()}
          </h2>

          <div className="w-32 h-px bg-white/50 mx-auto animate-slideIn2D delay-300"></div>

          <p className="text-white/60 text-sm text-mono max-w-xs animate-slideIn2D delay-400">
            SELECT_CONTACT_TO_START_SECURE_MESSAGING
          </p>

          {/* Status Indicators */}
          <div className="flex items-center justify-center mt-8 gap-4 text-xs text-white/40 text-mono animate-slideIn2D delay-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white animate-pulse2D"></div>
              <span>SYSTEM_ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 border border-white/30 animate-pulse2D delay-300"></div>
              <span>ENCRYPTED</span>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8 animate-slideIn2D delay-600"></div>
      </div>
    </div>
  );
};

export default MessageContainer;
