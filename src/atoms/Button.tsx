import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, variant = "solid", className, onClick }: ButtonProps) => {
  const base = "rounded-full px-6 py-2 font-medium text-sm cursor-pointer";
  const variants = {
    solid: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-gray-800 text-gray-800 hover:bg-gray-100"
  };

  return (
    <button className={clsx(base, variants[variant], className)} onClick={onClick}>
      {children}
    </button>
  );
};
