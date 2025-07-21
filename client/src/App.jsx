import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminPage from "./pages/main/admin/AdminPage";
import StaffPage from "./pages/main/staff/StaffPage";
import UserPage from "./pages/main/user/UserPage";

import AuthPage from "./pages/auth/AuthPage";
import LandingPage from "./pages/auth/LandingPage";

import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";
import Analytics from "./pages/main/admin/Analytics";
import UserManagement from "./pages/main/admin/UserManagement";
import AllDocuments from "./pages/main/admin/AllDocuments";
import Profile from "./components/Profile";

export default function App() {
  const [role, setRole] = useState("admin"); // "admin", "staff", "user"
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route
              path="/*"
              element={
                <div className="flex h-screen">
                  <Sidebar isCollapsed={isSidebarCollapsed} user={user} />
                  <div className="flex flex-col flex-1">
                    <Header
                      isCollapsed={isSidebarCollapsed}
                      onToggleSidebar={setIsSidebarCollapsed}
                      user={user}
                    />
                    <Routes>
                      {role === "admin" && (
                        <>
                          <Route
                            path="/admin/dashboard"
                            element={<AdminPage user={user} />}
                          />
                          <Route
                            path="/admin/documents"
                            element={<AllDocuments />}
                          />
                          <Route
                            path="/admin/analytics"
                            element={<Analytics />}
                          />
                          <Route
                            path="/admin/users"
                            element={<UserManagement />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/admin/dashboard" />}
                          />
                        </>
                      )}
                      {role === "staff" && (
                        <>
                          <Route
                            path="/staff/dashboard"
                            element={<StaffPage user={user} />}
                          />
                          <Route
                            path="/staff/documents"
                            element={<div>Staff Documents</div>}
                          />
                          <Route
                            path="/staff/uploads"
                            element={<div>Staff Uploads</div>}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/staff/dashboard" />}
                          />
                        </>
                      )}
                      {role === "user" && (
                        <>
                          <Route
                            path="/user/dashboard"
                            element={<UserPage user={user} />}
                          />
                          <Route
                            path="/user/documents"
                            element={<div>User Documents</div>}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/user/dashboard" />}
                          />
                        </>
                      )}
                      <Route path="*" element={<Navigate to={`/${role}`} />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
