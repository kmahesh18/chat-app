import React, { useState } from "react";
import { MessageSquare, User, KeyRound, Eye, EyeOff } from "lucide-react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full shadow-inner">
              <MessageSquare className="w-10 h-10 text-white/90" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Welcome Back
            </h1>
            <p className="text-white/70 text-sm lg:text-lg">
              Unlock your conversations effortlessly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Enter username"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-white/40 hover:text-white/80 transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-white/40 hover:text-white/80 transition-colors" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-white/10 border border-white/20 rounded checked:bg-purple-500/50 checked:border-purple-500"
                />
                <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-purple-400 hover:text-purple-500 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:to-purple-600 focus:ring-4 focus:ring-purple-500 transition-all"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
            </button>

            <div className="text-center mt-6">
              <p className="text-white/70">
                New here?{" "}
                <a
                  href="/signup"
                  className="text-purple-400 hover:text-purple-500 transition-colors font-semibold"
                >
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;
