import { Link } from "react-router-dom";

type NavLinkProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  className?: string;
};

export const NavLink = ({
  href,
  label,
  isExternal = false,
  className,
}: NavLinkProps) => {
  const baseStyle = "text-sm text-gray-800 hover:text-orange-500 transition-colors";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={[baseStyle, className].join(" ")}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={[baseStyle, className].join(" ")}>
      {label}
    </Link>
  );
};
