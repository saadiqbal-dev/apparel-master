import { VideoBackground } from "@/components/video-background";
import { Button } from "@/components/ui/button";

export default function KiwiHeritage() {
  return (
    <div className="relative h-[393px] md:h-screen overflow-hidden">
      <VideoBackground videoId="1147818889" fixed={false} />

      <div className="absolute left-[68px] top-[126px] md:left-[16.93vw] md:top-[30.23vh] z-10">
        <div className="space-y-6 md:space-y-11.5">
          <h2 className="font-inter text-white max-w-[243px] text-2xl leading-[30px] md:text-[48px] md:leading-normal md:max-w-[29.43vw]">
            100% New Zealand owned and operated.
          </h2>
          <Button variant={"hero"} size="hero">
            Discover Our Kiwi Heritage
          </Button>
        </div>
      </div>
    </div>
  );
}
