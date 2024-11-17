import { Outlet, useNavigate } from "react-router-dom";
import { AdminNavbar } from "../navigation/admin-navbar";
import { isAdminLoggedIn } from "../../utils/auth-fn";
import { useEffect } from "react";
import { AdminSidebar } from "../navigation/admin-sidebar";

export const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate("/admin/login", { replace: true }); // Use replace to avoid leaving history behind
    }
  }, [navigate]); // Add navigate as a dependency to avoid lint warnings

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavbar />
      <main className="flex-1 flex">
        <div className="w-2/12 h-full">
          <AdminSidebar />
        </div>
        <div className="w-full p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
