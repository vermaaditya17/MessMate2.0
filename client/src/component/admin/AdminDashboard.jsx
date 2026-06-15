const AdminDashboard = () => {
  const users = [
    {
      id: 1,
      name: "Aditya Verma",
      status: "Present",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      status: "Absent",
    },
    {
      id: 3,
      name: "Aman Gupta",
      status: "Present",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-3xl font-bold">25</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Present Today</h3>
          <p className="text-3xl font-bold text-green-600">18</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Absent Today</h3>
          <p className="text-3xl font-bold text-red-600">7</p>
        </div>
      </div>

      {/* User List */}
      <div className="bg-white rounded-xl shadow p-5">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Users
          </h2>

          <input
            type="text"
            placeholder="Search User..."
            className="border px-4 py-2 rounded-lg"
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{user.name}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-3">
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default AdminDashboard;