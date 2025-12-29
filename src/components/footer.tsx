import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import Leaf from "@/assets/leaf.svg";
import { useState } from "react";
import { PhoneButton } from "./PhoneButton";

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden px-5 pt-9 pb-35 relative z-10">
        <div className="flex dark flex-col">
          {/* Logo */}
          <img
            src="/images/apparel-master-logo.png"
            alt="Apparel Master Logo"
            className="w-57.75 h-28.5 aspect-77/38 max-w-full"
          />
          {/* Divider */}
          <div className="h-px bg-black mt-10 mb-10" />
          {/* Collapsed menu */}
          <div className="space-y-0">
            <FooterMenuItem title="Work Rental" />
            <FooterMenuItem title="Other Products" />
            <FooterMenuItem title="Client Tools" />
            <FooterMenuItem title="About Us" />
          </div>
          <div className="h-px bg-black mt-10 mb-10" />
          {/* Find Us Section */}
          <div className="mb-10">
            <h3 className="text-black font-inter text-base font-semibold leading-6.5 mb-2">
              Find us
            </h3>
            <div className="text-black font-inter text-base font-normal leading-6.5 space-y-0">
              <div>Apparelmaster</div>
              <div>Street Address</div>
              <div>Town or City</div>
              <div>Post Code</div>
            </div>
          </div>
          {/* Submit an Enquiry heading */}
          <h3 className="text-black font-inter text-base font-semibold leading-6.5 mb-4">
            Submit an Enquiry
          </h3>
          {/* Click for 0800 button */}
          <PhoneButton variant="hero" className="w-fit mb-9" />
          {/* Social Icons */}
          <div className="flex items-center gap-9 mb-35">
            <a href="/facebook" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="36"
                viewBox="0 0 20 36"
                fill="none"
              >
                <path
                  d="M17.8187 19.9566L18.8058 13.5358H12.6253V9.36944C12.6253 7.61205 13.487 5.90074 16.257 5.90074H19.0667V0.43441C19.0667 0.43441 16.5178 0 14.078 0C8.98692 0 5.65892 3.07378 5.65892 8.64213V13.5358H0V19.9566H5.65892V35.4801C6.79467 35.6578 7.95682 35.75 9.14209 35.75C10.3274 35.75 11.4895 35.6578 12.6253 35.4801V19.9566H17.8187Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="/instagram" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M17.16 3.09211C21.7416 3.09211 22.2826 3.10826 24.091 3.19303C25.7622 3.26972 26.6705 3.54826 27.276 3.78238C28.0752 4.09321 28.6484 4.46459 29.2499 5.06605C29.8514 5.66752 30.2228 6.2367 30.5336 7.04C30.7677 7.6455 31.0462 8.55376 31.1229 10.225C31.2037 12.0334 31.2238 12.5783 31.2238 17.156C31.2238 21.7336 31.2077 22.2785 31.1229 24.087C31.0462 25.7582 30.7677 26.6664 30.5336 27.2719C30.2228 28.0712 29.8514 28.6444 29.2499 29.2459C28.6484 29.8473 28.0793 30.2187 27.276 30.5295C26.6705 30.7637 25.7622 31.0422 24.091 31.1189C22.2826 31.1996 21.7416 31.2198 17.16 31.2198C12.5784 31.2198 12.0374 31.2037 10.229 31.1189C8.5578 31.0422 7.64953 30.7637 7.04403 30.5295C6.24476 30.2187 5.67156 29.8473 5.07009 29.2459C4.46862 28.6444 4.09725 28.0752 3.78642 27.2719C3.55229 26.6664 3.27375 25.7582 3.19706 24.087C3.11632 22.2785 3.09614 21.7336 3.09614 17.156C3.09614 12.5783 3.11229 12.0334 3.19706 10.225C3.27375 8.55376 3.55229 7.6455 3.78642 7.04C4.09725 6.24073 4.46862 5.66752 5.07009 5.06605C5.67156 4.46459 6.24073 4.09321 7.04403 3.78238C7.64953 3.54826 8.5578 3.26972 10.229 3.19303C12.0374 3.11229 12.5824 3.09211 17.16 3.09211ZM17.16 0C12.5017 0 11.9163 0.0201836 10.0877 0.104954C8.26311 0.189725 7.01577 0.47633 5.92183 0.90422C4.79559 1.34422 3.83889 1.92954 2.88219 2.8822C1.92953 3.83486 1.34018 4.79156 0.904216 5.92183C0.480363 7.01174 0.189716 8.25908 0.104946 10.0877C0.0201751 11.9163 0 12.5017 0 17.16C0 21.8183 0.0201751 22.4037 0.104946 24.2323C0.189716 26.0569 0.476326 27.3042 0.904216 28.3982C1.34422 29.5244 1.92953 30.4811 2.88219 31.4378C3.83486 32.3905 4.79155 32.9798 5.92183 33.4158C7.01173 33.8396 8.25908 34.1303 10.0877 34.215C11.9163 34.2998 12.5017 34.32 17.16 34.32C21.8183 34.32 22.4037 34.2998 24.2323 34.215C26.0569 34.1303 27.3042 33.8437 28.3981 33.4158C29.5244 32.9758 30.4811 32.3905 31.4378 31.4378C32.3905 30.4851 32.9798 29.5284 33.4158 28.3982C33.8396 27.3083 34.1303 26.0609 34.215 24.2323C34.2998 22.4037 34.32 21.8183 34.32 17.16C34.32 12.5017 34.2998 11.9163 34.215 10.0877C34.1303 8.26312 33.8437 7.01578 33.4158 5.92183C32.9758 4.7956 32.3905 3.8389 31.4378 2.8822C30.4851 1.92954 29.5284 1.34018 28.3981 0.90422C27.3082 0.480367 26.0609 0.189725 24.2323 0.104954C22.4037 0.0201836 21.8183 0 17.16 0Z"
                  fill="black"
                />
                <path
                  d="M17.1604 9.35938C12.8528 9.35938 9.36035 12.8519 9.36035 17.1594C9.36035 21.4669 12.8528 24.9594 17.1604 24.9594C21.4679 24.9594 24.9604 21.4669 24.9604 17.1594C24.9604 12.8519 21.4679 9.35938 17.1604 9.35938ZM17.1604 22.2247C14.3649 22.2247 12.095 19.9584 12.095 17.1594C12.095 14.3604 14.3614 12.094 17.1604 12.094C19.9593 12.094 22.2257 14.3604 22.2257 17.1594C22.2257 19.9584 19.9593 22.2247 17.1604 22.2247Z"
                  fill="black"
                />
                <path
                  d="M26.52 9.35825C27.3815 9.35825 28.08 8.66026 28.08 7.79924C28.08 6.93823 27.3815 6.24023 26.52 6.24023C25.6584 6.24023 24.96 6.93823 24.96 7.79924C24.96 8.66026 25.6584 9.35825 26.52 9.35825Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="/youtube" aria-label="Youtube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="31"
                viewBox="0 0 39 31"
                fill="none"
              >
                <g clipPath="url(#clip0_2098_874)">
                  <path
                    d="M36.7612 5.86083C36.3036 4.17494 35.0834 2.89045 33.4818 2.40876C30.5836 1.60596 19.0674 1.60596 19.0674 1.60596C19.0674 1.60596 7.55111 1.60596 4.65297 2.40876C3.05137 2.89045 1.83111 4.17494 1.37351 5.86083C0.61084 8.9115 0.61084 15.2537 0.61084 15.2537C0.61084 15.2537 0.61084 21.5959 1.37351 24.6465C1.83111 26.3324 3.05137 27.6169 4.65297 28.0986C7.55111 28.9014 19.0674 28.9014 19.0674 28.9014C19.0674 28.9014 30.5836 28.9014 33.4818 28.0986C35.0834 27.6169 36.3036 26.3324 36.7612 24.6465C37.5239 21.5959 37.5239 15.2537 37.5239 15.2537C37.5239 15.2537 37.5239 8.9115 36.7612 5.86083ZM15.3303 21.0339V9.47347L24.9399 15.2537L15.3303 21.0339Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2098_874">
                    <rect width="38.1333" height="30.5067" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          {/* Footer text */}
          <p className="text-sm font-light text-center">
            © {new Date().getFullYear()} ApparelMaster. All rights reserved.
            Privacy Policy. Terms of Trade.
          </p>
        </div>

        {/* Leaf image centered at bottom */}
        <img
          src={Leaf}
          alt="Leaf"
          className="absolute bottom-0 left-0 translate-y-1/3 z-0"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block px-5 pt-9 lg:pl-25 lg:pr-6 lg:py-12 relative">
        <div className="flex justify-between min-h-88.5 relative z-10">
          <div className="flex flex-col dark justify-between gap-4">
            <img
              src="/images/apparel-master-logo.png"
              alt="Apparel Master Logo"
              className="aspect-69/34 max-h-34"
            />

            <PhoneButton variant="hero" className="w-fit" />
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-11.75 w-fit">
              <SubMenu
                title="Services"
                className="mr-21.75"
                items={SERVICES_MENU}
              />
              <SubMenu
                title="Find us"
                className="max-w-42.5"
                itemsClassName=""
                items={FIND_US_MENU}
              />
              <SubMenu title="Follow us" items={FOLLOW_US_MENU} />
            </div>
            <p className="text-sm font-light min-w-156.75">
              © {new Date().getFullYear()} ApparelMaster. All rights reserved.
              Privacy Policy. Terms of Trade.
            </p>
          </div>
        </div>

        <img
          src={Leaf}
          alt="Leaf"
          className="absolute bottom-0 right-21.25 z-0"
        />
      </div>
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

function FooterMenuItem({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-between cursor-pointer select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-black font-inter text-base font-semibold leading-10">
        {title}
      </h3>
      <div
        className={`transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
      >
        <PlusIcon />
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <rect x="10.2666" width="1.46667" height="22" fill="black" />
      <rect
        y="11.7334"
        width="1.46667"
        height="22"
        transform="rotate(-90 0 11.7334)"
        fill="black"
      />
    </svg>
  );
}
