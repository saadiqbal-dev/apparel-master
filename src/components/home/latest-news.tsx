import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const newsItems = [
  {
    id: 1,
    image: "/images/news/news-1.png",
    category: "Awards",
    title: "Pryors Apparelmaster Reign Supreme at Nelson Awards Night.",
  },
  {
    id: 2,
    image: "/images/news/news-1.png",
    category: "Awards",
    title: "Pryors Apparelmaster Reign Supreme at Nelson Awards Night.",
  },
  {
    id: 3,
    image: "/images/news/news-1.png",
    category: "Awards",
    title: "Pryors Apparelmaster Reign Supreme at Nelson Awards Night.",
  },
  {
    id: 4,
    image: "/images/news/news-1.png",
    category: "Awards",
    title: "Pryors Apparelmaster Reign Supreme at Nelson Awards Night.",
  },
  {
    id: 5,
    image: "/images/news/news-1.png",
    category: "Awards",
    title: "Pryors Apparelmaster Reign Supreme at Nelson Awards Night.",
  },
];

export default function LatestNews() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Carousel
        className="bg-dark py-15 lg:pt-25.75 lg:pb-27.25 w-full lg:px-5 lg:pl-25 lg:pr-0 relative"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        {/* Mobile: Heading only */}
        <h2 className="text-white font-inter text-center text-[28px] leading-8.5 font-medium mb-10 lg:hidden">
          Latest News
        </h2>

        {/* Desktop: Brand box with heading and controls */}
        <div className="hidden lg:flex bg-brand max-w-146.5 w-full h-162.75 rounded-2xl relative flex-col justify-between py-20 px-13.25">
          <h2 className="text-white font-inter text-[40px] font-medium leading-tight absolute left-11.75 top-64.5">
            Latest News
          </h2>

          <div className="flex items-center gap-5 absolute left-13.25 bottom-19.75">
            <CarouselPrevious
              className="static translate-0 bg-transparent border-white hover:text-white text-white size-14 hover:bg-transparent hover:border-white"
              iconClassName="size-[30px]"
            />
            <CarouselNext
              className="static translate-0 bg-white border-white text-brand size-14 hover:bg-white hover:border-white"
              iconClassName="size-[30px]"
            />
          </div>
        </div>

        {/* Carousel content */}
        <div className="lg:absolute lg:bottom-1/2 lg:translate-y-1/2 lg:right-0 lg:max-w-[calc(100vw-603px)] overflow-hidden">
          <CarouselContent className="overflow-visible gap-0 ml-0 lg:ml-0">
            {newsItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[75%] pl-5 sm:basis-1/2 md:basis-1/3 lg:basis-auto lg:pl-12.5"
              >
                <NewsItem
                  image={item.image}
                  category={item.category}
                  title={item.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* Mobile: Centered controls below carousel */}
        <div className="flex items-center justify-center gap-5 mt-10 lg:hidden">
          <CarouselPrevious
            className="static translate-0 bg-transparent border-white text-white hover:text-white size-14 hover:bg-transparent hover:border-white"
            iconClassName="size-[30px]"
          />
          <CarouselNext
            className="static translate-0 bg-white border-white size-14 hover:bg-white hover:border-white"
            iconClassName="size-[30px]"
          />
        </div>
      </Carousel>
    </div>
  );
}

interface NewsItemProps {
  image: string;
  category: string;
  title: string;
}

function NewsItem({ image, category, title }: NewsItemProps) {
  return (
    <Link
      to="/"
      className="bg-white max-h-102 lg:max-w-85 lg:max-h-123 rounded-2xl block"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-51 lg:h-auto aspect-281.951/204 lg:aspect-340/246 object-cover rounded-t-2xl"
      />

      <div className="px-6 lg:px-7 pt-3.5 lg:pt-4.5 pb-2.5 lg:pb-5 h-full max-h-51 lg:max-h-61.5 flex flex-col">
        <p className="text-meta font-inter text-[15.134px] leading-[30.268px] lg:text-sm lg:leading-7 font-medium">
          {category}
        </p>
        <h3 className="font-inter text-black text-[21.62px] md:text-lg leading-[30.268px] lg:text-xl lg:leading-7 font-normal hover:underline">
          {title}
        </h3>

        <p className="text-meta font-inter text-[15.134px] leading-[30.268px] lg:text-sm lg:leading-7 font-medium mt-auto">
          Read more
        </p>
      </div>
    </Link>
  );
}
