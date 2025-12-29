import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="flex items-center justify-center flex-col pt-[76px] px-6.5 md:mx-0 md:pt-40 pb-[92px] md:pb-41.5 gap-[60px] md:gap-16.5 bg-brand">
      <h2 className="text-center font-inter text-white text-[28px] leading-8.5 md:text-[36px]">
        Speak to the <strong>New Zealand</strong> managed workwear experts
        today.
      </h2>
      <Button
        variant="hero"
        className="hover:text-brand-hover text-lg font-normal py-2 px-6"
        size="hero"
      >
        Make an Enquiry
      </Button>
    </div>
  );
}
