import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminPage from "./pages/main/admin/AdminPage";
import StaffPage from "./pages/main/staff/StaffPage";
import UserPage from "./pages/main/user/UserPage";

import AuthPage from "./pages/auth/AuthPage";
import LandingPage from "./pages/auth/LandingPage";

export default function App() {
  const [role, setRole] = useState("admin"); // "admin", "staff", "user"
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Routes>
          <Route
            path={`/${role}`}
            element={
              role === "admin" ? (
                <AdminPage user={user} />
              ) : role === "staff" ? (
                <StaffPage user />
              ) : (
                <UserPage user={user} />
              )
            }
          />
          <Route path="*" element={<Navigate to={`/${role}`} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
