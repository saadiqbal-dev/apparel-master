import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import {
  rentalSolutions,
  type RentalSolution,
} from "@/data/home/rental-solutions";
import { useState } from "react";

export default function RentalSolutions() {
  return (
    <div className="bg-light-gray pt-10 md:py-31.5 pb-8.5 md:pb-22.5">
      <div className="px-5 max-w-438 mx-auto space-y-11 md:space-y-36">
        <h2 className="text-center font-inter mx-auto text-heading max-w-[320px] md:max-w-none text-[28px] leading-8.5 md:text-[44px] font-medium">
          Our Workwear and Workplace Rental Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 md:gap-12.5">
          {rentalSolutions.map((solution) => (
            <RentalSolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RentalSolutionCard({ solution }: { solution: RentalSolution }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-full rounded-xl md:rounded-2xl bg-white overflow-hidden relative group cursor-pointer md:cursor-default"
      aria-label={`Learn more about ${solution.title}`}
      onClick={handleClick}
    >
      <img
        src={solution.image}
        alt={solution.title}
        className="w-full h-auto aspect-353/196 md:aspect-540/300 object-cover rounded-t-xl md:rounded-t-2xl"
      />
      <div className="py-5 px-5.5 md:py-7 md:px-10 flex items-center justify-between pointer-events-none">
        <h3 className="text-black font-inter md:text-xl font-semibold leading-8.5">
          {solution.title}
        </h3>
      </div>

      <div
        className={`absolute right-5.5 md:right-10 bottom-7.5 md:bottom-8.5 transform transition-transform duration-300 z-10 pointer-events-none ${isOpen ? "rotate-45" : ""} md:rotate-0 md:group-hover:rotate-45`}
      >
        <PlusIcon className="size-3.5 md:size-auto" />
      </div>

      {/* Sliding White Sheet */}
      <div
        className={`absolute inset-0 bg-white transition-transform duration-500 ease-in-out flex flex-col px-5.5 md:px-10.5 pt-5 md:pt-7.5 pb-8 md:pb-[52px] z-0 ${isOpen ? "translate-y-0" : "translate-y-full"} md:translate-y-full md:group-hover:translate-y-0`}
      >
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-black font-inter text-lg md:text-xl font-semibold leading-7 md:leading-8.5">
            {solution.title}
          </h3>
          <p className="text-black font-inter text-sm md:text-base leading-relaxed">
            {solution.description}
          </p>
        </div>
        <Link
          to={solution.href}
          className="mt-auto w-fit dark"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant={"hero"}
            size="hero"
            className="w-fit px-4 py-1.5 text-xs md:px-5 md:py-2 md:text-sm"
          >
            Find out more
          </Button>
        </Link>
      </div>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
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
