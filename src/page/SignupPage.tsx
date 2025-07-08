// pages/SignUpPage.tsx

import { AuthLeftSection } from "../organisms/AuthLeftSection";
import { AuthRightSection } from "../organisms/AuthRightSection";
import { Testimonial } from "../molecules/Testimonial";
import { SignUpForm } from "../molecules/SignupForm";

export const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full">
      <AuthLeftSection
        title="Create your account"
        topRightSlot={
          <>
            <span className="text-gray-500">Already have an account? </span>
            <a href="/sign-in" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </>
        }
      >
        <SignUpForm />
      </AuthLeftSection>

      <AuthRightSection variant="green">
        <Testimonial />
      </AuthRightSection>
    </div>
  );
};
