import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className="h-screen w-screen bg-dark-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-blue/5 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-purple/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent-teal/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-40 h-40 border-r border-b border-accent-blue/10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-l border-t border-accent-purple/10"></div>
      </div>
      
      <div className="h-full w-full flex items-center justify-center p-0 sm:p-2 md:p-4 animate-fadeInUp">
        <div className="w-full h-full max-w-7xl flex rounded-none sm:rounded-xl overflow-hidden border-0 sm:border border-dark-500/50 shadow-2xl">
          {/* Sidebar */}
          <div className="w-full sm:w-80 lg:w-96 h-full flex-shrink-0 border-r border-dark-500/50 bg-dark-800/80 backdrop-blur-md">
            <Sidebar />
          </div>
          
          {/* Message Container */}
          <div className="hidden sm:flex flex-1 bg-dark-700/80 backdrop-blur-md">
            <MessageContainer />
          </div>
          
          {/* Mobile Message Container */}
          <div className="sm:hidden flex flex-1 bg-dark-700/80 backdrop-blur-md">
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;