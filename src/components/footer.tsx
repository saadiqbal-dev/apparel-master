import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Leaf from "@/assets/leaf.svg";

export default function Footer() {
  return (
    <footer className="bg-white pl-[100px] pr-6 py-[48px] relative">
      <div className="flex justify-between min-h-[354px] relative z-10">
        <div className="flex flex-col dark justify-between gap-4">
          <img
            src="/images/apparel-master-logo.png"
            alt="Apparel Master Logo"
            className="aspect-69/34 max-h-[136px]"
          />

          <Button variant="hero" size="hero" className="w-fit">
            Click for 0800 number
          </Button>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-[47px] w-fit">
            <SubMenu
              title="Services"
              className="mr-21.75"
              items={SERVICES_MENU}
            />
            <SubMenu
              title="Find us"
              className="max-w-[170px]"
              itemsClassName=""
              items={FIND_US_MENU}
            />
            <SubMenu title="Follow us" items={FOLLOW_US_MENU} />
          </div>
          <p className="text-sm font-light min-w-[627px]">
            © {new Date().getFullYear()} ApparelMaster. All rights reserved.
            Privacy Policy. Terms of Trade.
          </p>
        </div>
      </div>

      <img
        src={Leaf}
        alt="Leaf"
        className="absolute bottom-0 right-[85px] z-0"
      />
    </footer>
  );
}

function SubMenu({
  title,
  items,
  className,
  itemsClassName,
}: {
  title: string;
  items: { label: string | string[]; href: string }[];
  className?: string;
  itemsClassName?: string;
}) {
  return (
    <div className={cn("space-y-6", className)}>
      {title && <h3 className="font-bold">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href} className={itemsClassName}>
            {Array.isArray(item.label) ? (
              <div className="font-light space-y-2">
                {item.label.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            ) : (
              <Link
                to={item.href}
                className="hover:text-brand font-light transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const SERVICES_MENU = [
  {
    label: "Workwear",
    href: "/workwear",
  },
  {
    label: "Workplace",
    href: "/workplace",
  },
  {
    label: "Food Industry",
    href: "/food-industry",
  },
  {
    label: "Hospitality",
    href: "/hospitality",
  },
  {
    label: "PPE",
    href: "/ppe",
  },
];

const FIND_US_MENU = [
  {
    label: [
      "Apparelmaster",
      "Diamond Dry Cleaners",
      "8 Miller Street,",
      "Dannevirke 4930",
      "(Example only)",
    ],
    href: "/apparelmaster",
  },
];

const FOLLOW_US_MENU = [
  {
    label: "Facebook",
    href: "/facebook",
  },
  {
    label: "Instagram",
    href: "/instagram",
  },
  {
    label: "Youtube",
    href: "/youtube",
  },
];
