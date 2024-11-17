import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLoginForm = () => {
  // State to manage form data, errors, and submission feedback
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/admin/login",
          formData
        );

        localStorage.setItem("adminToken", response.data.data);
        console.log("Login successful:", response.data);
        navigate("/admin");
        // Handle success, e.g., redirect to dashboard
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <form onSubmit={handleSubmit} className="card-body space-y-6">
        <h2 className="card-title text-xl font-semibold">Admin Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}
        <div className="card-actions space-y-4">
          <div className="w-full space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="example@gmail.com"
              aria-label="Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              aria-label="Password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className={`btn btn-primary w-full ${
              loading ? "btn-disabled" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};
