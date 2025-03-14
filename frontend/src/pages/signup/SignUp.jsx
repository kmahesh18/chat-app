import React, { useState } from "react";
import { MessageSquare, User, KeyRound, Eye, EyeOff } from "lucide-react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();  // Still destructuring from useSignup, just not using loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] p-4">
      <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full shadow-inner">
              <MessageSquare className="w-10 h-10 text-white/90" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Create Account
            </h1>
            <p className="text-white/70 text-sm lg:text-lg">
              Join us and unlock endless possibilities
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Full Name"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Username"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Password"
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

            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <KeyRound className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-white/40 hover:text-white/80 transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-white/40 hover:text-white/80 transition-colors" />
                )}
              </button>
            </div>

            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male" className="text-black">
                  Male
                </option>
                <option value="female" className="text-black">
                  Female
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:to-purple-600 focus:ring-4 focus:ring-purple-500 transition-all"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>

            <div className="text-center mt-6">
              <p className="text-white/70">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-purple-400 hover:text-purple-500 transition-colors font-semibold"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;