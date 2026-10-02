import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function HomePage() {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('student'); // 'student' or 'owner'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Updated state: identifier replaced with email as required by your APIs
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Integrated Login Logic based on activeRole
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (activeRole === 'student') {
        // ---- STUDENT LOGIN API ----
        const res = await axios.post(
          "https://messmate-server-6nq7.onrender.com/api/users/login",
          formData
        );
        
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        
        // Saving token if backend provides it for user
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        alert("Login Successful");
        navigate('/user/dashboard');

      } else if (activeRole === 'owner') {
        // ---- ADMIN/OWNER LOGIN API ----
        const res = await axios.post(
          "https://messmate-server-6nq7.onrender.com/api/admin/login",
          formData
        );
        
        console.log(res.data);
        localStorage.setItem("admin", JSON.stringify(res.data.admin));
        
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        alert("Login Successful");
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Dynamic Register Navigation
  const handleRegisterNavigation = () => {
    if (activeRole === 'student') {
      navigate('/user/register');
    } else {
      navigate('/admin/register');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#c2410c] selection:text-white pb-6">
      
      {/* Header Section */}
      <div className="relative bg-[#c2410c] pt-12 pb-24 px-6 rounded-b-[2.5rem] overflow-hidden shadow-md">
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border-[40px] border-white/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full border-[30px] border-white/10 pointer-events-none"></div>

        {/* Top Bar: Logo and Language Toggle */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-[#c2410c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 4H4v2M18 4h2v2M6 20H4v-2M18 20h2v-2" strokeLinecap="square" />
                <path d="M9 16V8m-2 4V8m4 4V8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12a2 2 0 004 0" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 8v8M15 8c0-2 2-3 2-3v11" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl leading-tight">MessMate</h1>
              <p className="text-white/80 text-[10px] font-medium tracking-wide">Smart Mess Management</p>
            </div>
          </div>
          
          <button className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold py-1.5 px-3 rounded-full transition-colors">
            EN
          </button>
        </div>

        {/* Welcome Text */}
        <div className="relative z-10 mt-10">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {activeRole === 'student' ? 'Welcome back, foodie!' : 'Welcome, Mess Owner!'}
          </h2>
          <p className="text-white/90 text-sm mt-3 leading-relaxed max-w-[280px]">
            {activeRole === 'student' 
              ? "Login to check today's menu, skip meals & pay mess fees."
              : "Login to manage subscribers, update menus & track payments."}
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-20 -mt-12 mx-5 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6">
        
        {/* Role Selection */}
        <p className="text-[#c2410c] font-bold text-sm mb-3">Choose Your Role</p>
        <div className="flex justify-between gap-4 mb-8">
          
          <button 
            type="button"
            onClick={() => setActiveRole('student')}
            className={`flex-1 py-3 px-2 rounded-2xl border flex flex-col items-center gap-2 transition-all duration-300 ${activeRole === 'student' ? 'bg-[#c2410c] border-[#c2410c] text-white shadow-md transform scale-105' : 'bg-transparent border-gray-200 text-gray-500 hover:border-orange-400'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            <span className="text-[12px] font-semibold">Student</span>
          </button>

          <button 
            type="button"
            onClick={() => setActiveRole('owner')}
            className={`flex-1 py-3 px-2 rounded-2xl border flex flex-col items-center gap-2 transition-all duration-300 ${activeRole === 'owner' ? 'bg-[#c2410c] border-[#c2410c] text-white shadow-md transform scale-105' : 'bg-transparent border-gray-200 text-gray-500 hover:border-orange-400'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
            <span className="text-[12px] font-semibold">Mess Owner</span>
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              Email Address
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={activeRole === 'student' ? "aarav@college.edu" : "owner@mess.com"}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium tracking-wider"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c2410c] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer">Login via OTP</p>
            <p className="text-xs font-bold text-[#c2410c] hover:text-[#9a3412] cursor-pointer">Forgot Password?</p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-sm py-4 rounded-xl mt-6 flex justify-center items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(194,65,12,0.39)] active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? 'Logging in...' : `Proceed as ${activeRole === 'student' ? 'Student' : 'Owner'}`}
            {!loading && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
        </form>

        {/* Dynamic Register Route */}
        <p className="mt-6 text-center text-sm text-gray-500 font-medium">
          New here?{" "}
          <span 
            onClick={handleRegisterNavigation} 
            className="text-[#c2410c] font-bold hover:underline cursor-pointer"
          >
            Create an account
          </span>
        </p>

      </div>
    </div>
  );
}