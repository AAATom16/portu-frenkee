import { Link as RouterLink } from "react-router";
import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-koylo6oodi";
import { StepButtons } from "../StepButtons";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div
        className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full"
        style={{ fontWeight: 700 }}
      >
        <p className="leading-none">Online sjednání pojištění auta</p>
      </div>
    </div>
  );
}

/* ─── Shared input box wrapper ─── */
function InputBox({ children, extraClass = "" }: { children: React.ReactNode; extraClass?: string }) {
  return (
    <div className={`bg-white h-[40px] relative shrink-0 w-full ${extraClass}`}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        {children}
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-[inherit] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

/* ─── Section: Pojistník ─── */
function PojistnikSection() {
  const [selected, setSelected] = useState<"soukroma" | "firma" | "osvc">("soukroma");

  const Radio = ({ value, label }: { value: "soukroma" | "firma" | "osvc"; label: string }) => {
    const active = selected === value;
    return (
      <div
        className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0 cursor-pointer"
        onClick={() => setSelected(value)}
      >
        <div className="overflow-clip relative shrink-0 size-[16px]">
          {active ? (
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pbbdde00} fill="#00A878" />
            </svg>
          ) : (
            <div className="absolute inset-[8.33%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path clipRule="evenodd" d={svgPaths.p17aa5480} fill="#CBD5E1" fillRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap">
          <p className="leading-[1.6]">{label}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Title */}
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Pojistník</p>
        </div>
      </div>
      {/* Radio row */}
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
        <Radio value="soukroma" label="Soukromá osoba" />
        <Radio value="firma" label="Firma" />
        <Radio value="osvc" label="OSVČ" />
      </div>
    </div>
  );
}

/* ─── Section: Jméno ─── */
function JmenoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Label */}
      <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
          <p className="leading-[1.6]">Jméno</p>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
          <p className="leading-[1.6]">&nbsp;</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
          <p className="leading-[1.6]">*</p>
        </div>
      </div>
      {/* Jméno input */}
      <InputBox extraClass="rounded-[8px]">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="Jméno"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </InputBox>
      {/* Příjmení input */}
      <InputBox extraClass="rounded-[8px]">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="Příjmení"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </InputBox>
    </div>
  );
}

/* ─── Section: Rodné číslo ─── */
function RodneCisloSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Label */}
      <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
          <p className="leading-[1.6]">Rodné číslo</p>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
          <p className="leading-[1.6]">&nbsp;</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
          <p className="leading-[1.6]">*</p>
        </div>
      </div>
      {/* Input */}
      <InputBox extraClass="rounded-[8px]">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="rodné číslo"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </InputBox>
    </div>
  );
}

/* ─── Section: Adresa ─── */
function AdresaSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {/* Label */}
      <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap mb-[8px]">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
          <p className="leading-[1.6]">Adresa</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
          <p className="leading-[1.6]">*</p>
        </div>
      </div>

      {/* Grouped address inputs */}
      <div className="relative w-full">
        {/* Adresa – top row, rounded top */}
        <div className="bg-white h-[40px] relative rounded-tl-[12px] rounded-tr-[12px] w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <input
                type="text"
                placeholder="Adresa"
                className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
              />
              {/* Search icon */}
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[8.33%_11.99%_11.99%_8.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1213 19.1213">
                    <path clipRule="evenodd" d={svgPaths.p314c2c80} fill="#E2E9F0" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>

        {/* Země původu – middle row */}
        <div className="bg-white h-[40px] relative w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
                <p className="leading-[1.6]">Země původu</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                    <path clipRule="evenodd" d={svgPaths.p288a8400} fill="#94A3B8" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>

        {/* Stát – middle row */}
        <div className="bg-white h-[40px] relative w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
                <p className="leading-[1.6]">Stát</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                    <path clipRule="evenodd" d={svgPaths.p288a8400} fill="#94A3B8" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>

        {/* Město + Směrovací číslo – bottom row, rounded bottom */}
        <div className="bg-white h-[40px] relative rounded-bl-[12px] rounded-br-[12px] w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            {/* Město */}
            <div className="flex flex-[1_0_0] items-center px-[12px] relative h-full">
              <input
                type="text"
                placeholder="Město"
                className="flex-1 font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
              />
            </div>
            {/* Divider */}
            <div className="w-[1px] h-[24px] bg-[#e2e9f0] shrink-0" />
            {/* Směrovací číslo */}
            <div className="flex flex-[1_0_0] items-center px-[12px] relative h-full">
              <input
                type="text"
                placeholder="Směrovací číslo"
                className="flex-1 font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-bl-[13px] rounded-br-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
      </div>
    </div>
  );
}

/* ─── Section: Vlastník a provozovatel ─── */
function VlastnikSection() {
  const [vlastnik, setVlastnik] = useState(true);
  const [provozovatel, setProvozovatel] = useState(true);

  const CheckboxItem = ({
    checked,
    onToggle,
    label,
  }: {
    checked: boolean;
    onToggle: () => void;
    label: string;
  }) => (
    <div
      className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0 cursor-pointer"
      onClick={onToggle}
    >
      <div className="relative shrink-0 size-[24px]">
        {checked ? (
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p1c130880} fill="#00A878" fillRule="evenodd" />
          </svg>
        ) : (
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px]">
        <p className="leading-[1.6]">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Section title */}
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap">
          <p className="leading-[1.6]">Vlastník a provozovatel vozidla</p>
        </div>
      </div>
      <CheckboxItem
        checked={vlastnik}
        onToggle={() => setVlastnik(!vlastnik)}
        label="Jsem vlastník vozidla"
      />
      <CheckboxItem
        checked={provozovatel}
        onToggle={() => setProvozovatel(!provozovatel)}
        label="Jsem provozovatel a zapsaný v malém technickém průkazu"
      />
    </div>
  );
}

/* ─── Pokračovat button ─── */
function PokracovatButton() {
  return (
    <RouterLink to="/auto/krok-3" className="no-underline">
      <div
        className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[32px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          backgroundImage:
            "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)",
        }}
      >
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </RouterLink>
  );
}

function FormSection() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-[600px]">
      <PojistnikSection />
      <JmenoSection />
      <RodneCisloSection />
      <AdresaSection />
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#e2e9f0]" />
      <VlastnikSection />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[80px] px-[99px] relative">
      <FormSection />
      <StepButtons backTo="/auto/krok-1" nextTo="/auto/krok-3" containerWidth="600px" />
    </div>
  );
}

export default function CarInsuranceStep2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="auto" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={2} />
      </div>
      <Frame12 />
    </div>
  );
}