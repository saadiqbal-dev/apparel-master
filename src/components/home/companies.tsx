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
      <h2 className="text-center font-inter text-[#1A1A1A] text-[44px] font-medium pb-[134px]">
        Companies we proudly work with
      </h2>
      <Marquee className="mb-[157px]">
        <MarqueeContent>
          {companies.map((company, index) => (
            <MarqueeItem
              className="h-[104.716px] mx-[90.5px] w-auto"
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
