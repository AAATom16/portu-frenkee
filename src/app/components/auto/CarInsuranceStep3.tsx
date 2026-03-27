import { Link as RouterLink } from "react-router";
import { StepButtons } from "../StepButtons";
import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-afqraibjpa";
import Frame1000004687 from "../../../imports/Frame1000004687";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ backgroundImage: undefined, fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění auta</p>
      </div>
    </div>
  );
}

function PovinneRuceniSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[340.25px]">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[8.62%_12.5%_8.58%_12.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.873">
                    <path clipRule="evenodd" d={svgPaths.p19612100} fill="#94A3B8" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
                  <p className="leading-[1.6]">Povinné ručení</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]">
              <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverageCard({ level, description, range, selected }: { level: string; description: string; range: string; selected?: boolean }) {
  const bars = [
    { height: 35, filled: true },
    { height: 50, filled: level === "Střední" || level === "Vysoké" },
    { height: 70, filled: level === "Vysoké" }
  ];

  return (
    <div className={`flex-[1_0_0] h-[250px] min-h-px min-w-px relative rounded-[8px]`}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[12px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            {bars.map((bar, i) => (
              <div key={i} className="content-stretch flex flex-col h-[76px] items-start justify-end relative shrink-0 w-[40px]">
                {bar.filled ? (
                  <div className={`bg-[#00A878] rounded-[8px] shrink-0 w-full`} style={{ height: `${bar.height}px` }} />
                ) : (
                  <div className={`relative rounded-[8px] shrink-0 w-full`} style={{ height: `${bar.height}px` }}>
                    <div aria-hidden="true" className="absolute border-4 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="relative shrink-0 size-[14px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              {selected ? (
                <circle cx="7" cy="7" r="5" stroke="#64748B" strokeWidth="4" />
              ) : (
                <circle cx="7" cy="7" r="6" stroke="#E2E9F0" strokeWidth="2" />
              )}
            </svg>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">{level}</p>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center w-[min-content]">
            <p className="leading-[1.6]">{description}</p>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#666666] text-[14px] text-center w-[min-content]">
            <p className="leading-none">{range}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute ${selected ? 'border-[#64748b]' : 'border-[#e2e9f0]'} border border-solid inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

function CoverageOptions() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <CoverageCard
        level="Nízké"
        description="Jezdím občas a stačí mi základní krytí."
        range="(50 mil. – 75 mil.)"
      />
      <CoverageCard
        level="Střední"
        description="Zlatá střední cesta pro každodenní ježdění."
        range="(75 mil. – 150 mil.)"
        selected
      />
      <CoverageCard
        level="Vysoké"
        description="Chci být opravdu v klidu nebo jezdím hodně."
        range="(150 mil. – 300 mil.)"
      />
    </div>
  );
}

function HavarijniPojisteniSection() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#E5E5E5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_10px_0px_rgba(0,168,120,0.15)]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.62%_12.5%_8.58%_12.5%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.873">
                  <path d={svgPaths.p1adf8a00} fill="#00A878" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Havarijní pojištění</p>
            </div>
          </div>
          <div className="bg-[#00A878] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]">
            <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RozsahField() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6]">Rozsah</p>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[452px]">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">All risk</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="#94A3B8" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      </div>
    </div>
  );
}

function SpoluucastField() {
  const [selected, setSelected] = useState<'percent' | 'fixed'>('percent');

  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6]">Spoluúčast</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[453px]">
        <div className="bg-white h-[40px] relative rounded-[8px] shrink-0">
          <div className="content-stretch flex items-center gap-[4px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
            <div 
              className={`${selected === 'percent' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
              onClick={() => setSelected('percent')}
            >
              <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'percent' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
                <p className="leading-[1.6]">%</p>
              </div>
            </div>
            <div 
              className={`${selected === 'fixed' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
              onClick={() => setSelected('fixed')}
            >
              <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'fixed' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
                <p className="leading-[1.6]">Fixní</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
        <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
                <p className="leading-[1.6]">Vyberte</p>
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
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
      </div>
    </div>
  );
}

function HodnotaVozuField() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6]">Hodnota vozu</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[453px]">
        <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
                <p className="leading-[1.6]">0</p>
              </div>
              <div className="flex flex-[1_0_0] min-h-px min-w-px"></div>
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] whitespace-nowrap">
                <p className="leading-[1.6]">Kč</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
        <button
          type="button"
          className="h-[40px] px-[16px] rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity flex items-center bg-[#00A878]"
        >
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[1.6]">Ocenit vůz</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div className="flex flex-col items-start relative shrink-0 w-full">
      <div className="w-full border-t border-[#e2e9f0]" />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[18px] whitespace-nowrap pt-[16px]">
        <p className="leading-[1.6]">Volitelnou připojištění si můžete vybrat v dalším kroku</p>
      </div>
    </div>
  );
}

function FormSection() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-[600px]">
      <PovinneRuceniSection />
      <CoverageOptions />
      <HavarijniPojisteniSection />
      <div className="flex flex-col gap-[24px] w-full">
        <RozsahField />
        <SpoluucastField />
        <HodnotaVozuField />
      </div>
      <Frame1000004687 />
      <AdditionalInfo />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip pb-[80px] px-[99px] relative shrink-0">
      <FormSection />
      <StepButtons backTo="/auto/krok-2" nextTo="/auto/krok-4" containerWidth="600px" />
    </div>
  );
}

export default function CarInsuranceStep3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="auto" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={3} />
      </div>
      <Frame12 />
    </div>
  );
}