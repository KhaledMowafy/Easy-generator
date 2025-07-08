import clsx from "clsx";

type AuthRightSectionProps = {
  children: React.ReactNode;
  variant?: "blue" | "green";
};

export const AuthRightSection = ({ children, variant="blue" }: AuthRightSectionProps) => {
  const base = "w-1/2 flex items-center justify-center overflow-hidden";

  const variants = {
    blue: "bg-blue-500",
    green: "bg-green-500"
  };
  return (
    <div className={clsx(base, variants[variant])}>
      {children}
    </div>
  );
};
