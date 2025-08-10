import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Users, Settings, BarChart3 } from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onLogout();
  };

  const adminFeatures = [
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Analytics",
      description: "View detailed analytics and reports",
      icon: BarChart3,
      color: "text-green-500",
    },
    {
      title: "Settings",
      description: "Configure system settings",
      icon: Settings,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Manage your application settings and data
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="secondary">
                  Access {feature.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="justify-start">
                  View System Logs
                </Button>
                <Button variant="outline" className="justify-start">
                  Backup Database
                </Button>
                <Button variant="outline" className="justify-start">
                  Manage API Keys
                </Button>
                <Button variant="outline" className="justify-start">
                  System Health
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
