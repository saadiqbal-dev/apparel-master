import { createFileRoute } from "@tanstack/react-router";
import CTA from "@/components/home/cta";
import KiwiHeritage from "@/components/home/KiwiHeritage";
import Hero from "@/components/home/Hero";
import ProfessionalWorkwear from "@/components/home/professional-workwear";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Scrollable content that reveals on scroll */}
      <div className="relative z-20">
        <img src="/curve-desktop.svg" alt="" className="w-full block" />
        <div className="bg-white min-h-screen">
          <ProfessionalWorkwear />
          <KiwiHeritage />
          <CTA />
        </div>
      </div>
    </div>
  );
}
