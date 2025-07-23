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
import StaffDocs from "./pages/main/staff/StaffDocs";
import Upload from "./pages/main/staff/Upload";
import { mockUsers } from "./data/mockData";
import UserDocuments from "./pages/main/user/UserDocuments";

export default function App() {
  const [role, setRole] = useState("user"); // "admin", "staff", "user"
  const [user, setUser] = useState({
    id: "1",
    name: "John Staff",
    email: "john@sakthiauto.com",
    role: "user",
    department: "Engineering",
    address: "45 Industrial Road, Coimbatore",
    age: 35,
    mobile: "9123456780",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };



  const handleLogin = (form) => {
    const matchedUser = mockUsers.find((u) => u.email === form.email);
    if (matchedUser) {
      setUser(matchedUser);
      setRole(matchedUser.role);
      setIsAuthenticated(true);
    } else {
      alert("Invalid email. Please try again.");
    }
  };

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
                      handleLogout={() => handleLogout()}
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
                            element={<StaffDocs user={user} />}
                          />
                          <Route
                            path="/staff/uploads"
                            element={<Upload user={user} />}
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
                            element={<UserDocuments user={user} />}
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
            <Route
              path="/auth"
              element={<AuthPage handleLogin={handleLogin} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
