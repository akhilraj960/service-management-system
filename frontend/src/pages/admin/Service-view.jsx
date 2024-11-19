import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchServiceView = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/serviceview");
    return response.data;
  } catch (error) {
    console.error("Error fetching service view:", error);
    return []; // Return an empty array in case of error
  }
};

export const ServiceView = () => {
  const [serviceView, setServiceView] = useState([]);

  useEffect(() => {
    const loadService = async () => {
      const data = await fetchServiceView();
      setServiceView(data.data);
    };
    loadService();
  }, []);

  return (
    <div className="text-white">
      <div className="w-full">
        <div className="w-full flex justify-end">
          <Link to={"add"} className="btn btn-primary">
            New Service
          </Link>
        </div>
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra border shadow">
              <thead>
                <tr className="text-lg">
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {serviceView.length > 0 ? (
                  serviceView.map((service, index) => (
                    <tr key={service._id || index}>
                      <td>{index + 1}</td>
                      <td>{service.name}</td>
                      <td>{service.category}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      No services available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
