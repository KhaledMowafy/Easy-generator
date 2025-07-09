import { useState } from "react";
import { TextField } from "./TextField";
import { FormFooter } from "./FormFooter";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

type LoginState = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginState>({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", JSON.stringify(data.access_token));
      navigate("/");
      setLoading(false)
      // Optionally redirect or store token
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextField
        placeholder="Business email"
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <TextField
        placeholder="Password"
        label="Password"
        type="password"
        name="password"
        showIcon
        onChange={handleChange}
      />
      <FormFooter />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <PrimaryButton type="submit" disabled={loading}>
        {loading ? (
          <Loader className="w-6 h-6 animate-spin text-green-500" />
        ) : (
          "Log in"
        )}
      </PrimaryButton>
    </form>
  );
};
