import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="flex items-center justify-center flex-col pt-40 pb-41.5 gap-16.5 bg-brand">
      <h2 className="text-center font-inter text-white text-[36px]">
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
