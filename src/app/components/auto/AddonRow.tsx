interface AddonRowProps {
  label: string;
  price?: string;
  enabled?: boolean;
  bullets?: string[];
}

function Toggle({ enabled }: { enabled: boolean }) {
  return (
    <div
      className={`content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px] ${
        enabled ? "bg-[#00A878] justify-end" : "bg-[#e2e9f0] justify-start"
      }`}
      data-name="toggle"
    >
      <div
        className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]"
        data-name="Background+Shadow"
      />
    </div>
  );
}

export function AddonRow({ label, price, enabled = true, bullets }: AddonRowProps) {
  return (
    <div className="flex flex-col gap-[4px] items-start relative w-full">
      {/* Top row: label + price + toggle */}
      <div className="flex items-center gap-[8px] relative w-full">
        <div
          className="flex-1 min-w-0 font-['Inter',sans-serif] leading-[0] not-italic text-[18px]"
          style={{ fontWeight: 700, color: enabled ? "#1A1A1A" : "#999999" }}
        >
          <p className="leading-[1.6]">{label}</p>
        </div>

        {/* Price - only show when enabled */}
        {enabled && (
          <div className="shrink-0 flex justify-end">
            {price ? (
              <span
                className="font-['Inter',sans-serif] text-[#34c759] text-[18px] whitespace-nowrap leading-[1.6]"
                style={{ fontWeight: 700 }}
              >
                {price}
              </span>
            ) : null}
          </div>
        )}

        {/* Toggle */}
        <Toggle enabled={enabled} />
      </div>

      {/* Bullet points */}
      {bullets && bullets.length > 0 && (
        <div
          className="flex flex-col gap-[4px] items-start font-['Inter',sans-serif] not-italic text-[14px] whitespace-nowrap"
          style={{ color: enabled ? "#999999" : "#d1d5db" }}
        >
          {bullets.map((b, i) => (
            <div key={i} className="flex flex-col justify-center relative shrink-0">
              <ul>
                <li className="list-disc ms-[21px]">
                  <span className="leading-none">{b}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
