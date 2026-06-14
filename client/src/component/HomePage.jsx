import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
          MessMate
        </h1>

        <p className="mt-6 text-xl text-gray-600">

          Built for students. Designed for mess owners.
        </p>

        <p className="mt-4 text-gray-500 leading-relaxed">
          Manage meal subscriptions, track attendance with QR codes,
          monitor remaining meals, and simplify monthly mess operations —
          all from one place.
        </p>

        <button 
        onClick={()=>navigate("/login")}
        className="mt-10 px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
        Get Started
          
        </button>
      </div>
    </div>
  );
}