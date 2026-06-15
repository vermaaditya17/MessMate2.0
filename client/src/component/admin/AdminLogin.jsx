import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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
        "http://localhost:5000/api/admin/login",
        formData
      );

      console.log(res.data);

      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      if (res.data.token) {
        localStorage.setItem(
          "token",
          res.data.token
        );
      }

      alert("Login Successful");

      navigate("/admin/dashboard");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        
        <h1 className="text-3xl font-bold text-center">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to manage your mess
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Admin Email"
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
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/admin/register"
            className="text-black font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}