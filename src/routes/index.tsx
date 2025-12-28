import { createFileRoute } from "@tanstack/react-router";
import { VideoBackground } from "@/components/VideoBackground";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      <VideoBackground videoId="1147812884" />

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

      {/* Scrollable content that reveals on scroll */}
      <div className="relative z-20">
        <img src="/curve-desktop.svg" alt="" className="w-full block" />
        <div className="bg-white min-h-screen">
          <p className="p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vitae maximus lacus. Pellentesque aliquet facilisis mauris, eget
            ultrices sem convallis vel. Duis quis diam nec felis accumsan
            semper. Nunc et dolor nec nibh porttitor tempor eu vitae lorem. Duis
            et tortor blandit, vestibulum felis ac, aliquet velit. Quisque
            condimentum pharetra magna sit amet viverra. Donec cursus, lorem
            vitae eleifend suscipit, justo risus vestibulum nulla, vitae
            vulputate orci mauris ut leo. Vestibulum auctor tristique ligula.
            Curabitur mollis lectus quis tortor finibus euismod. Donec rutrum
            pharetra sapien eu convallis. Mauris in efficitur est. Aenean congue
            sed nibh eu vulputate. In non euismod nulla. Fusce tempor lectus ac
            libero lacinia, porttitor euismod ligula sollicitudin. Nullam
            accumsan suscipit lacus quis convallis. Aliquam sed magna vitae nisl
            iaculis egestas. Praesent sagittis lacinia justo a feugiat. Duis
            euismod nulla sit amet nisl maximus, nec tincidunt dolor dictum.
            Nulla interdum nibh eu ligula facilisis varius. Donec laoreet sed
            arcu quis mollis. Suspendisse ultricies est vel lobortis
            ullamcorper. Pellentesque congue rutrum augue, vitae laoreet odio
            pretium sed. Donec eu odio nibh. Fusce vehicula dui et porttitor
            tristique. Integer in metus vitae purus semper hendrerit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
            enim at orci dapibus blandit. Praesent pulvinar leo sit amet turpis
            fringilla, vel dapibus tellus congue. Aenean at felis sed orci porta
            varius. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Duis ac lorem vitae sapien molestie
            sagittis at id arcu. Nulla vestibulum odio augue, ac hendrerit felis
            cursus a. Proin mattis justo eu erat dictum auctor. Aenean sit amet
            velit quis sapien luctus pulvinar. Vivamus porta purus sit amet
            lacus molestie, eget bibendum sapien luctus. Aenean commodo, tortor
            id aliquam accumsan, ligula dolor accumsan dolor, vel varius eros
            justo vitae eros. Mauris eget semper justo. Etiam convallis tellus
            at nunc laoreet porttitor. Mauris vitae efficitur sem. Maecenas arcu
            ligula, laoreet in nunc eu, dignissim interdum lectus. Vestibulum
            hendrerit nec eros ac pharetra. Nam pulvinar eleifend facilisis.
            Aliquam erat volutpat. Nam dapibus elementum neque eget
            sollicitudin. Curabitur porttitor nibh risus. Nulla a mi vel nulla
            dapibus pulvinar. Nullam luctus felis non mi varius lobortis. Donec
            faucibus aliquam mi ut volutpat. Nam fringilla sem sodales, lobortis
            dui sit amet, eleifend purus.
          </p>
        </div>
      </div>
    </div>
  );
}
