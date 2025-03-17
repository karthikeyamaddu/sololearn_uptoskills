import React, { useEffect, useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handleLogin(email, password);
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }, 2000);
  };

  return (
    <div
      className={`relative flex h-screen w-full items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gradient-to-br from-[#0A0F1F] to-[#1A2238]" : "bg-gray-100"
      }`}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute -top-10 left-1/3 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Login Card */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-10 rounded-3xl w-full max-w-md transition-all duration-300 hover:shadow-[0_0_30px_#3B82F6]/30 animate-float">
        <h1 className={`font-sans font-extrabold text-4xl text-center mb-6 ${darkMode ? "text-white" : "text-black"}`}>
          Sign In
        </h1>
        <p className={`text-center mb-8 ${darkMode ? "text-gray-300" : "text-black"}`}>
          🔑 Enter your details to continue
        </p>

        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full ${darkMode ? "text-white" : "text-black"} font-semibold bg-white/10 border border-white/30 text-lg py-3 px-5 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all shadow-lg shadow-gray-900/50`}
            type="email"
            placeholder="📧 Enter your email"
          />

          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full ${darkMode ? "text-white" : "text-black"} font-semibold bg-white/10 border border-white/30 text-lg py-3 px-5 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all shadow-lg shadow-gray-900/50`}
              type={showPassword ? "text" : "password"}
              placeholder="🔒 Enter password"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-white transition-all duration-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button
            type="submit"
            className={`w-full text-white font-semibold text-lg py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-700/50 hover:shadow-blue-500/50 ${
              isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "🔄 Logging In..." : "🚀 Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-white/20"></div>
          <span className="text-gray-400 px-3">or</span>
          <div className="flex-grow border-t border-white/20"></div>
        </div>

        {/* Social Login Buttons */}
        <button className="w-full flex items-center justify-center bg-white text-black font-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300">
          📧 Continue with Email
        </button>
        <button className="w-full flex items-center justify-center bg-black text-white font-semibold py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300 mt-3">
          🍏 Continue with Apple
        </button>

        {/* Additional Actions */}
        <div className="flex justify-between items-center mt-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-blue-400 transition-all">❓ Forgot Password?</a>
          <a href="#" className="hover:text-blue-400 transition-all">➕ Sign Up</a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-all text-2xl"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Login;
