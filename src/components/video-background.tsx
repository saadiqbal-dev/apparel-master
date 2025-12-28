import { useEffect, useState } from "react";

interface VideoBackgroundProps {
  videoId: string;
  fixed?: boolean;
}

export function VideoBackground({
  videoId,
  fixed = false,
}: VideoBackgroundProps) {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  useEffect(() => {
    if (!fixed) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide video when scrolled past 80% of viewport height
      setIsVideoVisible(scrollY < window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixed]);

  if (!fixed) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "177.77777778vh",
            height: "56.25vw",
            minWidth: "100vw",
            minHeight: "100vh",
            border: 0,
          }}
          title="Background Video"
        />
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVideoVisible ? 1 : 0 }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1`}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "177.77777778vh",
          height: "56.25vw",
          minWidth: "100vw",
          minHeight: "100vh",
          border: 0,
        }}
        title="Background Video"
      />
    </div>
  );
}
