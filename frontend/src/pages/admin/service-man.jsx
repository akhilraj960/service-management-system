import React from "react";
import { Link } from "react-router-dom";

export const ServiceMan = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <Link to={"add"} className="btn btn-primary">
          Add Service Man
        </Link>
      </div>
    </div>
  );
};
