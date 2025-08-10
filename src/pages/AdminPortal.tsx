import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AdminLogin from "@/components/Admin/AdminLogin";
import AdminDashboard from "@/components/Admin/AdminDashboard";

const AdminPortal: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showDashboard, setShowDashboard] = useState(isAuthenticated);

  const handleLoginSuccess = () => {
    setShowDashboard(true);
  };

  const handleLogout = () => {
    setShowDashboard(false);
  };

  if (!showDashboard) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default AdminPortal;
