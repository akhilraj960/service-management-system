import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!formData.name || !formData.category) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", formData);

    const response = await axios.post(
      "http://localhost:3000/api/serviceview/create",
      formData
    );

    navigate("/admin/service-view");

    // Clear form data
    setFormData({
      name: "",
      category: "",
    });
  };

  return (
    <div className="w-full p-4">
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        {/* Service Name Field */}
        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="name" className="font-medium">
            Service Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter service name"
            className="input input-bordered w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Service Category Field */}
        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="category" className="font-medium">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="input input-bordered w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="plumber">Plumber</option>
            <option value="cleaning">Cleaning</option>
            <option value="mechanic">Mechanic</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className="btn w-full btn-primary bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};
