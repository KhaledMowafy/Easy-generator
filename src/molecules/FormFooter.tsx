
import { Checkbox } from "../atoms/Checkbox";

export const FormFooter = () => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
      <label className="flex items-center gap-2">
        <Checkbox />
        Keep me logged in
      </label>
      <a href="#" className="hover:underline">Forgot password?</a>
    </div>
  );
};
