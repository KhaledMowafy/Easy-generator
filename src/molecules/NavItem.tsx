import { NavLink } from "../atoms/NavLink";

type NavItemProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  className?: string;
};

export const NavItem = ({ href, label, isExternal = false, className }: NavItemProps) => {
  return (
    <li>
      <NavLink href={href} label={label} isExternal={isExternal} className={className} />
    </li>
  );
};
