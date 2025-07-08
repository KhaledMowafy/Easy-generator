// components/organisms/AuthRightSection.tsx

type AuthRightSectionProps = {
  children: React.ReactNode;
  color:string;
};

export const AuthRightSection = ({ children, color="blue" }: AuthRightSectionProps) => {
  return (
    <div className={`w-1/2 bg-gradient-to-b from-${color}-400 to-${color}-500 flex items-center justify-center overflow-hidden`}>
      {children}
    </div>
  );
};
