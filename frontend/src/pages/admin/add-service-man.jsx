import React from "react";
import { AddServiceManForm } from "../../components/forms/add-service-man-form";

export const AddServiceMan = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center">
      <h2 className="text-2xl font-semibold">Add Service Man</h2>
      <AddServiceManForm />
    </div>
  );
};
