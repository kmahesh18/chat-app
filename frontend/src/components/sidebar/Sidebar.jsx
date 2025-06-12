import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { MessageSquare } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col bg-dark-800/30 p-3 animate-slideInLeft">
      {/* Header */}
      <div className="mb-4 animate-fadeInUp">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-md blur-md opacity-30 animate-pulse-slow"></div>
            <div className="relative bg-dark-600 p-2 rounded-md">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white">Messages</h2>
        </div>
        <SearchInput />
      </div>
      
      <div className="h-px bg-gradient-to-r from-dark-500/0 via-dark-500/50 to-dark-500/0 my-3"></div>
      
      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 animate-fadeInUp animation-delay-200">
        <Conversations />
      </div>
      
      {/* Logout Button */}
      <div className="mt-3 animate-fadeInUp animation-delay-400">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;