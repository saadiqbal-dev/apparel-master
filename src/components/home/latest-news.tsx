import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function LatestNews() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Carousel
        className="bg-[#242323] pt-[103px] pb-[109px] w-full pl-[100px] relative"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <div className="bg-[#E9510E] max-w-[586px] w-full h-[651px] rounded-[12px] relative flex flex-col justify-between py-[80px] px-[53px]">
          <h2 className="text-white font-inter text-[40px] font-medium leading-tight">
            Latest News
          </h2>

          <div className="flex items-center gap-5">
            <CarouselPrevious
              className="static translate-0 bg-transparent border-white size-[56px] hover:bg-transparent hover:border-white"
              iconClassName="size-[30px]"
            />
            <CarouselNext
              className="static translate-0 bg-white border-white size-[56px] hover:bg-white hover:border-white"
              iconClassName="size-[30px]"
            />
          </div>
        </div>
        <div className="absolute bottom-1/2 translate-y-1/2 right-0 max-w-[calc(100vw-603px)] overflow-hidden">
          <CarouselContent className="overflow-visible gap-[50px]">
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <NewsItem />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}

function NewsItem() {
  return (
    <Link
      to="/"
      className="bg-white aspect-340/492 max-w-[340px] max-h-[492px] rounded-[12px] block"
    >
      <img
        src="/images/news/news-1.png"
        alt="News Item"
        className="w-full h-auto aspect-340/246 object-cover rounded-t-[12px]"
      />

      <div className="px-7 pt-4.5 pb-5 h-full max-h-[246px] flex flex-col">
        <p className="text-[#979595] font-inter text-sm font-medium leading-7">
          Awards
        </p>
        <h3 className="font-inter text-black text-xl leading-7 hover:underline">
          Pryors Apparelmaster Reign Supreme at Nelson Awards Night.
        </h3>

        <p className="text-[#979595] font-inter text-sm font-medium leading-7 mt-auto">
          Read more
        </p>
      </div>
    </Link>
  );
}
