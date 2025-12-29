import { useState } from "react";
import { Button } from "./ui/button";

interface PhoneButtonProps {
  isLight?: boolean;
  className?: string;
  variant?: "cta" | "hero";
}

export function PhoneButton({
  isLight = false,
  className = "",
  variant = "cta"
}: PhoneButtonProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  // For hero variant (used in footer)
  if (variant === "hero") {
    if (isRevealed) {
      return (
        <a
          href="tel:0800808820"
          className={`inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap transition-all border border-white text-white bg-transparent hover:bg-white hover:text-black dark:border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white rounded-[27px] text-base font-medium leading-8 px-8 py-2 ${className}`}
        >
          0800 808 820
        </a>
      );
    }

    return (
      <Button
        variant="hero"
        size="hero"
        onClick={() => setIsRevealed(true)}
        className={className}
      >
        Click for 0800 Number
      </Button>
    );
  }

  // For CTA variant (used in header - matches CTAButton styling)
  if (isRevealed) {
    return (
      <a
        href="tel:0800808820"
        className={`text-center font-inter text-sm xl:text-base font-medium leading-8 px-4 xl:px-5 py-2 xl:py-2.5 rounded-[27px] transition-colors duration-300 whitespace-nowrap ${
          isLight
            ? "border border-black hover:bg-black hover:text-white text-black"
            : "border border-white hover:bg-white hover:text-black text-white"
        } ${className}`}
      >
        0800 808 820
      </a>
    );
  }

  return (
    <button
      onClick={() => setIsRevealed(true)}
      className={`text-center font-inter text-sm xl:text-base font-medium leading-8 px-4 xl:px-5 py-2 xl:py-2.5 rounded-[27px] transition-colors duration-300 whitespace-nowrap ${
        isLight
          ? "border border-black hover:bg-black hover:text-white text-black"
          : "border border-white hover:bg-white hover:text-black text-white"
      } ${className}`}
    >
      Click for 0800 Number
    </button>
  );
}
