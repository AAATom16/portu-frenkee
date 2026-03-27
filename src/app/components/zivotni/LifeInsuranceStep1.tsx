import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-c69enyrdrn";
import { useState } from "react";
import { FirstStepButtons } from "../StepButtons";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání životního pojištění</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]" style={{ fontWeight: 700 }}>Základní informace o vás</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
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
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="Jméno"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="Přijmení"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Input />
      <Input1 />
    </div>
  );
}

function InputFieldSkeleton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer />
      <Frame23 />
    </div>
  );
}

function InputFieldGeneral() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]" data-name="input_field_general">
      <InputFieldSkeleton />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
        <p className="leading-[1.6]">Datum narození</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
        <p className="leading-[1.6]">*</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lucide/chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
              <path d="M0.5 0.5L4.5 4.5L8.5 0.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <input
            type="date"
            className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
          />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function InputFieldSkeleton1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer1 />
      <Input2 />
    </div>
  );
}

function InputFieldGeneral1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]" data-name="input_field_general">
      <InputFieldSkeleton1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]" style={{ fontWeight: 700 }}>Jaké je vaše zaměstnání?</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[340.25px]">
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame17 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/close_line">
        <div className="absolute inset-[19.32%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7279 14.7279">
            <path clipRule="evenodd" d={svgPaths.p6a20ec0} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EmploymentToggle() {
  const [selected, setSelected] = useState<'employee' | 'osvc' | 'unemployed'>('employee');

  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[400px]" data-name="input">
      <div className="content-stretch flex items-center gap-[4px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div 
          className={`${selected === 'employee' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setSelected('employee')}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'employee' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Zaměstnanec</p>
          </div>
        </div>
        <div 
          className={`${selected === 'osvc' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setSelected('osvc')}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'osvc' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">OSVČ</p>
          </div>
        </div>
        <div 
          className={`${selected === 'unemployed' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setSelected('unemployed')}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'unemployed' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Bez zaměstnání</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="Programátor"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_right">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Profese / zaměstnání</p>
      </div>
      <Input5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame18 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function EmploymentSection() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <EmploymentToggle />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder="Programátor"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Popis</p>
      </div>
      <Input6 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function CitizenshipToggle() {
  const [selected, setSelected] = useState<'cesko' | 'slovensko' | 'jine'>('cesko');

  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="content-stretch flex items-center gap-[6px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div 
          className={`${selected === 'cesko' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setSelected('cesko')}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'cesko' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Česko</p>
          </div>
        </div>
        <div 
          className={`${selected === 'slovensko' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setSelected('slovensko')}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'slovensko' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Slovensko</p>
          </div>
        </div>
        <div 
          className={`${selected === 'jine' ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setSelected('jine')}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${selected === 'jine' ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Jiné</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Občanství</p>
      </div>
      <CitizenshipToggle />
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Summary">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">
        <Frame16 />
        <EmploymentSection />
        <Frame26 />
        <Frame22 />
        <Frame27 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
      <StepIndicator currentStep={1} />
      <div className="flex flex-col gap-[24px] items-start w-[600px]">
        <InputFieldGeneral />
        <InputFieldGeneral1 />
        <Summary />
        <FirstStepButtons nextTo="/zivotni/krok-2" />
      </div>
    </div>
  );
}

export default function LifeInsuranceStep1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full" data-name="Život 1">
      <NavbarHeaderShared activeTab="odpovednost" />
      <HeadingContainer />
      <Frame12 />
    </div>
  );
}