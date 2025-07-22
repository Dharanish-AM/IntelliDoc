import React from "react";
import { Users, Mail, Badge, X } from "lucide-react";
import { mockUsers } from "../../../data/mockData";

const ManageUsers = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [showAddModal, setShowAddModal] = React.useState(false);

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "staff":
        return "bg-blue-100 text-blue-800";
      case "user":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return "👑";
      case "staff":
        return "👨‍💼";
      case "user":
        return "👤";
      default:
        return "👤";
    }
  };

  return (
    <div className="space-y-6 flex flex-col p-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
        <p className="text-gray-600 mt-1">
          View and manage user accounts across the organization
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </div>

      {/* Users Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Badge size={24} className="text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Administrators
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUsers.filter((u) => u.role === "admin").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users size={24} className="text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Staff Members</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUsers.filter((u) => u.role === "staff").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users size={24} className="text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Regular Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUsers.filter((u) => u.role === "user").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">All Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">
                        {getRoleIcon(user.role)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {user.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Mail size={16} className="mr-2 text-gray-400" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getRoleColor(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-blue-600 cursor-pointer hover:text-blue-900"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden">
           <div className="flex justify-between p-4 w-full items-center border-b border-gray-200">
              <h3 className=" text-xl font-semibold">User Details</h3>
            <X className="cursor-pointer" onClick={() => setSelectedUser(null)} />
           </div>
            <div className="px-6 py-4 space-y-3">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-base font-medium text-gray-900">
                  {selectedUser.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-base font-medium text-gray-900">
                  {selectedUser.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="text-base font-medium text-gray-900 capitalize">
                  {selectedUser.role}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="text-base font-medium text-gray-900">
                  {selectedUser.department}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-base font-medium text-gray-900">
                  {selectedUser.address}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p className="text-base font-medium text-gray-900">
                  {selectedUser.age}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mobile</p>
                <p className="text-base font-medium text-gray-900">
                  {selectedUser.mobile}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={() => {
                  /* Implement edit logic */
                }}
                className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  /* Implement delete logic */
                }}
                className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
             
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4">
            <h3 className="text-2xl font-semibold text-center text-gray-800">Add New User</h3>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Employee ID"
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              />

              {/* Role Dropdown */}
              <select className="border border-gray-300 rounded px-4 py-2 text-sm">
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Employee">Employee</option>
              </select>

              {/* Department Dropdown */}
              <select className="border border-gray-300 rounded px-4 py-2 text-sm">
                <option value="">Select Department</option>
                <option value="Management">Management</option>
                <option value="Engineering">Engineering</option>
                <option value="Quality">Quality</option>
                <option value="HR">HR</option>
                <option value="Logistics">Logistics</option>
                <option value="Finance">Finance</option>
              </select>

              <input
                type="number"
                placeholder="Age"
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 text-sm"
              >
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
