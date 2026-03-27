import { useEffect, useState } from "react";
import { Home, Shield } from "lucide-react";
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

function SectionTitle({ label }: { label: string }) {
  return (
    <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[13px] uppercase tracking-[0.06em] leading-[1.6]" style={{ fontWeight: 700 }}>
      {label}
    </p>
  );
}

function Divider() {
  return <div className="h-px bg-[#e2e9f0] w-full" />;
}

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
          style={{ fontWeight: 700, color: enabled ? "#1A1A1A" : "#999999" }}
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
      {enabled && bullets && bullets.length > 0 && (
        <div className="flex flex-col gap-[2px]" style={{ color: "#999999" }}>
          {bullets.map((b, i) => (
            <ul key={i}>
              <li className="list-disc ms-[21px] font-['Inter',sans-serif] text-[13px] leading-none">{b}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

function InsuranceTypeRow({
  icon,
  label,
  enabled,
  onToggle,
}: {
  icon: React.ReactNode;
  label: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full cursor-pointer select-none" onClick={onToggle}>
      <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div style={{ color: enabled ? "#00A878" : "#94a3b8" }}>{icon}</div>
          <p
            className="font-['Inter',sans-serif] text-[18px] leading-[1.6]"
            style={{ fontWeight: 700, color: enabled ? "#1A1A1A" : "#94a3b8" }}
          >
            {label}
          </p>
        </div>
        <Toggle enabled={enabled} />
      </div>
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[12px] transition-all ${
          enabled ? "border-[#E5E7EB] shadow-[0px_0px_10.3px_0px_rgba(0,168,120,0.12)]" : "border-[#e2e9f0]"
        }`}
      />
    </div>
  );
}

interface UpravidNabidkuModalOverlayProps {
  onClose: () => void;
}

export default function UpravidNabidkuModalOverlay({ onClose }: UpravidNabidkuModalOverlayProps) {
  const [pojisteniMajetku, setPojisteniMajetku] = useState(true);
  const [atmosfericke, setAtmosfericke] = useState(true);
  const [povoden, setPovoden] = useState(true);
  const [vodniSkody, setVodniSkody] = useState(true);
  const [odcizeni, setOdcizeni] = useState(true);
  const [prepeti, setPrepeti] = useState(false);
  const [vandalismus, setVandalismus] = useState(true);
  const [poskozeni, setPoskozeni] = useState(false);
  const [rozsirenaAsistence, setRozsirenaAsistence] = useState(true);
  const [pravniAsistence, setPravniAsistence] = useState(false);
  const [itAsistence, setItAsistence] = useState(true);
  const [pojisteniOdpovednosti, setPojisteniOdpovednosti] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} onClick={onClose}>
      <div className="bg-white relative rounded-[12px] shadow-[0px_20px_60px_rgba(0,0,0,0.3)] w-full max-w-[660px] mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[16px]">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[20px] leading-[1.6]" style={{ fontWeight: 700 }}>Upravit nabídku</p>
          <button onClick={onClose} className="flex items-center justify-center w-[32px] h-[32px] rounded-full hover:bg-[#f8fafc] transition-colors text-[#94a3b8] hover:text-[#00A878]" aria-label="Zavřít">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <Divider />
        <div className="flex flex-col gap-[20px] p-[24px]">
          <div className="flex flex-col gap-[8px]">
            <SectionTitle label="Typ pojištění" />
            <InsuranceTypeRow icon={<Home size={20} />} label="Pojištění majetku" enabled={pojisteniMajetku} onToggle={() => setPojisteniMajetku(v => !v)} />
            {pojisteniMajetku && (
              <div className="flex flex-col gap-[14px] pt-[4px] pb-[4px] px-[4px]">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px] leading-[1.6]" style={{ fontWeight: 700 }}>Hodnota majetku</p>
                  <div className="content-stretch flex gap-[8px] items-center shrink-0 w-[260px]">
                    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                          <p className="flex-1 min-w-0 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] leading-[1.6]">2 500 000</p>
                          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[14px] leading-[1.6] shrink-0">Kč</p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px] leading-[1.6]" style={{ fontWeight: 700 }}>Typ nemovitosti</p>
                  <div className="w-[260px]"><SelectInput value="Rodinný dům" /></div>
                </div>
              </div>
            )}
          </div>
          <Divider />
          <div className="flex flex-col gap-[12px]">
            <SectionTitle label="Frekvence plateb" />
            <FrekvencePlatebRow />
          </div>
          <Divider />
          <div className="flex flex-col gap-[12px]">
            <SectionTitle label="Připojištění" />
            {[
              { label: "Atmosférické srážky", price: "+ 150 Kč", enabled: atmosfericke, onToggle: () => setAtmosfericke(v => !v) },
              { label: "Povodeň a záplava", price: "+ 180 Kč", enabled: povoden, onToggle: () => setPovoden(v => !v) },
              { label: "Vodní škody - ztráta vody", price: "+ 100 Kč", enabled: vodniSkody, onToggle: () => setVodniSkody(v => !v) },
              { label: "Odcizení", price: "+ 180 Kč", enabled: odcizeni, onToggle: () => setOdcizeni(v => !v) },
              { label: "Přepětí", enabled: prepeti, onToggle: () => setPrepeti(v => !v) },
              { label: "Vandalismus", price: "+ 100 Kč", enabled: vandalismus, onToggle: () => setVandalismus(v => !v) },
              { label: "Poškození fasády", enabled: poskozeni, onToggle: () => setPoskozeni(v => !v) },
              { label: "Rozšířená asistence", price: "+ 200 Kč", enabled: rozsirenaAsistence, onToggle: () => setRozsirenaAsistence(v => !v) },
              { label: "Právní asistence", enabled: pravniAsistence, onToggle: () => setPravniAsistence(v => !v) },
              { label: "IT asistence", price: "+ 100 Kč", enabled: itAsistence, onToggle: () => setItAsistence(v => !v) },
              { label: "Pojištění odpovědnosti", price: "+ 500 Kč", enabled: pojisteniOdpovednosti, onToggle: () => setPojisteniOdpovednosti(v => !v) },
            ].map(({ label, price, enabled, onToggle }, i, arr) => (
              <div key={label}>
                <AddonRow label={label} price={price} enabled={enabled} onToggle={onToggle} />
                {enabled && i < arr.length - 1 && <div className="h-px bg-[#f0fdf8] w-full mt-[4px]" />}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center px-[24px] pb-[24px] pt-[4px]">
          <button
            onClick={onClose}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[40px] py-[12px] rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
            style={{ backgroundColor: "#00A878" }}
          >
            <p className="font-['Inter',sans-serif] text-[16px] text-white leading-[1.6]">Uložit změny</p>
          </button>
        </div>
      </div>
    </div>
  );
}
