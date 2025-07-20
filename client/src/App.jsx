import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminPage from "./pages/main/AdminPage";
import StaffPage from "./pages/main/StaffPage";
import UserPage from "./pages/main/UserPage";
import AuthPage from "./pages/auth/AuthPage";
import LandingPage from "./pages/auth/LandingPage";

export default function App() {
  const [role, setRole] = useState(""); // "admin", "staff", "user"
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              role === "admin" ? (
                <AdminPage user={user} />
              ) : role === "staff" ? (
                <StaffPage user={user} />
              ) : (
                <UserPage user={user} />
              )
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
