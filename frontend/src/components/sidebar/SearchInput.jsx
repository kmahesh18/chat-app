import React, { useState } from 'react';
import { Search } from 'lucide-react';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error('No such user found!');
    }
  }
  
  return (
    <form className="relative group" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-500 group-focus-within:text-accent-blue transition-colors duration-300" />
      </div>
      <input
        type="text"
        placeholder="Search conversations..."
        className="w-full pl-9 pr-4 py-2 bg-dark-600/60 border border-dark-500/50 rounded-md text-sm text-white placeholder:text-gray-500 focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue/30 focus:outline-none transition-all duration-300"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;