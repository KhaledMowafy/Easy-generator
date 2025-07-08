// components/molecules/SignUpForm.tsx

import { useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { TextField } from "./TextField";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(form.password)) {
      newErrors.password = "Password must be at least 8 characters, include a letter, number, and special character.";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      // call API here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <TextField
          placeholder="Name"
          label="Name"
          type="text"
          showError={!!errors.name}
          errorMessage={errors.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Email"
          label="Email"
          type="email"
          showError={!!errors.email}
          errorMessage={errors.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Password"
          label="Password"
          type="password"
          showIcon
          showError={!!errors.password}
          errorMessage={errors.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Confirm Password"
          label="Confirm Password"
          type="password"
          showIcon
          showError={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
      </div>
      <PrimaryButton type="submit">Create Account</PrimaryButton>
    </form>
  );
};
