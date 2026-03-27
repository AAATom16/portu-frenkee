import { Link as RouterLink, useNavigate } from "react-router";
import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-dp9k3x4dps";
import imgRectangle2 from "figma:asset/ccc18e153a8be93d8676ba72633355f81872fbea.png";
import imgFrame from "figma:asset/0d32d0f2a244b8fc4da6e3178e2b4d5d796ce272.png";
import imgMingIconCarFill from "figma:asset/f2317b23cd10fdc751392b4ddd136544c9d7ef84.png";
import imgMingIconAirplaneFill from "figma:asset/0473d944e30eef8c4f63e024f2bce17530d0406c.png";
import imgFrame1000004671 from "figma:asset/580eb3b5c35c115b8934691a6f2a21733e9c49ae.png";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění cizinců</p>
      </div>
    </div>
  );
}

// Selection: Insurance Type
function InsuranceTypeSection({ selected, onSelect }: { selected: string; onSelect: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Výběr pojištění</p>
        </div>
      </div>

      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
        {/* Neodkladná péče */}
        <button
          onClick={() => onSelect("neodkladna")}
          className={`h-[180px] relative rounded-[8px] shrink-0 w-[285px] cursor-pointer hover:border-[#00A878] transition-all ${
            selected === "neodkladna" ? "bg-white" : ""
          }`}
        >
          <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[100px]">
              <div className="absolute left-[-3px] size-[100px] top-[2px]">
                <div className="absolute bg-[#00A878] h-[100px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-21px] mask-size-[100px_100px] top-[21px] w-[101px]" style={{ maskImage: `url('${imgRectangle2}')` }} />
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
              <div className="absolute inset-[8.33%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path clipRule="evenodd" d={svgPaths.p17aa5480} fill={selected === "neodkladna" ? "#00A878" : "#E2E9F0"} fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Neodkladná péče</p>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border ${selected === "neodkladna" ? "border-[#00A878]" : "border-[#e2e9f0]"} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        </button>

        {/* Komplexní péče */}
        <button
          onClick={() => onSelect("komplexni")}
          className={`h-[180px] relative rounded-[9px] shrink-0 w-[285px] cursor-pointer hover:border-[#00A878] transition-all ${
            selected === "komplexni" ? "bg-white" : ""
          }`}
        >
          <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
            <div className="h-[90px] relative shrink-0 w-[96px]" data-name="Frame">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[141.63%] left-[-10.32%] max-w-none top-[-14.66%] w-[118.79%]" src={imgFrame} />
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="radio_button_fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.pbbdde00} fill={selected === "komplexni" ? "#00A878" : "#E2E9F0"} id="Vector_2" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center w-[min-content]" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Komplexní péče</p>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border ${selected === "komplexni" ? "border-[#00A878]" : "border-[#e2e9f0]"} border-solid inset-0 pointer-events-none rounded-[9px]`} />
        </button>
      </div>

      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
          <div className="absolute inset-[8.33%]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="leading-[1.6]">Které státy patří do Evropy?</p>
        </div>
      </div>
    </div>
  );
}

