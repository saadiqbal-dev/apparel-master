import HeroTemplate from "@/components/hero-template";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/workplace/floor-mats/")({
  component: RouteComponent,
});

const TemplateContent = [
  {
    section: 1,
    image: "/images/product-template-1.png",
    text1:
      "Apparelmaster are the masters of work place floor mats serving customers in the Auckland Region.",
  },
  {
    section: 2,
    image: "/images/product-template-2.png",
    text1:
      "Never underestimate the humble floor mat. Floor mats not only say a lot about a company's attention to detail, they also say a lot about general cleanliness and a commitment to hygiene, and in places safety. Pryors Apparelmaster know this and have complimented their successful 1-solution workwear rental and cleaning model, to include workplace mats.",
    text2:
      "Pryors Apparelmaster has a mat for all environments and work zones. We rent and commercially clean all manner of floor mats, removing soiled mats and replacing them with fresh ones.",
  },
  {
    section: 3,
    image: "/images/product-template-3.png",
    text1:
      "Clearly being durable is a must, and in many situations comfort and safety is paramount also. To ensure longevity, Pryors Apparelmaster ensures all their mats are of the highest quality and are ideal for food preparation, workshops, hospitality, wet areas, ramps and entranceways. Their extensive range of colours, sizes, styles and materials include safety mats, rubber floor mats, door mats including non slip mats and entrance or welcome mats. ",
    text2:
      "Professional companies that are image and safety conscious turn to Pryors Apparelmaster - when it comes to floor mats we've got you covered.",
    buttonText: "Submit an enuqiry",
  },
];

function RouteComponent() {
  return (
    <>
      <HeroTemplate
        backgroundImage="/images/product-template-hero.png"
        title="Floor Mats & Floor Coverings"
      />
      <Breadcrumb className=" md:px-4 hidden md:block border-[0.5px] border-[#E1DDDD]">
        <BreadcrumbList className="py-2.5 max-w-428.5 mx-auto gap-3.75 flex items-center">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/services">Workplace Rental</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Floor Mats & Floor Coverings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-20 pb-13.25 px-0 max-w-428.5 w-full mx-auto">
        <div className="flex items-center justify-between">
          <img
            src={TemplateContent[0].image}
            alt="Floor Mats"
            className="w-208.75 h-145 rounded-xl object-cover shrink-0"
          />
          <div className="flex flex-col w-full max-w-170.25 items-start gap-7">
            <div className="w-25 h-1.5 bg-brand " />
            <p className="text-black font-inter text-xl leading-7 max-w-110.75">
              {TemplateContent[0].text1}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-13.25 pb-13.25 px-0 max-w-428.5 w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-7">
            <p className="text-black font-inter text-xl leading-7 max-w-147.5">
              {TemplateContent[1].text1}
            </p>
            <p className="text-black font-inter text-xl leading-7 max-w-147.5">
              {TemplateContent[1].text2}
            </p>
          </div>
          <img
            src={TemplateContent[1].image}
            alt="Floor Mats"
            className="w-208.75 h-145 rounded-xl object-cover shrink-0"
          />
        </div>
      </div>
      <div className="pt-13.25 pb-20 px-0 max-w-428.5 w-full mx-auto">
        <div className="flex items-center justify-between">
          <img
            src={TemplateContent[2].image}
            alt="Floor Mats"
            className="w-208.75 h-145 rounded-xl object-cover shrink-0"
          />
          <div className="flex dark flex-col w-full max-w-170.25 items-start gap-7">
            <p className="text-black font-inter text-xl leading-7 ">
              {TemplateContent[2].text1}
            </p>
            <p className="text-black font-inter text-xl leading-7 ">
              {TemplateContent[2].text2}
            </p>
            <Button variant={"hero"} size="hero">
              Submit an enquiry
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F4F4] h-full max-h-198.25">
        <h3>Get in Touch with Us Today</h3>
        <p>
          To send an enquiry, fill in the details below, submit and we will get
          back to you shortly
        </p>
      </div>
    </>
  );
}
