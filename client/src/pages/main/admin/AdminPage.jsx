import React from "react";
import { Sidebar } from "../../../components/SideBar";
import { Header } from "../../../components/Header";

export default function AdminPage({ user }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar isCollapsed={isSidebarCollapsed} user={user} />
      <div className="flex flex-col flex-1">
        <Header
          isCollapsed={isSidebarCollapsed}
          onToggleSidebar={setIsSidebarCollapsed}
          user={user}
        />
        {/* Main */}
        <div>
          <h1>Admin Page</h1>
        </div>
      </div>
    </div>
  );
}
