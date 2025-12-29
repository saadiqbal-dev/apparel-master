import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ClientTestimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-white md:pt-12 lg:pt-[159px] w-full pb-[37px] lg:pb-[134px]">
      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <ClientTestimonial
              name="Mike Fulcher"
              company="Mike's Chainsaws & Outdoor Power Ltd."
              testimonial="The service is always excellent and the quality of the laundry garments is consistently top-notch, reliable, and truly exceeds expectations every single time without fail or compromise."
              image="/images/testimonials/tractor.png"
            />
          </CarouselItem>
          <CarouselItem>
            <ClientTestimonial
              name="Damian Southorn"
              company="Refining NZ"
              title="Industrial Fire Brigade Chief"
              testimonial="Apparelmaster consistently ensures that our team is well-presented, providing high-quality uniforms that help us maintain a sharp, professional appearance at all times."
              image="/images/testimonials/fireman.jpg"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="hidden lg:flex justify-center items-center gap-6.5 pt-[57px]">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`size-2.5 rounded-full cursor-pointer ${current === index + 1 ? "bg-dot-active" : "bg-dot-inactive"}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}

interface ClientTestimonialProps {
  name: string;
  title?: string;
  company: string;
  testimonial: string;
  image: string;
}

function ClientTestimonial({
  name,
  title,
  company,
  testimonial,
  image,
}: ClientTestimonialProps) {
  return (
    <div className="flex items-center justify-center w-full mx-auto max-w-[100vw] overflow-hidden">
      <div className="flex flex-col px-10 lg:-mr-[250px] w-full max-w-full xl:-mr-[150px] 2xl:-mr-[55px] xl:px-[73px] pt-[52px] pb-[60px] xl:pb-[65px] z-10 rounded-[6px] bg-light-gray-alt  lg:max-w-[550px] 2xl:max-w-[720px] shrink-0">
        <QuoteIcon />
        <p className="text-black font-inter text-2xl leading-8 xl:text-[28px] xl:leading-9.5 pt-[18px] xl:pt-4.5 pb-[25px] xl:pb-6">
          {testimonial}
        </p>
        <div className="flex gap-5">
          <div className="w-1.5 h-self-stretch bg-brand" />
          <div className="text-black font-inter text-[15px] leading-5 xl:text-lg xl:leading-6 font-normal">
            <p className="font-semibold">{name}</p>
            {title && <p>{title}</p>}
            <p>{company}</p>
          </div>
        </div>
      </div>
      <img
        src={image}
        alt={name}
        className="hidden lg:block w-full h-auto lg:max-w-[650px] xl:max-w-[891px] aspect-891/673 object-cover rounded-[6px] shrink-0"
      />
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="48"
      height="33"
      viewBox="0 0 48 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.9 31.8856C41.5 31.8856 46.1 27.5414 46.1 22.2528C46.1 16.9642 41.7 12.7144 36.2 12.6199C36.7 9.03121 38 5.53694 39.9 2.42042C40.1 2.04266 40.1 1.57047 39.7 1.28715C39.4 1.00383 38.9 0.909387 38.5 1.09827C30.7 5.34806 25.7 13.1866 25.5 21.6861V22.2528C25.7 27.5414 30.3 31.8762 35.9 31.8762V31.8856Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M11.4 31.8856C17 31.8856 21.6 27.5414 21.6 22.2528C21.6 16.9642 17.2 12.7144 11.7 12.6199C12.2 9.03121 13.5 5.53694 15.4 2.42042C15.6 2.04266 15.6 1.57047 15.2 1.28715C14.9 1.00383 14.4 0.909387 14 1.09827C6.2 5.34806 1.2 13.196 1 21.6956V22.2622C1.2 27.5509 5.8 31.8856 11.4 31.8856Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
