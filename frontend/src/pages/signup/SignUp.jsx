import React, { useState } from "react";
import { MessageSquare, User, KeyRound, Eye, EyeOff, Users, Activity } from "lucide-react";
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

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-blue/5 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-purple/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent-teal/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Animated lines */}
        <div className="absolute top-20 right-20 w-40 h-[1px] bg-accent-teal/30 animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-[1px] h-40 bg-accent-teal/30 animate-pulse-slow"></div>
        
        <div className="absolute bottom-20 left-20 w-40 h-[1px] bg-accent-purple/30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-[1px] h-40 bg-accent-purple/30 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative w-full max-w-xl animate-zoom-in z-10">
        <div className="relative mx-4 glass-card rounded-xl shadow-2xl p-8 animate-slideInUp overflow-hidden">
          {/* Animated accent lines */}
          <div className="absolute -top-10 -right-10 w-20 h-20 border-b-2 border-l-2 border-accent-teal/30 rounded-bl-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 border-t-2 border-r-2 border-accent-purple/30 rounded-tr-3xl"></div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-teal rounded-full blur-md opacity-50 animate-pulse-slow"></div>
              <div className="relative glass-effect rounded-full p-4">
                <Users className="w-7 h-7 text-white animate-float" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-1 animate-slideInDown">
              <span className="gradient-text">Create Account</span>
            </h1>
            <p className="text-gray-400 text-sm">Join our secure messaging platform</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="relative group animate-slideInRight animation-delay-200">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500 group-focus-within:text-accent-blue transition-colors duration-300" />
              </div>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Username */}
            <div className="relative group animate-slideInLeft animation-delay-300">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500 group-focus-within:text-accent-blue transition-colors duration-300" />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="Username"
                required
              />
            </div>

            {/* Two columns for password fields on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Password */}
              <div className="relative group animate-slideInRight animation-delay-400">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <KeyRound className="h-5 w-5 text-gray-500 group-focus-within:text-accent-blue transition-colors duration-300" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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

              {/* Confirm Password */}
              <div className="relative group animate-slideInLeft animation-delay-500">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <KeyRound className="h-5 w-5 text-gray-500 group-focus-within:text-accent-blue transition-colors duration-300" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Gender Selection */}
            <div className="relative animate-slideInUp animation-delay-600">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="" disabled className="bg-dark-600 text-gray-300">Select Gender</option>
                <option value="male" className="bg-dark-600 text-white">Male</option>
                <option value="female" className="bg-dark-600 text-white">Female</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 mt-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-teal text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-teal/20 animate-fadeInUp animation-delay-700 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Activity className="animate-spin h-5 w-5 mr-2" />
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            {/* Login Link */}
            <div className="text-center mt-4 animate-fadeInUp animation-delay-800">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-accent-blue hover:text-neon-blue transition-all duration-300 font-medium"
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