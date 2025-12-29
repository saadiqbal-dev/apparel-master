import { VideoBackground } from "@/components/video-background";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      {/* Hero section with video and text */}
      <div className="relative h-[55vh] lg:h-screen overflow-hidden">
        <VideoBackground videoId="1147812884" fixed={true} />

        <div className="absolute inset-0 flex items-center justify-center xl:block xl:absolute xl:inset-auto xl:left-0 xl:right-0 xl:top-[39.81vh] xl:w-full z-10">
          <div className="text-center text-white px-4 w-full">
            <h1 className="text-[32px] mx-auto max-w-86.5 md:max-w-none md:text-[54px] font-medium leading-9.5 md:leading-17 mb-6">
              Fully managed workwear & workplace rental solutions
            </h1>
            <Button variant="hero" size="hero">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
