import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICES_MENU, ABOUT_MENU } from "./megaMenuData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      // Simple scroll lock - just prevent body scrolling
      // Don't use position:fixed as it causes scroll issues on trackpads
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scrolling when menu closes
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 xl:hidden overflow-y-auto transition-all duration-300 ease-in-out origin-top ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-5 pt-[11px] pb-10">
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between mb-13.5">
          <Link to="/" onClick={onClose}>
            <img
              src="/images/apparel-master-logo.png"
              alt="Apparel Master Logo"
              className="w-[137px] h-[68px] aspect-137/68 ms-2"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="mr-[21.5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#DCD9D9] mb-2" />

        {/* Menu Items */}
        <div className="space-y-0">
          <MobileMenuItem
            title="WORKWEAR"
            items={SERVICES_MENU.workwear}
            onClose={onClose}
          />
          <MobileMenuItem
            title="WORKPLACE"
            items={SERVICES_MENU.workplace}
            onClose={onClose}
          />
          <MobileMenuItem
            title="FOOD INDUSTRY"
            items={SERVICES_MENU.foodIndustry}
            onClose={onClose}
          />
          <MobileMenuItem
            title="HOSPITALITY"
            items={SERVICES_MENU.hospitality}
            onClose={onClose}
          />
          <MobileMenuItem
            title="PPE"
            items={SERVICES_MENU.ppe}
            onClose={onClose}
          />
          <MobileMenuItem
            title="ABOUT US"
            items={ABOUT_MENU.aboutUs}
            onClose={onClose}
          />
          <MobileMenuItem
            title="CONTACT US"
            items={[{ label: "Contact us", href: "/contact" }]}
            onClose={onClose}
          />
          <MobileMenuItem
            title="CLIENT TOOLS"
            items={ABOUT_MENU.clientTools}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-black font-inter text-lg font-semibold leading-12.5">
          {title}
        </h3>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronIcon />
        </div>
      </button>

      {/* Submenu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-0">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={onClose}
                className="text-black font-inter text-base font-normal leading-9 block hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.466 0L6.67583 6.14436L0.8612 0L0 0.914842L6.66361 7.99351L13.3333 0.914842L12.4721 0H12.466Z"
        fill="black"
      />
    </svg>
  );
}
