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

  useEffect(() => {
    const loadServiceMen = async () => {
      const data = await fetchServiceMan();
      setServiceMen(data);
    };
    loadServiceMen();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <Link to={"add"} className="btn btn-primary">
          Add Service Man
        </Link>
      </div>
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
              </tr>
            </thead>
            <tbody>
              {serviceMen.length > 0 ? (
                serviceMen.map((man, index) => (
                  <tr key={man.id || index}>
                    <th>{index + 1}</th>
                    <td>{man.name}</td>
                    <td>{man.email}</td>
                    <td>{man.phone}</td>
                    <td>{man.age}</td>
                    <td>{man.gender}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No service men found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
