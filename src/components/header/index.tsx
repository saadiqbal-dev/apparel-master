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
    <header className="fixed top-0 left-0 right-0 z-50 h-[90px] xl:h-41.25">
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

      <div className="relative flex items-center justify-between max-w-438 mx-auto h-full py-[11px] ps-[28px] pe-[43px] xl:py-0 xl:px-4 gap-2 xl:gap-0">
        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={handleCloseMegaMenu}>
          <img
            src="/images/apparel-master-logo.png"
            alt="Apparel Master Logo"
            className="w-[137px] h-[68px] aspect-137/68 xl:w-60.5 xl:h-[119.67px] xl:aspect-[242.00/119.67]"
          />
        </Link>

        {/* Mobile Menu Icon */}
        <button className="xl:hidden" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
          >
            <line
              x1="0.75"
              y1="0.75"
              x2="20.25"
              y2="0.75"
              stroke={isLight ? "#292929" : "#fff"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="0.75"
              y1="15.0071"
              x2="20.25"
              y2="15.0071"
              stroke={isLight ? "#292929" : "#fff"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="0.75"
              y1="7.87853"
              x2="20.25"
              y2="7.87853"
              stroke={isLight ? "#292929" : "#fff"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:block">
          <Navigation
            isLight={isLight}
            activeMegaMenu={activeMegaMenu}
            onMegaMenuToggle={handleMegaMenuToggle}
            onCloseMegaMenu={handleCloseMegaMenu}
          />
        </div>
      </div>

      {/* Mega Menu */}
      {activeMegaMenu && (
        <MegaMenu activeMenu={activeMegaMenu} onClose={handleCloseMegaMenu} />
      )}
    </header>
  );
}
