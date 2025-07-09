
import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?:boolean;
};

export const PrimaryButton = ({ children, type = "button", disabled=false }: PrimaryButtonProps)=> {
  return (
    <button
      type={type}
      disabled={disabled}
      className="cursor-pointer flex justify-center items-center w-full py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full text-white font-semibold hover:opacity-90"
    >
      {children}
    </button>
  );
};
