import React from "react";

const Card = ({ title, className, children }) => {
  return (
    <div className={`${className}  bg-white shadow-lg  h-64 rounded-lg  py-3`}>
      <p className="ml-20 font-bold text-lg text-primary">{title}</p>
      {children}
    </div>
  );
};

export default Card;
