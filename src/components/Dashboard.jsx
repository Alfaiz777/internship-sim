import React from "react";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Users</a></li>
          <li><a href="#" className="hover:text-gray-300">Settings</a></li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-1 rounded">Logout</button>
        </nav>

        {/* Stats Cards */}
        <main className="p-6 grid grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold">Users</h2>
            <p className="text-2xl mt-2">1200</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold">Revenue</h2>
            <p className="text-2xl mt-2">$5000</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
