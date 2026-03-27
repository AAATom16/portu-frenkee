import { useState } from "react";
import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-k5er4lmqkr";
import svgPathsRadio from "../../../imports/svg-x9z7j45il0";
import imgMingIconCarFill from "figma:asset/d1627ecc5ccc18d77d88bcbef11aabe8bbc10678.png";
import imgGeminiGeneratedImage20Xl8B20Xl8B20Xl1 from "figma:asset/d687bd0494c1fc5b7a15fab19241488848a79c2e.png";
import imgMingIconCarFill1 from "figma:asset/365911fcda6c1c916c637e400c7e3c290d9eb6dd.png";
import { FirstStepButtons } from "../StepButtons";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online pojištění majetku</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-left" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Základní údaje o nemovitosti</p>
      </div>
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Jakou nemovitost chcete pojistit?</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function PropertyTypeOption({ image, label, isSelected, onClick }: { image: string; label: string; isSelected: boolean; onClick: () => void }) {
  const getImageStyle = () => {
    if (label === "Byt") {
      return "absolute h-[177.44%] left-[2.35%] max-w-none top-[-37.3%] w-[91.48%]";
    } else if (label === "Dům") {
      return "absolute h-[170.45%] left-0 max-w-none top-[-29.6%] w-full";
    } else {
      return "absolute h-[161.34%] left-[3.98%] max-w-none top-[-22.09%] w-[92.04%]";
    }
  };

  const getImageContainerStyle = () => {
    if (label === "Byt") {
      return "h-[174px] relative shrink-0 w-[225px]";
    } else if (label === "Dům") {
      return "h-[176px] relative shrink-0 w-[200px]";
    } else {
      return "h-[172px] relative shrink-0 w-[201px]";
    }
  };

  return (
    <div 
      className={`flex-[1_0_0] h-[250px] min-h-px min-w-px relative rounded-[8px] cursor-pointer ${isSelected ? "bg-white" : ""}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-end p-[12px] relative size-full">
          <div className={getImageContainerStyle()}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className={getImageStyle()} src={image} />
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[16px]">
            {isSelected ? (
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPathsRadio.pbbdde00} fill="var(--fill-0, #64748B)" id="Vector_2" />
                </g>
              </svg>
            ) : (
              <div className="absolute inset-[8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path clipRule="evenodd" d={svgPathsRadio.p17aa5480} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">{label}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border ${isSelected ? "border-[#64748b]" : "border-[#e2e9f0]"} border-solid inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

function SegmentedToggle({ 
  options, 
  selectedValue, 
  onChange,
  fullWidth = false
}: { 
  options: string[]; 
  selectedValue: string; 
  onChange: (value: string) => void;
  fullWidth?: boolean;
}) {
  return (
    <div className={`bg-white h-[40px] relative rounded-[8px] shrink-0 ${fullWidth ? "w-full" : ""}`}>
      <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip p-[4px] relative rounded-[inherit]">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => onChange(option)}
            className={`flex-1 h-full flex items-center justify-center rounded-[6px] cursor-pointer transition-colors ${
              selectedValue === option
                ? "bg-[#00A878]"
                : "bg-transparent"
            }`}
          >
            <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${
              selectedValue === option ? "text-white" : "text-[#94a3b8]"
            } text-[14px] whitespace-nowrap`}>
              <p className="leading-[1.6]">{option}</p>
            </div>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function LabelContainer1({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">{label}</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function AddressSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
          <p className="leading-[1.6]">Adresa</p>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
          <p className="font-['Inter',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
        </div>
      </div>
      
      <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0 w-full">
        {/* Adresa input */}
        <div className="bg-white h-[40px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[0px]">
                <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px]">Adresa</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[8.33%_11.99%_11.99%_8.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1213 19.1213">
                    <path clipRule="evenodd" d={svgPaths.p314c2c80} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" id="vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
        
        {/* Stát input */}
        <div className="bg-white h-[40px] relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[0px]">
                <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px]">Stát</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                    <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
        
        {/* Město and Směrovací číslo row */}
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="bg-white h-[40px] relative shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[0px]">
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px]">Město</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="bg-white h-[40px] relative shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[0px]">
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px]">Směrovací číslo</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
        </div>
        
        {/* Katastrální území and Číslo parcely row */}
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="bg-white h-[40px] relative rounded-bl-[12px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[0px]">
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px]">Katastrální území</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-bl-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="bg-white h-[40px] relative rounded-br-[12px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[0px]">
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px]">Číslo parcely</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-br-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleSwitchField({ label }: { label: string }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">{label}</p>
      </div>
      <div className="flex-1" />
      <div
        onClick={() => setIsOn(!isOn)}
        className={`relative h-[24px] w-[44px] rounded-full cursor-pointer transition-colors ${
          isOn ? "bg-[#00A878]" : "bg-[#cbd5e1]"
        }`}
      >
        <div
          className={`absolute top-[2px] h-[20px] w-[20px] rounded-full bg-white transition-transform ${
            isOn ? "translate-x-[22px]" : "translate-x-[2px]"
          }`}
        />
      </div>
    </div>
  );
}

