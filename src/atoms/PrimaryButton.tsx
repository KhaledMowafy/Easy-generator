
import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

export const PrimaryButton = ({ children, type = "button" }: PrimaryButtonProps)=> {
  return (
    <button
      type={type}
      className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full text-white font-semibold hover:opacity-90"
    >
      {children}
    </button>
  );
};
