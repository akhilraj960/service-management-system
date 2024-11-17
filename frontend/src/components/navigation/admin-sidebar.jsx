import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div className="h-full mt-4 flex flex-col gap-2">
      <Link to={'/admin/service-view'} className="btn btn-primary w-full">Service View</Link>
      <Link to={'/admin/service-man'} className="btn btn-primary w-full">Service Man</Link>
    </div>
  );
};
