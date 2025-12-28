import { Button } from "../ui/button";

export default function ProfessionalWorkwear() {
  return (
    <div className="pl-55 pr-25 pb-28.5 gap-23.5 flex items-center justify-center">
      <img
        src="/images/hero.png"
        alt="Professional Workwear"
        className="max-w-215 min-w-0 h-auto aspect-860/626 object-cover rounded-2xl flex-1 basis-0"
      />
      <div className="flex items-start justify-center dark flex-col max-w-161.75 min-w-0 flex-1 basis-0">
        <div className="w-25 h-1.5 bg-[#E9510E] mb-9" />
        <h2 className="max-w-[531px] text-black font-inter text-[48px] mb-12.5">
          Professional Workwear, Made Easy.
        </h2>
        <p className="font-inter text-xl text-black font-medium mb-15">
          Start saving your business time and money with Apparelmaster&rsquo;s
          fully managed solutions for staff uniforms, protective clothing,
          overalls, mats, towelling and more. We take the expense and hassle out
          of staff workwear and laundering, so you and your team can focus on
          what you do best.
        </p>
        <Button variant={"hero"} size="hero">
          Learn More About Rental Solutions
        </Button>
      </div>
    </div>
  );
}
