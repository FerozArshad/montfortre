import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../lib/utils";

type AppNavLinkProps = NavLinkProps & {
  activeClassName?: string;
};

export default function NavLink({
  className,
  activeClassName,
  ...props
}: AppNavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) => cn(className, isActive && activeClassName)}
    />
  );
}
