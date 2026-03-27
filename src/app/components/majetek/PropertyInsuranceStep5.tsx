import { useState } from "react";
import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-i8kycbgw5";
import { StepButtons } from "../StepButtons";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online pojištění majetku</p>
      </div>
    </div>
  );
}

function SegmentedControl({ 
  options, 
  selectedValue, 
  onChange 
}: { 
  options: string[]; 
  selectedValue: string; 
  onChange: (value: string) => void 
}) {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => onChange(option)}
            className={`${
              selectedValue === option 
                ? "bg-[#00A878]" 
                : "bg-transparent"
            } flex-1 min-h-px min-w-px h-full flex items-center justify-center rounded-[6px] cursor-pointer px-[12px]`}
          >
            <div className={`font-['Inter',sans-serif] ${
              selectedValue === option ? "text-white" : "text-[#94a3b8]"
            } text-[14px] text-center whitespace-nowrap`}>
              {option}
            </div>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function FormInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
      {label}
    </div>
  );
}

export default function PropertyInsuranceStep5() {
  const [customerType, setCustomerType] = useState("Občan");

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
        <StepIndicator currentStep={5} totalSteps={7} />
        
        <div className="flex flex-col gap-[24px] items-start w-[600px] relative z-10">
          {/* Informace o vás */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SectionLabel label="Informace o vás" />
            <SegmentedControl 
              options={["Občan", "OSVČ", "Pravnická osoba", "Cizinec"]} 
              selectedValue={customerType} 
              onChange={setCustomerType} 
            />
          </div>

          {/* Jméno */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SectionLabel label="Jméno" />
            <FormInput placeholder="Jméno" />
            <FormInput placeholder="Přijmení" />
          </div>

          {/* Rodné číslo */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SectionLabel label="Rodné číslo" />
            <FormInput placeholder="rodné číslo" />
          </div>

          {/* Kontaktní adresa */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SectionLabel label="Kontaktní adresa" />
            <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0 w-full">
              <div className="bg-white h-[40px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                    <input type="text" placeholder="Adresa" className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none" />
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <div className="absolute inset-[8.33%_11.99%_11.99%_8.33%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1213 19.1213">
                          <path clipRule="evenodd" d={svgPaths.p314c2c80} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px]" />
              </div>
              <div className="bg-white h-[40px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full px-[12px]">
                  <div className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px]">Česká republika</div>
                  <svg width="11" height="7" fill="none" viewBox="0 0 11 7"><path d="M0.5 0.5L5.5 6.5L10.5 0.5" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none" />
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="bg-white h-[40px] relative rounded-bl-[12px] shrink-0 flex-1">
                  <div className="flex items-center px-[12px] size-full">
                    <input type="text" placeholder="Město" className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none" />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-bl-[13px]" />
                </div>
                <div className="bg-white h-[40px] relative rounded-br-[12px] shrink-0 flex-1">
                  <div className="flex items-center px-[12px] size-full">
                    <input type="text" placeholder="PSČ" className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none" />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-br-[13px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktní údaje */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SectionLabel label="Kontaktní údaje" />
            <FormInput placeholder="Telefon" />
            <FormInput placeholder="E-mail" />
          </div>
        </div>
        
        <StepButtons backTo="/majetek/krok-4" nextTo="/majetek/krok-6" />
      </div>
    </div>
  );
}