// Gender selection
function GenderSelection({ selected, onSelect, showPregnancyQuestion }: { selected: string; onSelect: (value: string) => void; showPregnancyQuestion: boolean }) {
  const [isPregnant, setIsPregnant] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Typ pojištění</p>
        </div>
      </div>

      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
        {/* Muž */}
        <button
          onClick={() => onSelect("muz")}
          className={`relative rounded-[8px] shrink-0 size-[180px] cursor-pointer hover:border-[#00A878] transition-all ${
            selected === "muz" ? "bg-white" : ""
          }`}
        >
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-end overflow-clip p-[12px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[100px]" data-name="ming_icon/car_fill">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[267.39%] left-[-41.8%] max-w-none top-[-12.23%] w-[179.23%]" src={imgMingIconCarFill} />
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
              <div className="absolute inset-[8.33%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path clipRule="evenodd" d={svgPaths.p17aa5480} fill={selected === "muz" ? "#00A878" : "#E2E9F0"} fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Muž</p>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border ${selected === "muz" ? "border-[#00A878]" : "border-[#e2e9f0]"} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        </button>

        {/* Žena */}
        <button
          onClick={() => onSelect("zena")}
          className={`relative rounded-[8px] shrink-0 size-[180px] cursor-pointer hover:border-[#00A878] transition-all ${
            selected === "zena" ? "bg-white" : ""
          }`}
        >
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-end overflow-clip p-[12px] relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[100px]" data-name="ming_icon/airplane_fill">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[293.69%] left-[-69.57%] max-w-none top-[-13.38%] w-[229.08%]" src={imgMingIconAirplaneFill} />
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="radio_button_fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.pbbdde00} fill={selected === "zena" ? "#00A878" : "#E2E9F0"} id="Vector_2" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center w-[min-content]" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Žena</p>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border ${selected === "zena" ? "border-[#00A878]" : "border-[#e2e9f0]"} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        </button>

        {/* Student */}
        <button
          onClick={() => onSelect("student")}
          className={`relative rounded-[8px] shrink-0 size-[180px] cursor-pointer hover:border-[#00A878] transition-all ${
            selected === "student" ? "bg-white" : ""
          }`}
        >
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-end overflow-clip p-[12px] relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[100px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[304.76%] left-[-43.83%] max-w-none top-[-9.72%] w-[188.58%]" src={imgFrame1000004671} />
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
              <div className="absolute inset-[8.33%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path clipRule="evenodd" d={svgPaths.p17aa5480} fill={selected === "student" ? "#00A878" : "#E2E9F0"} fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center w-[min-content]" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Student</p>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border ${selected === "student" ? "border-[#00A878]" : "border-[#e2e9f0]"} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        </button>
      </div>

      {showPregnancyQuestion && (
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 1">
          <button
            onClick={() => setIsPregnant(!isPregnant)}
            className="bg-white relative rounded-[4px] shrink-0 size-[20px] cursor-pointer"
          >
            <div aria-hidden="true" className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px] ${isPregnant ? "border-[#00A878]" : "border-[#e2e9f0]"}`} />
            {isPregnant && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#00A878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px]">
            Jste těhotná, nebo plánujete otěhotnět v době trvání pojištění?
          </p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Date inputs and health questions
function AdditionalInfo() {
  const [birthDate, setBirthDate] = useState("21.1.2026");
  const [startDate, setStartDate] = useState("21.1.2026");
  const [isProfessional, setIsProfessional] = useState(false);
  const [isInTreatment, setIsInTreatment] = useState(false);
  const [healthStatus, setHealthStatus] = useState("Ano");
  const [duration, setDuration] = useState("vlastni");

  return (
    <>
      {/* Datum narození */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
            <p className="leading-[1.6]">Datum narození</p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[192px]">
          <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]">
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
                <input
                  type="text"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="flex-[1_0_0] font-['Inter',sans-serif] leading-[20px] min-h-px min-w-px bg-transparent border-none outline-none text-[#94a3b8] text-[14px]"
                />
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                    <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Počátek pojištění + checkboxy */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
            <p className="leading-[1.6]">Počátek pojišění</p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[192px]">
          <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]">
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
                <input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="flex-[1_0_0] font-['Inter',sans-serif] leading-[20px] min-h-px min-w-px bg-transparent border-none outline-none text-[#94a3b8] text-[14px]"
                />
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                    <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox - Profesionální sportovec */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            onClick={() => setIsProfessional(!isProfessional)}
            className="bg-white relative rounded-[4px] shrink-0 size-[20px] cursor-pointer"
          >
            <div aria-hidden="true" className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px] ${isProfessional ? "border-[#00A878]" : "border-[#e2e9f0]"}`} />
            {isProfessional && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#00A878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
            Jste profesionální sportovec?
          </p>
        </div>

        {/* Checkbox - Léčíte se? */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            onClick={() => setIsInTreatment(!isInTreatment)}
            className="bg-white relative rounded-[4px] shrink-0 size-[20px] cursor-pointer"
          >
            <div aria-hidden="true" className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px] ${isInTreatment ? "border-[#00A878]" : "border-[#e2e9f0]"}`} />
            {isInTreatment && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#00A878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
            Léčíte se?
          </p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>

        {/* Jste zdráví? */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
              <p className="leading-[1.6]">Jste zdráví?</p>
            </div>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-[192px]">
            <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]">
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
                  <select
                    value={healthStatus}
                    onChange={(e) => setHealthStatus(e.target.value)}
                    className="flex-[1_0_0] font-['Inter',sans-serif] leading-[20px] min-h-px min-w-px bg-transparent border-none outline-none text-[#94a3b8] text-[14px]"
                  >
                    <option value="Ano">Ano</option>
                    <option value="Ne">Ne</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vyberte dobu trvání */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
            <p className="leading-[1.6]">Vyberte dobu trvání</p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full gap-[16px]">
          {["3mesice", "6mesicu", "1rok", "2roky", "vlastni"].map((option) => (
            <button
              key={option}
              onClick={() => setDuration(option)}
              className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0 cursor-pointer"
            >
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute inset-[8.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path clipRule="evenodd" d={svgPaths.p17aa5480} fill={duration === option ? "#00A878" : "#CBD5E1"} fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">
                  {option === "3mesice" && "3 měsíce"}
                  {option === "6mesicu" && "6 měsíců"}
                  {option === "1rok" && "1 rok"}
                  {option === "2roky" && "2 roky"}
                  {option === "vlastni" && "Vlastní hodnota"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ForeignersInsuranceStep1() {
  const navigate = useNavigate();
  const [insuranceType, setInsuranceType] = useState("komplexni");
  const [gender, setGender] = useState("zena");

  const handleSubmit = () => {
    navigate("/cizinci/krok-2");
  };

  return (
    <div className="bg-white min-h-screen relative">
      {/* Decorative doctor image removed */}
      <NavbarHeaderShared activeTab="cizinci" />

      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={1} totalSteps={4} />
          
          <div className="w-full max-w-[592px] flex flex-col gap-[24px]">
            <InsuranceTypeSection selected={insuranceType} onSelect={setInsuranceType} />
            
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.4px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 592 0.4">
                  <line stroke="#e2e9f0" strokeWidth="0.4" x2="592" y1="0.2" y2="0.2" />
                </svg>
              </div>
            </div>

            <GenderSelection selected={gender} onSelect={setGender} showPregnancyQuestion={gender === "zena"} />
            
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.4px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 592 0.4">
                  <line stroke="#e2e9f0" strokeWidth="0.4" x2="592" y1="0.2" y2="0.2" />
                </svg>
              </div>
            </div>

            <AdditionalInfo />

            <button 
              onClick={handleSubmit}
              className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]"
            >
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Zobrazit nabídky</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}