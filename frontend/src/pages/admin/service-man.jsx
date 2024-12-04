import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchServiceMan = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/serviceman");
    return response.data; // Assuming the API returns an array of service men
  } catch (error) {
    console.error("Failed to fetch service men:", error);
    return []; // Return an empty array on error
  }
};

export const ServiceMan = () => {
  const [serviceMen, setServiceMen] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    const loadServiceMen = async () => {
      setIsLoading(true);
      const data = await fetchServiceMan();
      setServiceMen(data);
      setIsLoading(false);
    };
    loadServiceMen();
  }, []);

  // Delete a serviceman
  const handleDeleteServiceMan = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service man?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/api/serviceman/${id}`);
      setServiceMen((prev) => prev.filter((man) => man._id !== id)); // Update UI
      alert("Service man deleted successfully");
    } catch (error) {
      console.error("Failed to delete service man:", error);
      alert("Failed to delete service man");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-end mb-4">
        <Link to={"add"} className="btn btn-primary">
          Add Service Man
        </Link>
      </div>
      {isLoading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra border shadow">
              {/* head */}
              <thead>
                <tr className="text-lg">
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {serviceMen.length > 0 ? (
                  serviceMen.map((man, index) => (
                    <tr key={man._id || index}>
                      <th>{index + 1}</th>
                      <td>{man.name}</td>
                      <td>{man.email}</td>
                      <td>{man.phone}</td>
                      <td>{man.age}</td>
                      <td>{man.gender}</td>
                      <td>{man.category}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteServiceMan(man._id)}
                          className="btn bg-red-500 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No service men found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
