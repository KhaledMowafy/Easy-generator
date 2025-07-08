// pages/SignInPage.tsx

import { AuthLeftSection } from "../organisms/AuthLeftSection";
import { AuthRightSection } from "../organisms/AuthRightSection";
import { LoginForm } from "../molecules/LoginForm";
import { Testimonial } from "../molecules/Testimonial";
import { useNavigate } from "react-router-dom";
export const SignInPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen w-full">
      <AuthLeftSection
        title="Welcome back"
        topRightSlot={
          <>
            <span className="text-gray-500">Don’t have an account? </span>
            <button className="border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer" onClick={()=>navigate('/sign-up')}>
              Sign up
            </button>
          </>
        }
        bottomInfo={
          <>
            <p className="text-xs text-blue-500">
              <a href="#">End User License Agreement (EULA)</a>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Easygenerator stores your data in the European Union
            </p>
          </>
        }
      >
        <LoginForm />
      </AuthLeftSection>

      <AuthRightSection variant="blue">
        <Testimonial />
      </AuthRightSection>
    </div>
  );
};
