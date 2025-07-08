import { TextField } from "./TextField";
import { FormFooter } from "./FormFooter";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const LoginForm = () => {
  return (
    <form className="space-y-2">
      <TextField placeholder="Business email" />
      <TextField placeholder="Password" type="password" showIcon />
      <FormFooter />
      <PrimaryButton type="submit">Log in</PrimaryButton>
    </form>
  );
};