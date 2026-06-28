import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white">
          MessMate
        </h1>

        <p className="mt-6 text-xl text-white">

          Built for students. Designed for mess owners.
        </p>

        <p className="mt-4 text-white leading-relaxed">
          Manage meal subscriptions, track attendance with QR codes,
          monitor remaining meals, and simplify monthly mess operations —
          all from one place.
        </p>

       <div className="mt-10 flex gap-4 justify-center">

      <button
          onClick={() => navigate("user/login")}
          className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-800 hover:text-white transition">
      
        User Login
     </button>

  <button
    onClick={() => navigate("/admin/login")}
    className="px-8 py-3 border border-black bg-grey-800 text-white rounded-lg font-medium hover:bg-white hover:text-black transition">
  
    Admin Login
  </button>
          </div>
      </div>
    </div>
  );
}