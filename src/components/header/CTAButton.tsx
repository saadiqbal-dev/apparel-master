import { Link } from "@tanstack/react-router";

interface CTAButtonProps {
  to: string;
  label: string;
  isLight: boolean;
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ to, label, isLight, className = "", onClick }: CTAButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-center font-inter text-sm xl:text-base font-medium leading-8 px-4 xl:px-5 py-2 xl:py-2.5 rounded-[27px] transition-colors duration-300 whitespace-nowrap ${
        isLight
          ? "border border-black hover:bg-black hover:text-white text-black"
          : "border border-white hover:bg-white hover:text-black text-white"
      } ${className}`}
    >
      {label}
    </Link>
  );
}
