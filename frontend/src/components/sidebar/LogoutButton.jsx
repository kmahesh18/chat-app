import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <button className="w-full flex items-center gap-2 p-2 hover:bg-black/40 rounded-lg transition-all duration-300" onClick={logout}>
        <BiLogOut className="w-6 h-6 text-white group-hover:text-purple-400" />{" "}
        Logout
      </button>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;