import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate()
  const user = {
    name: "Aditya Verma",
    plan: "30 Thali Plan",
    remainingThali: 18,
    consumedThali: 12,
    todayStatus: "Present",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <h1 className="text-2xl font-bold">
          Welcome, {user.name}
        </h1>
        <p className="text-gray-500 mt-1">{user.plan}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-gray-500">Remaining Thali</h2>
          <p className="text-3xl font-bold text-green-600">
            {user.remainingThali}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-gray-500">Consumed Thali</h2>
          <p className="text-3xl font-bold text-blue-600">
            {user.consumedThali}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-gray-500">Today's Status</h2>
          <p className="text-3xl font-bold text-orange-500">
            {user.todayStatus}
          </p>
        </div>
      </div>

      {/* QR Scan Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6 text-center">
        <h2 className="text-xl font-semibold mb-3">
          Mark Attendance
        </h2>

        <button onClick={()=>{navigate("/scan")}} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Scan QR Code
        </button>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Attendance History
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">15 Jun 2026</td>
              <td className="text-green-600 font-medium">Present</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">14 Jun 2026</td>
              <td className="text-red-600 font-medium">Absent</td>
            </tr>

            <tr>
              <td className="py-2">13 Jun 2026</td>
              <td className="text-green-600 font-medium">Present</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UserDashboard;