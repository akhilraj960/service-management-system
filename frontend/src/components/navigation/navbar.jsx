import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b px-20 flex justify-between items-center">
      <div>Logo</div>
      <nav className="flex gap-6">
        <Link to={"/login"} className="btn">
          Login
        </Link>
        <Link to={"/"} className="btn">
          Register
        </Link>
      </nav>
    </div>
  );
};
