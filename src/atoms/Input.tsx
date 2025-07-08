
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps)=> {
  return (
    <input
      className={`w-full border-b border-gray-300 outline-none py-2 ${className}`}
      {...props}
    />
  );
};
