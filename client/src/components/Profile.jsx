import React, { useState } from "react";
import {
  X,
  User,
  BadgeCheck,
  Shield,
  Briefcase,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Edit2,
  Save,
  Key,
  Trash2,
} from "lucide-react";

const ChangePasswordModal = ({ onClose, onSave }) => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Add validation here if needed
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    onSave(passwords);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
          aria-label="Close change password modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Change Password
        </h3>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Old Password"
            value={passwords.oldPassword}
            onChange={(e) => handleChange("oldPassword", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="password"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={passwords.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition font-semibold"
        >
          Save Password
        </button>
      </div>
    </div>
  );
};

const ProfileModal = ({ onClose }) => {
  const [user, setUser] = useState({
    name: "Sarah Chen",
    employeeId: "EMP12345",
    role: "Admin",
    department: "Quality",
    age: 29,
    address: "123 Industrial Road, Coimbatore",
    email: "sarah.chen@example.com",
    mobile: "+91 9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeletionMsg, setShowDeletionMsg] = useState(false);

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
      setShowPasswordModal(false);
      setShowDeletionMsg(false);
    }
  };

  const openPasswordModal = () => {
    setShowPasswordModal(true);
    setIsEditing(false);
    setShowDeletionMsg(false);
  };

  const handleDelete = () => {
    setShowDeletionMsg(true);
    setIsEditing(false);
    setShowPasswordModal(false);

    setTimeout(() => setShowDeletionMsg(false), 4000);
  };

  const profileFields = [
    { icon: User, label: "Name", key: "name", type: "text" },
    { icon: BadgeCheck, label: "Employee ID", key: "employeeId", type: "text" },
    { icon: Shield, label: "Role", key: "role", type: "text" },
    { icon: Briefcase, label: "Department", key: "department", type: "text" },
    { icon: Calendar, label: "Age", key: "age", type: "number" },
    { icon: MapPin, label: "Address", key: "address", type: "text" },
    { icon: Mail, label: "Email", key: "email", type: "email" },
    { icon: Phone, label: "Mobile", key: "mobile", type: "text" },
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
          {/* Header */}
          <h2 className="text-3xl flex justify-between items-center font-extrabold mb-8 text-gray-900 tracking-wide">
            <span>Profile Details</span>
            <X className="w-6 h-6 cursor-pointer" onClick={onClose} />
          </h2>

          {/* User Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center bg-gray-100 select-none text-4xl font-bold text-gray-900">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileFields.map(({ icon: Icon, label, key, type }) => (
              <div
                key={key}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4 hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3 mb-2 text-gray-600">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                {isEditing ? (
                  <input
                    type={type}
                    value={user[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                ) : (
                  <div className="text-sm font-medium text-gray-800">
                    {user[key]}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={toggleEdit}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm shadow-sm"
            >
              {isEditing ? (
                <Save className="w-4 h-4" />
              ) : (
                <Edit2 className="w-4 h-4" />
              )}
              {isEditing ? "Save" : "Edit"}
            </button>

            <button
              onClick={openPasswordModal}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 text-sm shadow-sm"
            >
              <Key className="w-4 h-4" />
              Change Password
            </button>

            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 text-sm shadow-sm"
            >
              <Trash2 className="w-4 h-4" />
              Delete Account
            </button>
          </div>

          {/* Delete Account Message */}
          {showDeletionMsg && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg text-center text-sm select-none">
              Account deletion request sent
            </div>
          )}
        </div>
      </div>

      {showPasswordModal && (
        <ChangePasswordModal
          onClose={() => setShowPasswordModal(false)}
          onSave={(passwords) => {
            // Handle password save logic here
            console.log("Password changed:", passwords);
          }}
        />
      )}
    </>
  );
};

export default ProfileModal;
