import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { MessageSquare, Terminal } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col bg-black/50 animate-slideIn2D">
      {/* Header */}
      <div className="p-4 border-b border-white/10 animate-slideUp2D delay-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 border-2 border-white/30 flex items-center justify-center animate-pulse2D">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white animate-pulse2D delay-300"></div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-mono text-white">CHAT_SYS</h2>
            <div className="w-12 h-px bg-white/50"></div>
          </div>
        </div>
        <SearchInput />
      </div>

      {/* Status Line */}
      <div className="px-4 py-2 border-b border-white/5 animate-slideIn2D delay-400">
        <div className="flex items-center gap-2 text-xs text-white/60 text-mono">
          <div className="w-2 h-2 bg-white animate-pulse2D"></div>
          <span>ONLINE</span>
          <div className="flex-1 h-px bg-white/10"></div>
          <span>SECURE</span>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto animate-slideUp2D delay-600">
        <Conversations />
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-white/10 animate-slideUp2D delay-800">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
