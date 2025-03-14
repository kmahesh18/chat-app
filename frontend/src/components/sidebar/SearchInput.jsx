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
    // if(search.length < 3) {
    //   return toast.error('Search item must be at least 3 characters long');
    // }

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
      // toast.success('Conversation selected successfully');
    } else {
      toast.error('No such user found!');
      // setSearch("");
    }
  }
  return (
    <form className="relative group" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Search conversations..."
        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;