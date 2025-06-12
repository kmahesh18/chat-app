import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black grid-lines relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-r border-b border-white/5"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-white/5"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-r border-t border-white/5"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-l border-t border-white/5"></div>

        {/* Subtle Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse2D"></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse2D delay-300"></div>
      </div>

      <div className="h-full w-full flex p-0 sm:p-2 md:p-4 animate-slideUp2D">
        <div className="w-full h-full max-w-7xl mx-auto flex border-0 sm:border border-white/10 bg-black/80 backdrop-blur-sm">
          {/* Sidebar */}
          <div className="w-full sm:w-80 lg:w-96 h-full flex-shrink-0 border-r border-white/10 bg-black/90 animate-slideIn2D">
            <Sidebar />
          </div>

          {/* Message Container - Desktop */}
          <div className="hidden sm:flex flex-1 bg-black/60 animate-slideIn2D delay-200">
            <MessageContainer />
          </div>

          {/* Message Container - Mobile */}
          <div className="sm:hidden flex flex-1 bg-black/60 animate-slideIn2D delay-200">
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
