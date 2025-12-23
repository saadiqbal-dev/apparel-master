import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICES_MENU, ABOUT_MENU, CTA_CARDS } from "./megaMenuData";

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

export function MegaMenu({ activeMenu, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Don't close if clicking on navigation buttons
      if (target.closest("nav") || target.closest("button")) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (activeMenu) {
      // Use a slight delay to prevent immediate closing on the same click that opened the menu
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [activeMenu, onClose]);

  const renderServicesMenu = () => (
    <div key="services" className="grid grid-cols-5 gap-32.5">
      <SubMenu
        title="WORKWEAR"
        items={SERVICES_MENU.workwear}
        onClose={onClose}
      />
      <SubMenu
        title="WORKPLACE"
        items={SERVICES_MENU.workplace}
        onClose={onClose}
      />
      <SubMenu
        title="FOOD INDUSTRY"
        items={SERVICES_MENU.foodIndustry}
        onClose={onClose}
      />
      <SubMenu
        title="HOSPITALITY"
        items={SERVICES_MENU.hospitality}
        onClose={onClose}
      />
      <SubMenu title="PPE" items={SERVICES_MENU.ppe} onClose={onClose} />
    </div>
  );

  const renderAboutMenu = () => (
    <div key="about" className="grid grid-cols-5 gap-32.5">
      <div role="presentation" />
      <div role="presentation" />
      <div role="presentation" />
      <SubMenu title="ABOUT US" items={ABOUT_MENU.aboutUs} onClose={onClose} />
      <SubMenu
        title="CLIENT TOOLS"
        items={ABOUT_MENU.clientTools}
        onClose={onClose}
      />
    </div>
  );

  if (!activeMenu) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-label="Mega menu"
      className="absolute top-full left-0 w-screen bg-[#F5F4F4] animate-in fade-in slide-in-from-top-2 duration-300"
    >
      <div className="max-w-438 px-4 pt-12 pb-12.5 mx-auto">
        {activeMenu === "/services" && renderServicesMenu()}
        {activeMenu === "/about" && renderAboutMenu()}
        <div className="grid grid-cols-2 mt-11.25 gap-12.5">
          {CTA_CARDS.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              onClick={onClose}
              className={`h-23.25 rounded-[3px] text-white flex items-center justify-between px-6.25 py-6 transition-opacity hover:opacity-90 ${card.bgColor}`}
            >
              <p className="text-xl">{card.title}</p>
              <div className="size-11.25 flex bg-white rounded-full items-center justify-center">
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubMenu({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <div className="space-y-6">
      {title && <h3 className="text-lg font-semibold uppercase">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              onClick={onClose}
              className="text-xl hover:text-[#E9510E] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
    >
      <path
        d="M11.0449 12.8611L10.6689 12.4968L10.4746 12.3093L10.6768 12.1296L16.2461 7.18921L0.25 7.18921L0.25 6.17358L16.2461 6.17358L10.6768 1.23315L10.4746 1.05347L10.6689 0.865966L11.0449 0.501708L11.2119 0.340575L11.3848 0.493896L18.166 6.50952L18.377 6.69702L18.165 6.88354L11.3848 12.8689L11.2109 13.0222L11.0449 12.8611Z"
        fill="black"
        stroke="black"
        strokeWidth="0.5"
      />
    </svg>
  );
}
