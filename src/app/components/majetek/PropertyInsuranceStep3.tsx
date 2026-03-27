import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-hphq6d7i9y";
import imgChatGptImageFeb82026083207Pm1 from "figma:asset/7fbb9461ffb5d8e96cbc1919a8f42b2fc543bef8.png";
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

function Toggle({ enabled, onClick }: { enabled: boolean; onClick: () => void }) {
  return (
    <div
      className={`content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px] cursor-pointer ${enabled ? "bg-[#00A878] justify-end" : "bg-[#e2e9f0] justify-start"}`}
      onClick={onClick}
    >
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
    </div>
  );
}

function ValueInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
        <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <div className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>{label}</div>
          <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
              />
              <span className="font-['Inter',sans-serif] text-[#1A1A1A] text-[14px] shrink-0">Kč</span>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertyInsuranceStep3() {
  const [householdEnabled, setHouseholdEnabled] = useState(true);
  const [propertyValue, setPropertyValue] = useState("0");
  const [specialItems, setSpecialItems] = useState("0");
  const [fixedEquipment, setFixedEquipment] = useState("0");
  const [nonResidentialItems, setNonResidentialItems] = useState("0");

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
        <StepIndicator currentStep={3} totalSteps={7} />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[99px] py-[24px] relative w-[1000px]">
          {/* Domácnost card */}
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
              <div className="content-stretch flex gap-[10px] items-start p-[12px] relative w-full">
                <div className="h-[110px] relative shrink-0 w-[127px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[128%] left-[-4.75%] max-w-none top-[-8.13%] w-[110.58%]" src={imgChatGptImageFeb82026083207Pm1} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className={`font-['Inter',sans-serif] text-[18px] text-center whitespace-nowrap ${householdEnabled ? "text-[#1A1A1A]" : "text-[#999999]"}`} style={{ fontWeight: 700 }}>
                      Domácnost
                    </div>
                    <Toggle enabled={householdEnabled} onClick={() => setHouseholdEnabled(!householdEnabled)} />
                  </div>
                  <div className={`font-['Inter',sans-serif] text-[14px] w-full ${householdEnabled ? "text-[#1A1A1A]" : "text-[#999999]"}`}>
                    tvoří soubor movitých věcí sloužících k běžnému užívání osobami žijícími ve společné domácnosti v pojištěné nemovitosti.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ValueInput label="Hodnota nemovitosti" value={propertyValue} onChange={setPropertyValue} />
          <ValueInput label="Věci zvláštní hodnoty" value={specialItems} onChange={setSpecialItems} />
          <ValueInput label="Vybavení i věci připevněné" value={fixedEquipment} onChange={setFixedEquipment} />
          <ValueInput label="Věci v nebytových prostorech" value={nonResidentialItems} onChange={setNonResidentialItems} />

          <StepButtons backTo="/majetek/krok-2" nextTo="/majetek/krok-4" />
        </div>
      </div>
    </div>
  );
}