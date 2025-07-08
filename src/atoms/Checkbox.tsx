
import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps)=> {
  return (
    <input type="checkbox" className="accent-blue-600" {...props} />
  );
};
