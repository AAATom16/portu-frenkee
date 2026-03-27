import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-c69enyrdrn";
import { StepButtons } from "../StepButtons";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání životního pojištění</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Zdravotní údaje</p>
      </div>
    </div>
  );
}

function InputHeight() {
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

function HeightField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Výška (cm)</p>
      </div>
      <InputHeight />
    </div>
  );
}

function InputWeight() {
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

function WeightField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Váha (kg)</p>
      </div>
      <InputWeight />
    </div>
  );
}

function InputBirthYear() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="number"
            placeholder="2000"
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function BirthYearField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Rok narození</p>
      </div>
      <InputBirthYear />
    </div>
  );
}

function DisabilityToggle() {
  const [isYes, setIsYes] = useState(false);

  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[87px]" data-name="input">
      <div className="content-stretch flex items-center gap-[4px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div 
          className={`${!isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[8px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setIsYes(false)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${!isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ne</p>
          </div>
        </div>
        <div 
          className={`${isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip px-[8px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => setIsYes(true)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ano</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function DisabilityField() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pobíráte invalidní důchod</p>
      </div>
      <DisabilityToggle />
    </div>
  );
}

function HealthSection() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[12px] shrink-0 w-[600px]" data-name="Summary">
      <Frame13 />
      <HeightField />
      <WeightField />
      <BirthYearField />
      <DisabilityField />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[600px]">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Doplňující informace</p>
      </div>
    </div>
  );
}

function SportsToggle({ onChange }: { onChange: (value: boolean) => void }) {
  const [isYes, setIsYes] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsYes(value);
    onChange(value);
  };

  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[87px]" data-name="input">
      <div className="content-stretch flex items-center gap-[4px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div 
          className={`${!isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => handleToggle(false)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${!isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ne</p>
          </div>
        </div>
        <div 
          className={`${isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => handleToggle(true)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ano</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function SportDropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Hlavní sport</p>
      </div>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
              <p className="leading-[1.6]">Fotbal</p>
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
    </div>
  );
}

function LevelDropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
        <p className="leading-none">Úroveň</p>
      </div>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
              <p className="leading-[1.6]">Mezinárodní</p>
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
    </div>
  );
}

function AddSportLink() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[12px] relative size-full cursor-pointer">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">+ Přidat další</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SportsSection() {
  const [showSportFields, setShowSportFields] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
      <div className="flex items-center gap-[24px] relative shrink-0 w-full">
        <div className="flex flex-1 flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Sportujete?</p>
        </div>
        <div className="flex-none">
          <SportsToggle onChange={setShowSportFields} />
        </div>
      </div>
      {showSportFields && (
        <>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
            <SportDropdown />
            <LevelDropdown />
          </div>
          <AddSportLink />
        </>
      )}
    </div>
  );
}

function GenericToggle({ onChange }: { onChange: (value: boolean) => void }) {
  const [isYes, setIsYes] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsYes(value);
    onChange(value);
  };

  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[87px]" data-name="input">
      <div className="content-stretch flex items-center gap-[4px] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div 
          className={`${!isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => handleToggle(false)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${!isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ne</p>
          </div>
        </div>
        <div 
          className={`${isYes ? 'bg-[#00A878]' : 'bg-transparent'} flex flex-1 items-center justify-center h-full overflow-clip relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors`}
          onClick={() => handleToggle(true)}
        >
          <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] ${isYes ? 'text-white' : 'text-[#94a3b8]'} whitespace-nowrap`}>
            <p className="leading-[1.6]">Ano</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function TextInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <input
            type="text"
            placeholder={placeholder}
            className="flex-[1_0_0] font-['Inter',sans-serif] min-h-px min-w-px text-[#94a3b8] text-[14px] leading-[1.6] bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function TreatmentSection() {
  const [showTreatmentField, setShowTreatmentField] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
      <div className="flex items-center gap-[24px] relative shrink-0 w-full">
        <div className="flex flex-1 flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Léčíte se s něčím dlouhodobě?</p>
        </div>
        <div className="flex-none">
          <GenericToggle onChange={setShowTreatmentField} />
        </div>
      </div>
      {showTreatmentField && (
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
            <p className="leading-none">S čím?</p>
          </div>
          <TextInput placeholder="Akutní deprese" />
        </div>
      )}
    </div>
  );
}

function MedicationSection() {
  const [showMedicationField, setShowMedicationField] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
      <div className="flex items-center gap-[24px] relative shrink-0 w-full">
        <div className="flex flex-1 flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Berete pravidelně léky?</p>
        </div>
        <div className="flex-none">
          <GenericToggle onChange={setShowMedicationField} />
        </div>
      </div>
      {showMedicationField && (
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
            <p className="leading-none">Jaké ?</p>
          </div>
          <TextInput placeholder="Gumídky" />
        </div>
      )}
    </div>
  );
}

function AddMoreLink() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-[12px] relative size-full cursor-pointer">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">+ Přidat více</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function YearDropdown() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">2016</p>
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

function WorkDisabilitySection() {
  const [showDisabilityField, setShowDisabilityField] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
      <div className="flex items-center gap-[24px] relative shrink-0 w-full">
        <div className="flex flex-1 flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Byl jste někdy v posledních 10 letech v pracovní neschopnosti déle než 14 dní?</p>
        </div>
        <div className="flex-none">
          <GenericToggle onChange={setShowDisabilityField} />
        </div>
      </div>
      {showDisabilityField && (
        <>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
              <p className="leading-none">Důvod</p>
            </div>
            <TextInput placeholder="Chybí mi noha" />
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
              <p className="leading-none">Ve kterém roce?</p>
            </div>
            <YearDropdown />
          </div>
        </>
      )}
    </div>
  );
}

function CurrentDisabilitySection() {
  return (
    <div className="flex items-center gap-[24px] relative shrink-0 w-[600px]">
      <div className="flex flex-1 flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Jste momentálně v pracovní neschopnosti?</p>
      </div>
      <div className="flex-none">
        <GenericToggle onChange={() => {}} />
      </div>
    </div>
  );
}

function SmokingSection() {
  const [showSmokingField, setShowSmokingField] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
      <div className="flex items-center gap-[24px] relative shrink-0 w-full">
        <div className="flex flex-1 flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Kouříte?</p>
        </div>
        <div className="flex-none">
          <GenericToggle onChange={setShowSmokingField} />
        </div>
      </div>
      {showSmokingField && (
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-center whitespace-nowrap">
            <p className="leading-none">Včetně elektronických cigaret</p>
          </div>
          <TextInput placeholder="Ne" />
        </div>
      )}
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
      <StepIndicator currentStep={3} />
      <div className="flex flex-col gap-[24px] items-start w-[600px]">
        <HealthSection />
        <Frame14 />
        <SportsSection />
        <TreatmentSection />
        <MedicationSection />
        <WorkDisabilitySection />
        <CurrentDisabilitySection />
        <SmokingSection />
        <StepButtons backTo="/zivotni/krok-2" nextTo="/zivotni/krok-4" />
      </div>
    </div>
  );
}

export default function LifeInsuranceStep3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full" data-name="Život 3">
      <NavbarHeaderShared activeTab="odpovednost" />
      <HeadingContainer />
      {/* Decorative 3D illustration removed */}
      <Frame12 />
    </div>
  );
}