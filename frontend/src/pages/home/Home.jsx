import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { Menu } from "lucide-react";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { selectedConversation } = useConversation();

  // On mobile, hide sidebar when a conversation is selected
  const isMobile = window.innerWidth < 768;
  const shouldShowSidebar = isMobile ? (showSidebar && !selectedConversation) : showSidebar;

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-r border-b border-white/5"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-white/5"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-r border-t border-white/5"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-l border-t border-white/5"></div>

        {/* Subtle Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse2D"></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse2D delay-300"></div>
      </div>

      {/* Main App Container - Full Screen */}
      <div className="h-full w-full flex relative z-10">
        {/* Mobile Menu Toggle */}
        {isMobile && selectedConversation && (
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute top-4 left-4 z-50 p-2 bg-black/80 border border-white/20"
          >
            <Menu className="text-white w-5 h-5" />
          </button>
        )}

        {/* Sidebar - Conditional Display */}
        <div
          className={`${
            shouldShowSidebar ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 w-full md:w-80 lg:w-96 h-full z-20 absolute md:relative ${
            selectedConversation ? 'md:border-r border-white/10' : ''
          }`}
        >
          <Sidebar onClose={() => setShowSidebar(false)} />
        </div>

        {/* Message Container - Full Width */}
        <div className={`flex-1 h-full transition-all duration-300 ${
          isMobile && shouldShowSidebar ? 'opacity-30' : 'opacity-100'
        }`}>
          <MessageContainer onOpenSidebar={() => setShowSidebar(true)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
