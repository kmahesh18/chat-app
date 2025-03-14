import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative w-full max-w-7xl h-[80vh]">
        {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl transform rotate-1"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl transform -rotate-1"></div> */}
        
        <div className="relative flex h-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 overflow-hidden">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;