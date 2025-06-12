import React, { useState } from "react";
import { MessageSquare, User, KeyRound, Eye, EyeOff, Activity } from "lucide-react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-accent-blue/5 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-accent-purple/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent-pink/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Animated lines - top left */}
        <div className="absolute top-10 left-10 w-32 h-[1px] bg-accent-blue/30 animate-pulse-slow"></div>
        <div className="absolute top-10 left-10 w-[1px] h-32 bg-accent-blue/30 animate-pulse-slow"></div>
        
        {/* Animated lines - bottom right */}
        <div className="absolute bottom-10 right-10 w-32 h-[1px] bg-accent-purple/30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-[1px] h-32 bg-accent-purple/30 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative w-full max-w-lg animate-zoom-in z-10">
        <div className="relative mx-4 glass-card rounded-xl shadow-2xl p-8 animate-slideInUp overflow-hidden">
          {/* Animated accent lines */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-b-2 border-r-2 border-accent-blue/30 rounded-br-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-t-2 border-l-2 border-accent-purple/30 rounded-tl-3xl"></div>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur-md opacity-50 animate-pulse-slow"></div>
              <div className="relative glass-effect rounded-full p-4">
                <MessageSquare className="w-8 h-8 text-white animate-float" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 animate-slideInDown">
              <span className="gradient-text">Welcome Back</span>
            </h1>
            <p className="text-gray-400 text-sm">Ready to catch up on your conversations?</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div className="relative animate-slideInRight animation-delay-200">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field pl-10"
                placeholder="Username"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative animate-slideInLeft animation-delay-400">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-10 pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs animate-fadeInUp animation-delay-600">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-dark-600 border border-dark-400 rounded"
                />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-accent-blue hover:text-neon-blue transition-all duration-300"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/20 animate-fadeInUp animation-delay-800 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Activity className="animate-spin h-5 w-5 mr-2" />
                  Connecting...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-6 animate-fadeInUp animation-delay-800">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-accent-blue hover:text-neon-blue transition-all duration-300 font-medium"
                >
                  Create one now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
