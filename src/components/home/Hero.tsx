import { VideoBackground } from "@/components/VideoBackground";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <VideoBackground videoId="1147812884" fixed />

      {/* Hero section with video and text */}
      <div className="relative h-screen">
        <div
          className="absolute text-center text-white px-4 w-full"
          style={{ top: "39.81vh" }}
        >
          <h1 className="text-[54px] font-medium leading-17 mb-6">
            Fully managed workwear & workplace rental solutions
          </h1>
          <Button variant="hero" size="hero">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
}
