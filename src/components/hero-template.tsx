interface HeroTemplateProps {
  title: string;
  backgroundImage: string;
}

export default function HeroTemplate({
  title,
  backgroundImage,
}: HeroTemplateProps) {
  return (
    <div
      className="mx-auto flex items-center justify-center w-full mt-22.5 md:mt-0 md:pt-59.25 px-11.5 py-6 md:pb-23.5 bg-no-repeat bg-cover h-full max-h-32 md:max-h-95"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <h1 className="text-white max-w-77.25 w-full text-center md:max-w-full text-2xl md:text-5xl font-inter">
        {title}
      </h1>
    </div>
  );
}
