import { useEffect, useState } from "react";
import svgPaths from "../../../imports/svg-8fjz2dl7zw";

// ─── Toggle ───────────────────────────────────────────────────────────────────
function Toggle({ enabled, onClick }: { enabled: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      className={`content-stretch flex h-[22.5px] items-center ${
        enabled ? "justify-end bg-[#00A878]" : "justify-start bg-[#e2e9f0]"
      } overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px] cursor-pointer transition-colors`}
    >
      <div className="bg-white flex items-center justify-center rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
    </div>
  );
}

// ─── Dropdown icon ────────────────────────────────────────────────────────────
function DropdownIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
          <path clipRule="evenodd" d={svgPaths.p288a8400} fill="#94A3B8" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── SelectInput ──────────────────────────────────────────────────────────────
function SelectInput({ value }: { value: string }) {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1A1A1A] text-[14px]">
            <p className="leading-[1.6]">{value}</p>
          </div>
          <DropdownIcon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

// ─── Section title ────────────────────────────────────────────────────────────
function SectionTitle({ label }: { label: string }) {
  return (
    <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[13px] uppercase tracking-[0.06em] leading-[1.6]" style={{ fontWeight: 700 }}>
      {label}
    </p>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
function Divider() {
  return <div className="h-px bg-[#e2e9f0] w-full" />;
}

// ─── Coverage amount row ──────────────────────────────────────────────────────
function CoverageAmountRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px] leading-[1.6]" style={{ fontWeight: 700 }}>{label}</p>
      <div className="w-[260px]"><SelectInput value={value} /></div>
    </div>
  );
}

// ─── Frekvence plateb ─────────────────────────────────────────────────────────
function FrekvencePlatebRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] text-[#94a3b8] text-[18px] leading-[1.6]" style={{ fontWeight: 700 }}>Frekvence plateb</p>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[210px]">
        <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip p-[4px] relative rounded-[inherit]">
          <div className="bg-[#00A878] flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] cursor-pointer transition-colors">
            <p className="font-['Inter',sans-serif] text-[14px] text-white leading-[1.6]">Měsíčně</p>
          </div>
          <div className="bg-transparent flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] cursor-pointer transition-colors">
            <p className="font-['Inter',sans-serif] text-[#94a3b8] text-[14px] leading-[1.6]">Kvartálně</p>
          </div>
          <div className="bg-transparent flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] cursor-pointer transition-colors">
            <p className="font-['Inter',sans-serif] text-[#94a3b8] text-[14px] leading-[1.6]">Ročně</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

// ─── Addon row ────────────────────────────────────────────────────────────────
function AddonRow({
  label,
  price,
  enabled,
  onToggle,
  bullets,
}: {
  label: string;
  price?: string;
  enabled: boolean;
  onToggle: () => void;
  bullets?: string[];
}) {
  return (
    <div className="flex flex-col gap-[4px] items-start w-full">
      <div className="flex items-center gap-[8px] w-full">
        <p
          className="flex-1 min-w-0 font-['Inter',sans-serif] text-[18px] leading-[1.6]"
          style={{ fontWeight: 700, color: enabled ? "#1A1A1A" : "#b0b0b0" }}
        >
          {label}
        </p>
        {price && enabled && (
          <span className="font-['Inter',sans-serif] text-[#34c759] text-[18px] leading-[1.6] shrink-0" style={{ fontWeight: 700 }}>
            {price}
          </span>
        )}
        <Toggle enabled={enabled} onClick={onToggle} />
      </div>

      {/* Sub-details — lighter when disabled */}
      {bullets && bullets.length > 0 && (
        <div className="flex flex-col gap-[2px]" style={{ color: enabled ? "#666666" : "#d1d1d1" }}>
          {bullets.map((b, i) => (
            <ul key={i}>
              <li className="list-disc ms-[21px] font-['Inter',sans-serif] text-[13px] leading-none">
                {b}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main modal ───────────────────────────────────────────────────────────────
interface UpravidNabidkuModalOverlayProps {
  onClose: () => void;
}

export default function UpravidNabidkuModalOverlay({ onClose }: UpravidNabidkuModalOverlayProps) {
  // Toggle states for life insurance add-ons
  const [sporty, setSporty] = useState(true);
  const [hospitalizace, setHospitalizace] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white relative rounded-[12px] shadow-[0px_20px_60px_rgba(0,0,0,0.3)] w-full max-w-[660px] mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[16px]">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[20px] leading-[1.6]" style={{ fontWeight: 700 }}>
            Upravit nabídku
          </p>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-[32px] h-[32px] rounded-full hover:bg-[#f8fafc] transition-colors text-[#94a3b8] hover:text-[#1A1A1A]"
            aria-label="Zavřít"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <Divider />

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-[20px] p-[24px]">

          {/* 1. Pojistné částky */}
          <div className="flex flex-col gap-[12px]">
            <SectionTitle label="Pojistné částky" />
            
            <CoverageAmountRow label="Úmrtí" value="100 000 Kč" />
            <CoverageAmountRow label="Invalidita konstantní" value="500 000 Kč (pro III. st.)" />
            <CoverageAmountRow label="Invalidita klesající" value="5 000 000 Kč (pro III. st.)" />
            <CoverageAmountRow label="Závažných nemocí" value="300 000 Kč" />
            <CoverageAmountRow label="Trvalé následky" value="700 000 Kč" />
          </div>

          <Divider />

          {/* 2. Frekvence plateb */}
          <div className="flex flex-col gap-[12px]">
            <SectionTitle label="Frekvence plateb" />
            <FrekvencePlatebRow />
          </div>

          <Divider />

          {/* 3. Připojištění */}
          <div className="flex flex-col gap-[12px]">
            <SectionTitle label="Připojištění" />

            <AddonRow
              label="Sporty"
              price="+ 310 Kč"
              enabled={sporty}
              onToggle={() => setSporty((v) => !v)}
              bullets={[
                "Squash - celostátní a mezinárodní úrovně",
                "Smluvní servis bez spoluúčasti",
              ]}
            />

            {sporty && <div className="h-px bg-[#E5E5E5] w-full" />}

            <AddonRow
              label="Hospitalizace"
              price="+ 110 Kč"
              enabled={hospitalizace}
              onToggle={() => setHospitalizace((v) => !v)}
              bullets={["Limit dnů"]}
            />
          </div>
        </div>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center px-[24px] pb-[24px] pt-[4px]">
          <button
            onClick={onClose}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[40px] py-[12px] rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]"
          >
            <p className="font-['Inter',sans-serif] text-[16px] text-white leading-[1.6]">Uložit změny</p>
          </button>
        </div>
      </div>
    </div>
  );
}