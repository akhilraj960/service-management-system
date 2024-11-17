import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("YOUR_API_URL/login", {
        email,
        password,
      });

      // Handle success
      if (response.status === 200) {
        // Redirect on successful login
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body space-y-6">
        <h2 className="card-title">Login to continue</h2>
        <div className="card-actions space-y-4">
          <div className="w-full space-y-2">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full space-y-2">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button onClick={handleLogin} className="btn btn-primary w-full">
            Login
          </button>
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
