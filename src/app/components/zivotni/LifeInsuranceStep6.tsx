import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import { StepButtons } from "../StepButtons";
import svgPaths from "../../../imports/svg-0op41sph3d";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání životního pojištění</p>
      </div>
    </div>
  );
}

function BirthNumberField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex items-center gap-[4px]">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">Rodné číslo</p>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[16px]">
          <p className="leading-[1.6]">*</p>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <input
              type="text"
              placeholder="Rodné číslo"
              className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      </div>
    </div>
  );
}

function AddressSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Adresa Header */}
      <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">Adresa</p>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[16px]">
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
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 19L14.65 14.65" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                    <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" />
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
                    <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" />
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

function ContactSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {/* Kontaktní údaje Header */}
      <div className="flex items-center gap-[4px]">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">Kontaktní údaje</p>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[16px]">
          <p className="leading-[1.6]">*</p>
        </div>
      </div>

      {/* Telefon Input */}
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <input
              type="tel"
              placeholder="Telefon"
              className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      </div>

      {/* E-mail Input */}
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
      <StepIndicator currentStep={6} />
      
      <div className="flex flex-col gap-[24px] items-start w-[600px]">
        <BirthNumberField />
        <AddressSection />
        <ContactSection />
      </div>

      <StepButtons backTo="/zivotni/krok-5" nextTo="/zivotni/krok-7" containerWidth="600px" />
    </div>
  );
}

export default function LifeInsuranceStep6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full overflow-x-hidden min-h-screen">
      <NavbarHeaderShared activeTab="odpovednost" />
      <HeadingContainer />
      
      <Frame12 />
    </div>
  );
}