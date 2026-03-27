import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-c69enyrdrn";
import ObecneVydaje from "../../../imports/Frame1000004697";
import { StepButtons } from "../StepButtons";

type FormValues = {
  incomeType: string;
  incomeAmount: string;
  expenseType: string;
  expenseAmount: string;
  childrenCount: string;
  monthlyFamilyCosts: string;
  hasPartner: boolean;
};

const initialFormValues: FormValues = {
  incomeType: "",
  incomeAmount: "",
  expenseType: "",
  expenseAmount: "",
  childrenCount: "",
  monthlyFamilyCosts: "",
  hasPartner: false,
};

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
        <p className="leading-[1.6]" style={{ fontWeight: 700 }}>Příjmy</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame20 />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-full">
        <p className="leading-[1.6]">Zadejte všechny měsíční příjmy</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]" style={{ fontWeight: 700 }}>Příjem 1</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[340.25px]">
      <Frame13 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Zaměstnání</p>
          </div>
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

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Typ příjmu</p>
      </div>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="number"
            placeholder="0"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Měsíční částka (Kč)</p>
      </div>
      <Input1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Summary">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">
        <Frame27 />
        <Frame36 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]">
      <Summary />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ Přidat příjem</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[12px] relative size-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]" style={{ fontWeight: 700 }}>Výdaje</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame23 />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-full">
        <p className="leading-[1.6]">Zadejte všechny měsíční výdaje</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Bydlení</p>
          </div>
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

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Obecné výdaje</p>
      </div>
      <Input3 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="number"
            placeholder="0"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Výdaje na bydlení (Kč)</p>
      </div>
      <Input4 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Summary2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Summary">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">
        <Frame42 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]">
      <Summary2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ Přidat výdaj</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-[600px]">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[12px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]" style={{ fontWeight: 700 }}>Rodinná situace</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame22 />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-full">
        <p className="leading-[1.6]">Zadejte informace o vaší rodinné situaci</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="number"
            placeholder="0"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Počet dětí</p>
      </div>
      <Input6 />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="number"
            placeholder="0"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Odhadované měsíční náklady (Kč)</p>
      </div>
      <Input7 />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Pokud neuvedete, použije se součet výdajů</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function PartnerToggle() {
  const [isYes, setIsYes] = useState(false);

  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[87px]" data-name="input">
      <div className="content-stretch flex items-center gap-[4px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div 
          className={`${!isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[8px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setIsYes(false)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${!isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ne</p>
          </div>
        </div>
        <div 
          className={`${isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[8px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setIsYes(true)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ano</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Partner / ka žije ve stejné domácnosti?</p>
      </div>
      <PartnerToggle />
    </div>
  );
}

function Summary3() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Summary">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">
        <Frame53 />
        <Frame30 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]">
      <Summary3 />
    </div>
  );
}

function Frame12({ formValues, setFormValues }: { formValues: FormValues, setFormValues: (values: FormValues) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
      <StepIndicator currentStep={2} />
      <div className="flex flex-col gap-[24px] items-start w-[600px]">
        <Frame46 />
        <Frame45 />
        <Frame24 />
        <Frame56 />
        <ObecneVydaje />
        <Frame50 />
        <Frame51 />
        <Frame52 />
        <StepButtons backTo="/zivotni/krok-1" nextTo="/zivotni/krok-3" />
      </div>
    </div>
  );
}

export default function LifeInsuranceStep2() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full" data-name="Život 2">
      <NavbarHeaderShared activeTab="odpovednost" />
      <HeadingContainer />
      {/* Decorative 3D illustration removed */}
      <Frame12 formValues={formValues} setFormValues={setFormValues} />
    </div>
  );
}