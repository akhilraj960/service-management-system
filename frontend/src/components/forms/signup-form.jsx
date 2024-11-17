import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone1: "",
    phone2: "",
    location: "",
    age: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate password
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Validate phone 1
    if (
      !formData.phone1 ||
      formData.phone1.length < 10 ||
      formData.phone1.length > 15
    ) {
      newErrors.phone1 = "Phone 1 must be between 10 to 15 characters";
    }

    // Validate phone 2
    if (
      formData.phone2 &&
      (formData.phone2.length < 10 || formData.phone2.length > 15)
    ) {
      newErrors.phone2 = "Phone 2 must be between 10 to 15 characters";
    }

    // Validate location
    if (!formData.location) {
      newErrors.location = "Location is required";
    }

    // Validate age
    if (!formData.age || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Age must be between 18 and 100";
    }

    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Proceed with form submission logic here
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card bg-base-100 w-[800px] shadow-xl">
      <div className="card-body space-y-6">
        <h2 className="card-title">Sign Up to continue</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Email */}
          <div className="w-full space-y-2">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Phone 1 */}
          <div className="w-full space-y-2">
            <label>Phone 1</label>
            <input
              type="text"
              name="phone1"
              placeholder="123-456-7890"
              className="input input-bordered w-full"
              value={formData.phone1}
              onChange={handleChange}
            />
            {errors.phone1 && <p className="text-red-500">{errors.phone1}</p>}
          </div>

          {/* Phone 2 */}
          <div className="w-full space-y-2">
            <label>Phone 2</label>
            <input
              type="text"
              name="phone2"
              placeholder="987-654-3210"
              className="input input-bordered w-full"
              value={formData.phone2}
              onChange={handleChange}
            />
            {errors.phone2 && <p className="text-red-500">{errors.phone2}</p>}
          </div>

          {/* Location */}
          <div className="w-full space-y-2">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Country"
              className="input input-bordered w-full"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
            )}
          </div>

          {/* Age */}
          <div className="w-full space-y-2">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="input input-bordered w-full"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="text-red-500">{errors.age}</p>}
          </div>

          {/* Gender */}
          <div className="w-full space-y-2">
            <label>Gender</label>
            <select
              name="gender"
              className="select select-bordered w-full"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          {/* Password */}
          <div className="w-full space-y-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="w-full space-y-2">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              className="input input-bordered w-full"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>
        </form>

        {/* Link to login page */}
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
