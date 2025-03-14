import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col h-full">
      <SearchInput />
      <div className="divider px-3"></div>
      {/* Wrap Conversations in a div with flex-1 and overflow-y-auto */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <Conversations />
      </div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;