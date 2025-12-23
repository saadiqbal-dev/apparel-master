interface NavButtonProps {
  label: string;
  isLight: boolean;
  isActive: boolean;
  onClick: () => void;
}

export function NavButton({
  label,
  isLight,
  isActive,
  onClick,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-expanded={isActive}
      aria-haspopup="true"
      className={`group font-medium cursor-pointer transition-colors duration-300 text-sm xl:text-base relative inline-block pb-1 ${
        isLight ? "text-gray-700" : "text-white"
      }`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-[#E9510E] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </button>
  );
}
