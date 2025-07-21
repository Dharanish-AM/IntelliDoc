import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  FileText,
  Users,
  BarChart3,
  Upload,
  Search,
  Settings,
  Shield,
  FolderOpen,
  User,
} from "lucide-react";
import logo from "../assets/intellidoc.png";
  
export function Sidebar({ user, currentView, onViewChange, isCollapsed }) {
  const navigate = useNavigate();
  const getMenuItems = () => {
    switch (user?.role) {
      case "admin":
        return [
          { id: "dashboard", label: "Dashboard", icon: Home },
          { id: "documents", label: "All Documents", icon: FileText },
          { id: "users", label: "User Management", icon: Users },
          { id: "analytics", label: "Analytics", icon: BarChart3 },
          { id: "settings", label: "Settings", icon: Settings },
        ];
      case "staff":
        return [
          { id: "dashboard", label: "Dashboard", icon: Home },
          { id: "documents", label: "My Documents", icon: FileText },
          { id: "upload", label: "Upload Files", icon: Upload },
          { id: "settings", label: "Settings", icon: Settings },
        ];
      case "user":
        return [
          { id: "dashboard", label: "Dashboard", icon: Home },
          { id: "documents", label: "Documents", icon: FileText },
          { id: "search", label: "Search", icon: Search },
          { id: "settings", label: "Settings", icon: Settings },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div
      className={`flex h-full flex-col bg-white border-r border-gray-200`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div
              className={`transition-all duration-300 ${
                isCollapsed ? "h-10 w-10" : "h-12 w-12"
              }`}
            >
              <img
                src={logo}
                alt="Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900">IntelliDoc</h1>
                <span className="text-xs text-gray-500 capitalize">
                  {user?.role} Portal
                </span>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => navigate(`/${user?.role}/${item.id}`)}
                className={`w-full cursor-pointer flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#320B6B]"
                }`}
              >
                <Icon
                  className={`h-5 w-5 flex-shrink-0 ${
                    isActive ? "text-blue-600" : ""
                  }`}
                />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
