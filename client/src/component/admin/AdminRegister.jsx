
import { Link } from "react-router-dom";

export default function AdminRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center">
          Admin Register
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create your mess owner account
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Mess Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
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