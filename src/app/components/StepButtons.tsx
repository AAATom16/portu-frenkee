import { Link as RouterLink } from "react-router";

/** Shared "Pokračovat" button — fixed 130 px wide, 48 px tall, green fill */
function PokracovatBtn({ to }: { to: string }) {
  return (
    <RouterLink to={to} className="no-underline shrink-0">
      <div
        className="w-[130px] h-[48px] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
        style={{ backgroundColor: "#00A878" }}
      >
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </RouterLink>
  );
}

/** Shared "Zpět" button — secondary, auto width */
function ZpetBtn({ to }: { to: string }) {
  return (
    <RouterLink to={to} className="no-underline shrink-0">
      <div className="border border-[#cbd5e1] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[8px] cursor-pointer hover:bg-[#f8fafc] transition-colors h-[48px]">
        <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[#64748b] whitespace-nowrap">
          Zpět
        </p>
      </div>
    </RouterLink>
  );
}

/**
 * First-step layout: only Pokračovat, aligned to the center.
 */
export function FirstStepButtons({
  nextTo,
}: {
  nextTo: string;
}) {
  return (
    <div className="flex justify-center w-full">
      <PokracovatBtn to={nextTo} />
    </div>
  );
}

/**
 * All other steps: Zpět on the left, Pokračovat on the right.
 * Uses w-full so it naturally matches the width of whatever frame is above it.
 */
export function StepButtons({
  backTo,
  nextTo,
  containerWidth,
}: {
  backTo: string;
  nextTo: string;
  containerWidth?: string;
}) {
  return (
    <div
      className="flex justify-between items-center w-full"
      style={containerWidth ? { width: containerWidth } : undefined}
    >
      <ZpetBtn to={backTo} />
      <PokracovatBtn to={nextTo} />
    </div>
  );
}