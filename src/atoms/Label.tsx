import React from "react";

type LabelProps = {
  children: React.ReactNode;
};

export const Label = ({ children }: LabelProps) => {
  return <label className="text-sm text-gray-600">{children}</label>;
};
