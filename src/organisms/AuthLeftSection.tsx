// components/organisms/AuthLeftSection.tsx

import Logo from "../assets/Logo.png";
type AuthLeftSectionProps = {
    title?: string;
    children: React.ReactNode;
    topRightSlot?: React.ReactNode;
    bottomInfo?: React.ReactNode;
};

export const AuthLeftSection = ({
    title = "Welcome",
    children,
    topRightSlot,
    bottomInfo,
}: AuthLeftSectionProps) => {
    return (
        <div className="w-1/2 flex flex-col justify-center px-20 relative bg-white">
            {/* Logo */}
            <div className="absolute top-8 left-8">
                <a href="/">
                    <img src={Logo} alt="Logo" className="h-10 object-cover" />
                </a>
            </div>

            {/* Optional top-right content */}
            {topRightSlot && (
                <div className="absolute top-8 right-8 text-sm">
                    {topRightSlot}
                </div>
            )}

            {/* Main form content */}
            <div className="max-w-md w-full">
                <h1 className="text-2xl font-semibold mb-6">{title}</h1>
                {children}
                {bottomInfo && <div className="mt-6">{bottomInfo}</div>}
            </div>
        </div>
    );
};
