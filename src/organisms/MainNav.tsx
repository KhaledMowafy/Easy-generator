
import { NavItem } from "../molecules/NavItem";

export const MainNav = () => {
  return (
    <nav>
      <ul className="flex space-x-6 items-center">
        <NavItem href="/use-cases" label="Use Cases" />
        <NavItem href="/features" label="Features" />
        <NavItem href="/pricing" label="Pricing" />
        <NavItem href="/resources" label="Resources" />
      </ul>
    </nav>
  );
};
