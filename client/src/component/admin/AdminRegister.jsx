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
        "http://localhost:5000/api/admin/register",
        formData
      );

      alert(res.data.message);

      navigate("/admin/login");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        
        <h1 className="text-3xl font-bold text-center">
          Admin Register
        </h1>

        <p className="text-center text-gray-500 mt-2">
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
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Mess Name"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-5 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/admin/login"
            className="text-black font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}