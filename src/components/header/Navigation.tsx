import { routes } from "./constants";
import { NavLink } from "./NavLink";
import { NavButton } from "./NavButton";
import { CTAButton } from "./CTAButton";

interface NavigationProps {
  isLight: boolean;
  activeMegaMenu: string | null;
  onMegaMenuToggle: (href: string) => void;
  onCloseMegaMenu: () => void;
}

export function Navigation({
  isLight,
  activeMegaMenu,
  onMegaMenuToggle,
  onCloseMegaMenu,
}: NavigationProps) {
  return (
    <nav className="flex flex-col xl:flex-row items-center gap-2 xl:gap-0 w-full xl:w-auto">
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 xl:gap-16.25">
        {routes.map((route) => (
          <li key={route.href}>
            {route.hasMegaMenu ? (
              <NavButton
                label={route.label}
                isLight={isLight}
                isActive={activeMegaMenu === route.href}
                onClick={() => onMegaMenuToggle(route.href)}
              />
            ) : (
              <NavLink
                href={route.href}
                label={route.label}
                isLight={isLight}
                onClick={onCloseMegaMenu}
              />
            )}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-2 xl:ml-14.5">
        <CTAButton
          to="/get-a-quote"
          label="Get a Quote"
          isLight={isLight}
          onClick={onCloseMegaMenu}
        />

        <CTAButton
          to="/contact"
          label="Click for 0800 Number"
          isLight={isLight}
          className="xl:ml-17.5"
          onClick={onCloseMegaMenu}
        />
      </div>
    </nav>
  );
}
