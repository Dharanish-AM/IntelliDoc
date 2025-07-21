import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminPage from "./pages/main/AdminPage";
import StaffPage from "./pages/main/StaffPage";
import UserPage from "./pages/main/UserPage";
import AuthPage from "./pages/auth/AuthPage";
import LandingPage from "./pages/auth/LandingPage";

export default function App() {
  const [role, setRole] = useState("admin"); // "admin", "staff", "user"
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={`/${role}`} />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/user" element={<UserPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
