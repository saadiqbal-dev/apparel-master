import { Button } from "../ui/button";

export default function ProfessionalWorkwear() {
  return (
    <div className="px-5 pb-15 pt-10 xl:px-0 xl:pl-55 xl:pr-25 xl:pb-28.5 gap-10 xl:gap-23.5 flex flex-col-reverse xl:flex-row items-center justify-center">
      <img
        src="/images/hero.png"
        alt="Professional Workwear"
        className="w-88.25 h-64 xl:max-w-215 xl:min-w-0 xl:h-auto xl:aspect-860/626 object-cover rounded-2xl xl:flex-1 xl:basis-0"
      />
      <div className="flex items-start justify-center dark flex-col max-w-161.75 min-w-0 xl:flex-1 xl:basis-0">
        <div className="w-[54.869px] xl:w-25 h-1 xl:h-1.5 bg-brand mb-5.5 xl:mb-9" />
        <h2 className="max-w-132.75 text-black font-inter text-[28px] leading-8.5 xl:text-[48px] xl:leading-normal mb-8 xl:mb-12.5">
          Professional Workwear, Made Easy.
        </h2>
        <p className="font-inter text-lg leading-6.5 xl:text-xl xl:leading-normal text-black font-normal xl:font-medium mb-10 xl:mb-15">
          Start saving your business time and money with Apparelmaster&rsquo;s
          fully managed solutions for staff uniforms, protective clothing,
          overalls, mats, towelling and more. We take the expense and hassle out
          of staff workwear and laundering, so you and your team can focus on
          what you do best.
        </p>
        <Button variant={"hero"} size="hero" className="hidden xl:block">
          Learn More About Rental Solutions
        </Button>
      </div>
    </div>
  );
}
