import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useHeaderScroll } from "./useHeaderScroll";
import { Navigation } from "./Navigation";
import { MegaMenu } from "./MegaMenu";

export function Header() {
  const isScrolled = useHeaderScroll();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const isLight = isScrolled || !!activeMegaMenu;

  const handleMegaMenuToggle = (href: string) => {
    setActiveMegaMenu(activeMegaMenu === href ? null : href);
  };

  const handleCloseMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-auto xl:h-41.25">
      {/* Gradient background layer */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          background:
            "linear-gradient(180deg, rgba(12, 11, 11, 0.40) 0%, rgba(114, 112, 112, 0.00) 100%)",
          opacity: isLight ? 0 : 1,
        }}
      />

      {/* White background layer */}
      <div
        className="absolute inset-0 bg-white transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isLight ? 1 : 0,
        }}
      />

      <div className="relative flex items-center justify-between max-w-438 px-4 mx-auto h-full py-2 xl:py-0 gap-2 xl:gap-0">
        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={handleCloseMegaMenu}>
          <img
            src="/images/apparel-master-logo.png"
            alt="Apparel Master Logo"
            className="w-40 h-auto sm:w-48 xl:w-60.5 xl:h-[119.67px] xl:aspect-[242.00/119.67]"
          />
        </Link>

        <Navigation
          isLight={isLight}
          activeMegaMenu={activeMegaMenu}
          onMegaMenuToggle={handleMegaMenuToggle}
          onCloseMegaMenu={handleCloseMegaMenu}
        />
      </div>

      {/* Mega Menu */}
      {activeMegaMenu && (
        <MegaMenu activeMenu={activeMegaMenu} onClose={handleCloseMegaMenu} />
      )}
    </header>
  );
}
