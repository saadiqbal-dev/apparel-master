import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

const companies = [
  {
    name: "AA Motoring",
    logo: "/images/logos/aa-motoring.jpg",
  },
  {
    name: "ANZCO Foods",
    logo: "/images/logos/anzco.png",
  },
  {
    name: "Mitsubishi",
    logo: "/images/logos/mitsubishi.svg",
  },
  {
    name: "Radio New Zealand",
    logo: "/images/logos/rnz.png",
  },
  {
    name: "Toyota",
    logo: "/images/logos/toyota.svg",
  },
];

export default function Companies() {
  return (
    <div>
      <h2 className="text-center font-inter mx-auto text-heading leading-8.5 max-w-88.25 md:max-w-none text-[28px] md:text-[44px] font-medium pb-15 md:pb-33.5">
        Companies we proudly work with
      </h2>
      <Marquee className="mb-20 md:mb-39.25">
        <MarqueeContent>
          {companies.map((company, index) => (
            <MarqueeItem
              className="h-[63.92px] lg:h-[104.716px] mx-[53.5px] lg:mx-[90.5px] w-auto"
              key={index}
            >
              <img
                alt={company.name}
                className="h-full w-auto object-contain"
                src={company.logo}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
