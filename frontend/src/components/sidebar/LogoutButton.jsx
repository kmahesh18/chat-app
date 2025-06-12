import React from 'react';
import { LogOut } from 'lucide-react';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const {loading, logout} = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <button 
          className="flex items-center gap-3 w-full p-2 hover:bg-dark-600 rounded-md transition-all duration-300 text-gray-400 hover:text-white" 
          onClick={logout}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      ) : (
        <div className="flex justify-center">
          <div className="w-6 h-6 border-2 border-t-transparent border-accent-blue rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;