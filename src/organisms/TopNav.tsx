// components/organisms/TopNav.tsx

import { NavItem } from "../molecules/NavItem";

export const TopNav = () => {
  return (
    <nav className="hidden md:flex justify-center items-center space-x-4 text-sm bg-[#848FA3] list-none">
      <NavItem href="/partnerships" label="Partnership" className="text-white font-bold"/>
      <NavItem href="/about-us" label="About Us" className="text-white font-bold"/>
      <NavItem href="/careers" label="Careers" className="text-white font-bold"/>
    </nav>
  );
};
