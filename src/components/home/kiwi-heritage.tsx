import { VideoBackground } from "@/components/video-background";
import { Button } from "@/components/ui/button";

export default function KiwiHeritage() {
  return (
    <div className="relative">
      <div
        className="absolute space-y-11.5 z-10"
        style={{
          left: "16.93vw",
          top: "30.23vh",
        }}
      >
        <h2
          className="font-inter text-white text-[48px]"
          style={{ maxWidth: "29.43vw" }}
        >
          100% New Zealand owned and operated.
        </h2>
        <Button variant={"hero"} size="hero">
          Discover Our Kiwi Heritage
        </Button>
      </div>
      <VideoBackground videoId="1147818889" />
    </div>
  );
}
