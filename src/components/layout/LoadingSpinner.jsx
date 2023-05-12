import React from "react";
import loader from "../../assets/loader.gif";

const LoadingSpinner = () => {
  return (
    <div className="w-100 mt-15">
      <img src={loader} width="120" className="text-center mx-auto" alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;
