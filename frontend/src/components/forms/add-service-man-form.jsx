import React, { useState } from "react";

export const AddServiceManForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Age is required.";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "Age must be a positive number.";
    }
    if (!formData.gender) newErrors.gender = "Gender is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      alert("Form submitted successfully!");
      // Reset form
      setFormData({ name: "", email: "", phone: "", age: "", gender: "" });
      setErrors({});
    }
  };

  return (
    <div className="w-full">
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col space-y-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="w-full flex flex-col space-y-2">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="w-full flex flex-col space-y-2">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="input input-bordered w-full"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div className="w-full flex flex-col space-y-2">
          <label>Age</label>
          <input
            type="text"
            name="age"
            className="input input-bordered w-full"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div className="w-full flex flex-col space-y-2">
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
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};
