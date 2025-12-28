import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  iconClassName,
  ...props
}: React.ComponentProps<typeof Button> & {
  iconClassName?: string;
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className={iconClassName} />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  iconClassName,
  ...props
}: React.ComponentProps<typeof Button> & {
  iconClassName?: string;
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className={iconClassName} />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
      fill="white"
      className={className}
    >
      <mask id="path-1-inside-1_2003_2666" fill="white">
        <path d="M9.18281e-07 10.4961L11.4336 -1.62313e-06L12.5303 1.14551L3.19238 9.71191L30 9.71191L30 11.2803L3.19238 11.2803L12.5303 19.8545L11.4336 21L9.18281e-07 10.4961Z" />
      </mask>
      <path
        d="M9.18281e-07 10.4961L11.4336 -1.62313e-06L12.5303 1.14551L3.19238 9.71191L30 9.71191L30 11.2803L3.19238 11.2803L12.5303 19.8545L11.4336 21L9.18281e-07 10.4961Z"
        fill="white"
      />
      <path
        d="M9.18281e-07 10.4961L-0.676259 9.75943L-1.47842 10.4958L-0.676532 11.2325L9.18281e-07 10.4961ZM11.4336 -1.62313e-06L12.1559 -0.691545L11.4787 -1.3989L10.7573 -0.736666L11.4336 -1.62313e-06ZM12.5303 1.14551L13.2063 1.8824L13.959 1.19184L13.2526 0.453963L12.5303 1.14551ZM3.19238 9.71191L2.51637 8.97502L0.623057 10.7119L3.19238 10.7119L3.19238 9.71191ZM30 9.71191L31 9.71191L31 8.71191L30 8.71191L30 9.71191ZM30 11.2803L30 12.2803L31 12.2803L31 11.2803L30 11.2803ZM3.19238 11.2803L3.19238 10.2803L0.624783 10.2803L2.51604 12.0169L3.19238 11.2803ZM12.5303 19.8545L13.2526 20.546L13.9587 19.8085L13.2066 19.1179L12.5303 19.8545ZM11.4336 21L10.7571 21.7364L11.4785 22.3992L12.1559 21.6915L11.4336 21ZM9.18281e-07 10.4961L0.676261 11.2328L12.1099 0.736662L11.4336 -1.62313e-06L10.7573 -0.736666L-0.676259 9.75943L9.18281e-07 10.4961ZM11.4336 -1.62313e-06L10.7113 0.691542L11.8079 1.83705L12.5303 1.14551L13.2526 0.453963L12.1559 -0.691545L11.4336 -1.62313e-06ZM12.5303 1.14551L11.8543 0.408614L2.51637 8.97502L3.19238 9.71191L3.86839 10.4488L13.2063 1.8824L12.5303 1.14551ZM3.19238 9.71191L3.19238 10.7119L30 10.7119L30 9.71191L30 8.71191L3.19238 8.71191L3.19238 9.71191ZM30 9.71191L29 9.71191L29 11.2803L30 11.2803L31 11.2803L31 9.71191L30 9.71191ZM30 11.2803L30 10.2803L3.19238 10.2803L3.19238 11.2803L3.19238 12.2803L30 12.2803L30 11.2803ZM3.19238 11.2803L2.51604 12.0169L11.8539 20.5911L12.5303 19.8545L13.2066 19.1179L3.86873 10.5437L3.19238 11.2803ZM12.5303 19.8545L11.8079 19.1629L10.7113 20.3085L11.4336 21L12.1559 21.6915L13.2526 20.546L12.5303 19.8545ZM11.4336 21L12.1101 20.2636L0.676534 9.75968L9.18281e-07 10.4961L-0.676532 11.2325L10.7571 21.7364L11.4336 21Z"
        fill="white"
        mask="url(#path-1-inside-1_2003_2666)"
      />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
      fill="none"
      className={className}
    >
      <path
        d="M30 10.5039L18.5664 21L17.4697 19.8545L26.8076 11.2881H0V9.71973H26.8076L17.4697 1.14551L18.5664 0L30 10.5039Z"
        fill="#F15D22"
      />
    </svg>
  );
}
