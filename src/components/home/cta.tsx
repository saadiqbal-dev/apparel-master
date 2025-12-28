import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="flex dark items-center justify-center flex-col pt-40 pb-41.5 gap-16.5 bg-[#E9510E]">
      <h2 className="text-center font-inter text-white text-[36px]">
        Speak to the <strong>New Zealand</strong> managed workwear experts
        today.
      </h2>
      <Button
        variant="hero"
        className="border-0 dark:text-[#D35D2B] text-lg font-normal py-2 px-6"
        size="hero"
      >
        Make an Enquiry
      </Button>
    </div>
  );
}
