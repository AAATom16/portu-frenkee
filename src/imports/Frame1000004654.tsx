import svgPaths from "./svg-fpdyt03rl4";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";
import { AddonRow } from "../app/components/auto/AddonRow";

// ─── Info rows (Krytí, Úraz, …) ──────────────────────────────────────────────
const INFO_ROWS: { label: string; value: string }[] = [
  { label: "Krytí",              value: "100 mil./ 100 mil." },
  { label: "Úraz",               value: "Celá posádka" },
  { label: "Poškožení zvěří",    value: "40 000 Kč" },
  { label: "Roční nájezd",       value: "do 12 500 Km" },
  { label: "Úrazové pojištění",  value: "400 000 Kč" },
];

// ─── Addon rows (Připojištění) ────────────────────────────────────────────────
const ADDON_ROWS: {
  label: string;
  price?: string;
  enabled: boolean;
  bullets?: string[];
}[] = [
  {
    label: "Skla",
    price: "+ 310 Kč",
    enabled: true,
    bullets: ["limit 15 000 kč, spoluúčast 10%", "Smluvní servis bez spoluúčasti"],
  },
  {
    label: "Rozšířená asistence",
    price: "+ 310 Kč",
    enabled: true,
    bullets: ["Limit 100 000 Kč"],
  },
  {
    label: "Střez se zvěří",
    price: "+ 732 Kč",
    enabled: true,
    bullets: ["Limit 100 000 Kč", "Území Evropy a Turecka"],
  },
  {
    label: "Živelná rizika",
    enabled: false,
    bullets: ["Limit 100 000 Kč, spoluúčast 10%", "Území Evropy a Turecka"],
  },
];

// ─── Card logo + name header ──────────────────────────────────────────────────
function CardHeader({ name }: { name: string }) {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
          <img
            alt="AXA Logo"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgAxaLogoSvg1}
          />
        </div>
        <div
          className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap"
          style={{ fontWeight: 700 }}
        >
          <p className="leading-[1.6]">{name}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Info rows section ────────────────────────────────────────────────────────
function InfoRows() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      {INFO_ROWS.map((row) => (
        <div
          key={row.label}
          className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap"
        >
          <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
            <p className="leading-[1.6]">{row.label}</p>
          </div>
          <div
            className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0"
            style={{ fontWeight: 700 }}
          >
            <p className="leading-[1.6]">{row.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Připojištění section ─────────────────────────────────────────────────────
function AddonSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap"
        style={{ fontWeight: 700 }}
      >
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      {ADDON_ROWS.map((row) => (
        <AddonRow
          key={row.label}
          label={row.label}
          price={row.price}
          enabled={row.enabled}
          bullets={row.bullets}
        />
      ))}
    </div>
  );
}

// ─── Pojistné podmínky link ───────────────────────────────────────────────────
function PojistneConditions() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card body ────────────────────────────────────────────────────────────────
function CardBody({ name }: { name: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <CardHeader name={name} />
          <InfoRows />
          {/* divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.4">
                <line
                  id="Line 6"
                  stroke="var(--stroke-0, #3F2578)"
                  strokeOpacity="0.5"
                  strokeWidth="0.4"
                  x2="358"
                  y1="0.2"
                  y2="0.2"
                />
              </svg>
            </div>
          </div>
          {/* addon section */}
          <div className="relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
              <AddonSection />
            </div>
          </div>
          <PojistneConditions />
        </div>
      </div>
    </div>
  );
}

// ─── Card footer ──────────────────────────────────────────────────────────────
function CardFooter({ priceMonthly, priceTotal }: { priceMonthly: string; priceTotal: string }) {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          {/* prices */}
          <div
            className="content-stretch flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] items-center justify-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap"
          >
            <div className="flex flex-col justify-center relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 700 }}>
              <p className="leading-[1.6]">{priceMonthly}</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-[#64748b] text-[14px]">
              <p className="leading-[1.6]">{priceTotal}</p>
            </div>
          </div>
          {/* CTA button */}
          <div
            className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            data-name="primary"
            style={{
              backgroundImage:
                "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)",
            }}
          >
            <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Single insurance card ────────────────────────────────────────────────────
function InsuranceCard({
  name,
  priceMonthly,
  priceTotal,
}: {
  name: string;
  priceMonthly: string;
  priceTotal: string;
}) {
  return (
    <div
      className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white"
      data-name="Travel insurance_company card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]"
      />
      <CardBody name={name} />
      <CardFooter priceMonthly={priceMonthly} priceTotal={priceTotal} />
    </div>
  );
}

// ─── Root export — 3 cards in a row ──────────────────────────────────────────
export default function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative w-full">
      <InsuranceCard
        name="AXA Comfort premium"
        priceMonthly="698 Kč / měsíčně"
        priceTotal="7 023 Kč celkem"
      />
      <InsuranceCard
        name="AXA Comfort plus"
        priceMonthly="856 Kč / měsíčně"
        priceTotal="8 612 Kč celkem"
      />
      <InsuranceCard
        name="AXA Comfort standard"
        priceMonthly="512 Kč / měsíčně"
        priceTotal="5 144 Kč celkem"
      />
    </div>
  );
}
