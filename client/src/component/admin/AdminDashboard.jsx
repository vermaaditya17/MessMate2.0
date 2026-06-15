export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="bg-white px-6 py-4 shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold">MessMate Admin</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">
          Welcome Back 👋
        </h2>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Present Today</h3>
            <p className="text-3xl font-bold">85</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Absent Today</h3>
            <p className="text-3xl font-bold">35</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Pending Payments</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <button className="bg-black text-white p-4 rounded-xl">
            Manage Users
          </button>

          <button className="bg-black text-white p-4 rounded-xl">
            Attendance
          </button>

          <button className="bg-black text-white p-4 rounded-xl">
            Payments
          </button>

          <button className="bg-black text-white p-4 rounded-xl">
            Reports
          </button>
        </div>
      </div>
    </div>
  );
}