import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: "",
    restaurantName: "",
    email: "",
    mobile: "",
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
        "https://messmate-server-6nq7.onrender.com/api/admin/register",
        formData
      );

      alert(res.data.message);
      navigate("/");

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  // Shared input styling for cleaner code
  const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all";

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/10 border border-orange-100">
        
        <h1 className="text-3xl font-bold text-center text-orange-700">
          Admin Register
        </h1>

        <p className="text-center text-orange-900/60 mt-2">
          Create your mess owner account
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Full Name"
            className={inputClasses}
            required
          />

          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Mess Name"
            className={inputClasses}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={inputClasses}
            required
          />

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className={inputClasses}
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={inputClasses}
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md shadow-orange-600/30"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}