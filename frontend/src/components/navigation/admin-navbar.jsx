import { useNavigate } from "react-router-dom";

export const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="navbar bg-base-100 border-b px-20 flex justify-between items-center">
      <div>DashBoard</div>
      <nav className="flex gap-6">
        <button className="btn btn-outline" onClick={() => logout()}>
          Logout
        </button>
      </nav>
    </div>
  );
};