export default function PropertyInsuranceStep1() {
  const [propertyType, setPropertyType] = useState("Dům");
  const [ownership, setOwnership] = useState("Vlastník");
  const [renting, setRenting] = useState("Ne");
  const [ownershipType, setOwnershipType] = useState("Osobní");
  const [parcelType, setParcelType] = useState("Stavební");

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      
      <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[99px] py-[24px] relative shrink-0 w-[1000px]">
        <Frame17 />
        
        {/* Property Type Selection */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <LabelContainer />
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <PropertyTypeOption 
              image={imgMingIconCarFill} 
              label="Byt" 
              isSelected={propertyType === "Byt"}
              onClick={() => setPropertyType("Byt")}
            />
            <PropertyTypeOption 
              image={imgGeminiGeneratedImage20Xl8B20Xl8B20Xl1} 
              label="Dům" 
              isSelected={propertyType === "Dům"}
              onClick={() => setPropertyType("Dům")}
            />
            <PropertyTypeOption 
              image={imgMingIconCarFill1} 
              label="Chata, chalupa" 
              isSelected={propertyType === "Chata, chalupa"}
              onClick={() => setPropertyType("Chata, chalupa")}
            />
          </div>
        </div>
        
        {/* Ownership and Renting */}
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <LabelContainer1 label="Vztah k nemovitosti" />
            <SegmentedToggle 
              options={["Vlastník", "Nájemce"]} 
              selectedValue={ownership} 
              onChange={setOwnership} 
              fullWidth={true}
            />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <LabelContainer1 label="Pronajímáte nemovitost" />
            <SegmentedToggle 
              options={["Ne", "Ano"]} 
              selectedValue={renting} 
              onChange={setRenting} 
              fullWidth={true}
            />
          </div>
        </div>
        
        {/* Ownership Type */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <LabelContainer1 label="Druh vlastnictví" />
          <SegmentedToggle 
            options={["Osobní", "Družstevní"]} 
            selectedValue={ownershipType} 
            onChange={setOwnershipType} 
          />
        </div>
        
        {/* Address Section */}
        <AddressSection />
        
        {/* Type of Lot */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <LabelContainer1 label="Typ parcely" />
          <SegmentedToggle 
            options={["Stavební", "Pozemkové", "Nemá přiřazený typ"]} 
            selectedValue={parcelType} 
            onChange={setParcelType} 
          />
        </div>
        
        {/* Good Condition Toggle */}
        <ToggleSwitchField label="Domácnost je v dobrém stavu a bez chátrajících prvků" />
        
        <div
          className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
          style={{ backgroundColor: "#00A878" }}
        >
          <RouterLink to="/majetek/krok-2" className="no-underline">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}