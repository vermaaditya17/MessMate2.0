import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    restaurantName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://messmate-server-6nq7.onrender.com/api/users/register",
        formData
      );

      alert(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#c2410c] selection:text-white pb-6">
      {/* Header Section */}
      <div className="relative bg-[#c2410c] pt-12 pb-24 px-6 rounded-b-[2.5rem] overflow-hidden shadow-md">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border-[40px] border-white/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full border-[30px] border-white/10 pointer-events-none"></div>

        {/* Top Bar: Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-[#c2410c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 4H4v2M18 4h2v2M6 20H4v-2M18 20h2v-2" strokeLinecap="square" />
              <path d="M9 16V8m-2 4V8m4 4V8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 12a2 2 0 004 0" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 8v8M15 8c0-2 2-3 2-3v11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-tight">MessMate</h1>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="relative z-10 mt-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Create Account</h2>
          <p className="text-white/90 text-sm mt-2 leading-relaxed max-w-[280px]">
            Sign up to join MessMate and manage your meals seamlessly.
          </p>
        </div>
      </div>

      {/* Main Content Card (Overlapping header) */}
      <div className="relative z-20 -mt-12 mx-5 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* User ID */}
          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              User ID
            </label>
            <input
              type="number"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="e.g. 101"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Aarav Sharma"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="aarav.sharma@college.edu"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Restaurant Name (Optional/If applicable) */}
          <div>
            <label className="block text-sm font-bold text-[#c2410c] mb-1.5 ml-1">
              Hostel / Mess Name
            </label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="Enter mess name"
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c2410c] focus:ring-1 focus:ring-[#c2410c] transition-all placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Password */}
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
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c2410c] transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-sm py-4 rounded-xl mt-6 flex justify-center items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(194,65,12,0.39)] active:scale-[0.98]"
          >
            Create Account
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </form>

        {/* Footer Login Link */}
        <p className="mt-6 text-center text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link to="/" className="text-[#c2410c] font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}