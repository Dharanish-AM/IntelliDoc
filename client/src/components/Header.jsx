import React from "react";
import { Menu, Bell, Moon, Sun, LogOut, User, ChevronDown } from "lucide-react";

export function Header({ user, onToggleSidebar, isCollapsed }) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header
      className={`flex h-16 item-center justify-space bg-white border-b border-gray-200`}
    >
      <div className="flex w-full items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onToggleSidebar((prev) => !prev)}
            className="p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>

          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome back, {user?.name?.split(" ")[0]}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="h-10 w-10 flex items-center justify-center font-bold bg-gray-200 text-gray-700 rounded-full">
                {user?.name[0]?.toUpperCase() || "U"}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span onClick={() => (window.location.pathname = "/profile")}>
                    Profile
                  </span>
                </button>
                <hr className="my-1 border-gray-200" />
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
