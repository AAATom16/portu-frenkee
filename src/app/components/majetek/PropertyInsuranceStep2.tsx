import { useState } from "react";
import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
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

function SegmentedToggle({ 
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => onChange(option)}
              className={`${
                selectedValue === option ? "bg-[#00A878]" : "bg-transparent"
              } flex-1 h-full flex items-center justify-center rounded-[6px] cursor-pointer`}
            >
              <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${
                selectedValue === option ? "text-white" : "text-[#94a3b8]"
              } text-[14px] text-center whitespace-nowrap`} style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">{option}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
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

export default function PropertyInsuranceStep2() {
  const [propertyInsurance, setPropertyInsurance] = useState(false);
  const [disposition, setDisposition] = useState("2+KK");
  const [floorArea, setFloorArea] = useState("110");
  const [apartmentNumber, setApartmentNumber] = useState("0");
  const [location, setLocation] = useState("V rodinném domě");
  const [higherFloor, setHigherFloor] = useState(true);
  const [construction, setConstruction] = useState("Panel");
  const [quality, setQuality] = useState("Standardní");
  const [condition, setCondition] = useState("Dobře udržovaný");
  const [hasBalcony, setHasBalcony] = useState(true);
  const [balconyArea, setBalconyArea] = useState("110");
  const [hasTerrace, setHasTerrace] = useState(false);
  const [garageParking, setGarageParking] = useState(false);
  const [hasElevator, setHasElevator] = useState(false);
  const [parkingSpace, setParkingSpace] = useState(false);
  const [propertyValue, setPropertyValue] = useState("0");

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0 z-10">
        <StepIndicator currentStep={2} totalSteps={7} />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[99px] py-[24px] relative w-[1000px]">
          {/* Heading */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Co budeme pojišťovat?</p>
              </div>
            </div>
          </div>

          {/* Main form content */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {/* Nemovitost card */}
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
                <div className="content-stretch flex gap-[10px] items-start p-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center whitespace-nowrap ${propertyInsurance ? "text-[#1A1A1A]" : "text-[#999999]"}`} style={{ fontWeight: 700 }}>
                          <p className="leading-[1.6]">Nemovitost</p>
                        </div>
                      </div>
                      <Toggle enabled={propertyInsurance} onClick={() => setPropertyInsurance(!propertyInsurance)} />
                    </div>
                    <div className={`flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] w-full ${propertyInsurance ? "text-[#1A1A1A]" : "text-[#999999]"}`}>
                      <p className="leading-[1.6]">tvoří soubor movitých věcí sloužících k běžnému užívání osobami žijícími ve společné domácnosti v pojištěné nemovitosti.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Three fields in a row */}
            <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
              {/* Dispozice bytu */}
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
                    <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                      <p className="leading-[1.6]">Dispozice bytu</p>
                    </div>
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
                        <p className="font-['Inter',sans-serif] leading-[20px] text-[#94a3b8] text-[14px]">{disposition}</p>
                        <svg className="shrink-0" width="9" height="5" fill="none" viewBox="0 0 9 5">
                          <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Podlahová plocha */}
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Podlahová plocha</p>
                  </div>
                  <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex gap-[8px] h-full items-center min-w-[inherit] overflow-clip px-[12px] relative rounded-[inherit]">
                      <input
                        type="text"
                        value={floorArea}
                        onChange={(e) => setFloorArea(e.target.value)}
                        className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
                      />
                      <div className="font-['Inter',sans-serif] text-[#1A1A1A] text-[14px] shrink-0">
                        <span>m</span><sup>2</sup>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
                  </div>
                </div>
              </div>

              {/* Číslo bytu */}
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Číslo bytu</p>
                  </div>
                  <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-[200px]">
                    <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] overflow-clip px-[12px] relative rounded-[inherit] size-full">
                      <input
                        type="text"
                        value={apartmentNumber}
                        onChange={(e) => setApartmentNumber(e.target.value)}
                        className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
                      />
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Umístění bytu */}
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Umístění bytu</p>
                </div>
                <SegmentedToggle 
                  options={["V rodinném domě", "v bytovém domě"]} 
                  selectedValue={location} 
                  onChange={setLocation} 
                />
              </div>
            </div>

            {/* Byt se nachází ve vyšším patře */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Byt se nachází ve vyšším patře</p>
              </div>
              <Toggle enabled={higherFloor} onClick={() => setHigherFloor(!higherFloor)} />
            </div>

            {/* Konstrukce nemovitosti */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Konstrukce nemovitosti</p>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
                  {["Panel", "Dřevo", "Cihla"].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => setConstruction(opt)}
                      className={`flex-1 h-full flex items-center justify-center rounded-[6px] cursor-pointer ${construction === opt ? "bg-[#00A878]" : ""}`}
                    >
                      <div className={`font-['Inter',sans-serif] text-[14px] text-center whitespace-nowrap ${construction === opt ? "text-white" : "text-[#94a3b8]"}`}>
                        {opt}
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            {/* Kvalita bytu */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Kvalita bytu</p>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
                  {["Standardní", "Nadstandard"].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => setQuality(opt)}
                      className={`flex-1 h-full flex items-center justify-center rounded-[6px] cursor-pointer ${quality === opt ? "bg-[#00A878]" : ""}`}
                    >
                      <div className={`font-['Inter',sans-serif] text-[14px] text-center whitespace-nowrap ${quality === opt ? "text-white" : "text-[#94a3b8]"}`}>
                        {opt}
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            {/* Stav bytu */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Stav bytu</p>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
                  {["Dobře udržovaný", "Po rekonstrukci / novostavba", "Potřebuje rekonstrukci"].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => setCondition(opt)}
                      className={`flex-1 h-full flex items-center justify-center rounded-[6px] cursor-pointer ${condition === opt ? "bg-[#00A878]" : ""}`}
                    >
                      <div className={`font-['Inter',sans-serif] text-[14px] text-center whitespace-nowrap ${condition === opt ? "text-white" : "text-[#94a3b8]"}`}>
                        {opt}
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            {/* Balkon a terasa */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full cursor-pointer" onClick={() => setHasBalcony(!hasBalcony)}>
                <Toggle enabled={hasBalcony} onClick={() => setHasBalcony(!hasBalcony)} />
                <div className={`font-['Inter',sans-serif] text-[18px] whitespace-nowrap ${hasBalcony ? "text-[#1A1A1A]" : "text-[#999999]"}`} style={{ fontWeight: 700 }}>
                  Byt má balkon
                </div>
                {hasBalcony && (
                  <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 ml-4">
                    <div className="content-stretch flex gap-[8px] h-full items-center min-w-[inherit] overflow-clip px-[12px] relative rounded-[inherit]">
                      <input
                        type="text"
                        value={balconyArea}
                        onChange={(e) => setBalconyArea(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
                      />
                      <span className="font-['Inter',sans-serif] text-[#1A1A1A] text-[14px] shrink-0">m²</span>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                )}
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full cursor-pointer" onClick={() => setHasTerrace(!hasTerrace)}>
                <Toggle enabled={hasTerrace} onClick={() => setHasTerrace(!hasTerrace)} />
                <div className={`font-['Inter',sans-serif] text-[18px] whitespace-nowrap ${hasTerrace ? "text-[#1A1A1A]" : "text-[#999999]"}`} style={{ fontWeight: 700 }}>
                  Byt má terasu
                </div>
              </div>
            </div>

            {/* Vybavení */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Vybavení domu a bytu</p>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                {[
                  { label: "Garážové stání", state: garageParking, setState: setGarageParking },
                  { label: "V domě je výtah", state: hasElevator, setState: setHasElevator },
                  { label: "Parkovací stání", state: parkingSpace, setState: setParkingSpace },
                ].map(({ label, state, setState }) => (
                  <div key={label} className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 cursor-pointer" onClick={() => setState(!state)}>
                    <Toggle enabled={state} onClick={() => setState(!state)} />
                    <div className={`font-['Inter',sans-serif] text-[18px] whitespace-nowrap ${state ? "text-[#1A1A1A]" : "text-[#999999]"}`} style={{ fontWeight: 700 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hodnota nemovitosti */}
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Hodnota nemovitosti</p>
                </div>
                <div className="font-['Inter',sans-serif] text-[#666666] text-[14px]">
                  Cena, za kterou by bylo možné na trhu koupit stejný byt, stejné kvality, ve stejné lokalitě.
                </div>
                <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
                    <input
                      type="text"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="flex-1 font-['Inter',sans-serif] text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
                    />
                    <span className="font-['Inter',sans-serif] text-[#1A1A1A] text-[14px] shrink-0">Kč</span>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
                </div>
              </div>
            </div>
          </div>

          <StepButtons backTo="/majetek/krok-1" nextTo="/majetek/krok-3" />
        </div>
      </div>
    </div>
  );
}