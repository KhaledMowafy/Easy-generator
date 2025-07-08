// components/molecules/TextField.tsx

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

type TextFieldProps = {
  label?: string;
  type?: string;
  placeholder: string;
  showIcon?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  showError?: boolean;
  errorMessage?: string;
};

export const TextField = ({
  label,
  type = "text",
  placeholder,
  showIcon = false,
  name,
  onChange,
  showError = false,
  errorMessage,
}: TextFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const inputType =
    showIcon && type === "password" ? (isVisible ? "text" : "password") : type;

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="relative mb-1">
      {label && <Label>{label}</Label>}
      <Input
        type={inputType}
        placeholder={placeholder}
        className={`pr-10 ${showError ? "border-red-500" : ""}`}
        name={name}
        onChange={onChange}
      />
      {showIcon && type === "password" && (
        <div
          className="absolute right-2 top-2.5 cursor-pointer text-gray-400"
          onClick={toggleVisibility}
        >
          {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </div>
      )}
      {showError && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
