import { Link as RouterLink } from "react-router";
import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-xtgftvxr3l";
import { FirstStepButtons } from "../StepButtons";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění auta</p>
      </div>
    </div>
  );
}

function TechnicalPassUpload() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[8.33%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p13035d50} fill="#94A3B8" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>
          <p className="leading-[1.6]">Nahrejte foto technického průkazu a my za Vás načteme data</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[175px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#64748b] border-dashed inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[36px]">
              <div className="absolute inset-[8.33%_16.67%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
                  <path clipRule="evenodd" d={svgPaths.p1d33a00} fill="#94A3B8" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
                <p>
                  <span className="leading-[1.6]">Vyberte soubor </span>
                  <span className="font-['Inter',sans-serif] leading-[1.6]">nebo jej zde přesuňte</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SPZInput() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[10px]">
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative w-full">
              <div className="bg-[#00A878] h-full relative shrink-0 w-[28px]">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start justify-between px-[7px] py-[9px] relative size-full">
                    <div className="h-[8.806px] relative shrink-0 w-[13.617px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.617 8.806">
                        <path d={svgPaths.p1c5a2700} fill="white" />
                      </svg>
                    </div>
                    <div className="h-[13.809px] relative shrink-0 w-[14.403px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.403 13.809">
                        <path d={svgPaths.p15f6a1c0} fill="#F29E33" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 opacity-50 overflow-clip top-[15px]">
              <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666666] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Zadejte SPZ</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      </div>
      <div className="bg-[#edf2f7] content-stretch flex flex-col h-[48px] items-center justify-center px-[4px] py-[12px] relative rounded-[12px] shrink-0 w-[150px]">
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">Potvrdit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VINInput() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[10px]">
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-h-px min-w-px w-full" />
            <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 opacity-50 overflow-clip top-[15px]">
              <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666666] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Zadejte VIN</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      </div>
      <div className="bg-[#edf2f7] content-stretch flex flex-col h-[48px] items-center justify-center px-[4px] py-[12px] relative rounded-[12px] shrink-0 w-[150px]">
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">Potvrdit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VehicleInfoBox() {
  return (
    <div className="bg-[#f8fafc] h-[175px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between px-[12px] py-[24px] relative size-full">
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
              <p className="leading-[1.6]">Peugot 508</p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[14px] text-center whitespace-nowrap">
              <p className="decoration-solid leading-[1.6] underline">Upravit</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col font-['Inter',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center w-full whitespace-nowrap">
          <div className="flex flex-col justify-center relative shrink-0">
            <p>
              <span className="leading-[1.6]">VIN: </span>
              <span className="font-['Inter',sans-serif] leading-[1.6]">VF38D9HL0BL065925</span>
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p>
              <span className="leading-[1.6]">Datum první registrace: </span>
              <span className="font-['Inter',sans-serif] leading-[1.6]">22. 11. 2011</span>
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[14px] text-center whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Zobrazit více</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EngineVolumeField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
            <p className="leading-[1.6]">Objem motoru</p>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
            <p className="leading-[1.6]">&nbsp;</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
            <p className="leading-[1.6]">*</p>
          </div>
        </div>
        <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
                <p className="leading-[1.6]">1 560</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0">
                  <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[24px]">
                      <div className="absolute inset-[-0.5px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0.5">
                          <line stroke="#94A3B8" strokeWidth="0.5" x2="24" y1="0.25" y2="0.25" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] whitespace-nowrap">
                  <p>
                    <span className="leading-[1.6]">cm<sup>3</sup></span>
                  </p>
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

function KilometersField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]">
            <p className="leading-[1.6]">Počet najetých kilometrů</p>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
            <p className="leading-[1.6]">&nbsp;</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
            <p className="leading-[1.6]">*</p>
          </div>
        </div>
        <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
                <p className="leading-[1.6]">9 843</p>
              </div>
              <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0">
                <div className="flex-none rotate-90">
                  <div className="h-0 relative w-[24px]">
                    <div className="absolute inset-[-0.5px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0.5">
                        <line stroke="#94A3B8" strokeWidth="0.5" x2="24" y1="0.25" y2="0.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] whitespace-nowrap">
                <p className="leading-[1.6]">km</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        </div>
      </div>
    </div>
  );
}

function UsageTypeField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap">
            <p className="leading-[1.6]">Typ použití</p>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
            <p className="leading-[1.6]">&nbsp;</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d60021] text-[14px] whitespace-nowrap">
            <p className="leading-[1.6]">*</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[8.33%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="#94A3B8" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
                <p className="leading-[1.6]">Běžný provoz</p>
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

function Checkbox({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0">
      <div className="relative shrink-0 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p291f4e80} fill="#CBD5E1" fillRule="evenodd" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap">
        <p className="leading-[1.6]">{label}</p>
      </div>
    </div>
  );
}

function AnnualMileageField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap">
            <p className="leading-[1.6]">Roční nájezd</p>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
            <p className="leading-[1.6]">&nbsp;</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d60021] text-[14px] whitespace-nowrap">
            <p className="leading-[1.6]">*</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[8.33%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="#94A3B8" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
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

function InsuranceStartDateField() {
  const today = new Date();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const CZECH_MONTHS = [
    "Leden","Únor","Březen","Duben","Květen","Červen",
    "Červenec","Srpen","Září","Říjen","Listopad","Prosinec"
  ];
  const CZECH_DAYS = ["Po","Út","St","Čt","Pá","So","Ne"];

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Monday = 0
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const handleNextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const handleSelectDay = (day: number) => {
    setSelectedDate(new Date(viewYear, viewMonth, day));
    setShowCalendar(false);
  };

  const formatDate = (d: Date) =>
    `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;

  const isSelected = (day: number) =>
    selectedDate?.getFullYear() === viewYear &&
    selectedDate?.getMonth() === viewMonth &&
    selectedDate?.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === viewYear &&
    today.getMonth() === viewMonth &&
    today.getDate() === day;

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const prevMonthDays = getDaysInMonth(viewYear, viewMonth === 0 ? 11 : viewMonth - 1);

  // Build 6×7 grid
  const cells: { day: number; type: "prev" | "current" | "next" }[] = [];
  for (let i = 0; i < firstDay; i++) cells.push({ day: prevMonthDays - firstDay + 1 + i, type: "prev" });
  for (let i = 1; i <= daysInMonth; i++) cells.push({ day: i, type: "current" });
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) cells.push({ day: i, type: "next" });

  const weeks: typeof cells[] = [];
  for (let i = 0; i < 6; i++) weeks.push(cells.slice(i * 7, i * 7 + 7));

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[4px] relative w-full">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap">
                  <p className="leading-[1.6]">Datum počátku pojištění</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="font-['Inter',sans-serif] leading-[20px] not-italic relative text-[#94a3b8] text-[14px] whitespace-nowrap">
                    {selectedDate ? formatDate(selectedDate) : "21.1.2026"}
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                      <div className="absolute inset-[-12.5%_-6.25%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                          <path
                            d={showCalendar ? "M8.5 4.5L4.5 0.5L0.5 4.5" : "M0.5 0.5L4.5 4.5L8.5 0.5"}
                            stroke="#64748B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Interactive Calendar */}
      {showCalendar && (
        <div className="bg-white rounded-[20px] p-[24px] w-[320px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)] border border-[#edf2f7]">
          {/* Header: month navigation */}
          <div className="flex items-center justify-between mb-[20px]">
            <button
              onClick={handlePrevMonth}
              className="flex items-center justify-center size-[32px] rounded-full hover:bg-[#E8F7F2] transition-colors"
            >
              <svg width="7" height="12" fill="none" viewBox="0 0 7 12">
                <path clipRule="evenodd" d="M6 1L1 6L6 11" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
              </svg>
            </button>
            <span className="font-['Inter',sans-serif] text-[16px] text-[#1A1A1A]">
              {CZECH_MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              onClick={handleNextMonth}
              className="flex items-center justify-center size-[32px] rounded-full hover:bg-[#E8F7F2] transition-colors"
            >
              <svg width="7" height="12" fill="none" viewBox="0 0 7 12">
                <path clipRule="evenodd" d="M1 1L6 6L1 11" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
              </svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-[8px]">
            {CZECH_DAYS.map((d) => (
              <div key={d} className="flex items-center justify-center h-[32px]">
                <span className="font-['Inter',sans-serif] text-[12px] text-[#94a3b8] font-medium">{d}</span>
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="flex flex-col gap-[2px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7">
                {week.map((cell, di) => {
                  const isCurrent = cell.type === "current";
                  const selected = isCurrent && isSelected(cell.day);
                  const todayCell = isCurrent && isToday(cell.day);
                  return (
                    <div key={di} className="flex items-center justify-center h-[36px]">
                      <button
                        onClick={() => isCurrent && handleSelectDay(cell.day)}
                        className={[
                          "flex items-center justify-center size-[32px] rounded-full text-[14px] transition-colors",
                          selected
                            ? "bg-[#00A878] text-white font-medium"
                            : todayCell
                            ? "bg-[#E8F7F2] text-[#00A878] font-medium hover:bg-[#D0EFE5]"
                            : isCurrent
                            ? "text-[#020617] hover:bg-[#E8F7F2] hover:text-[#00A878]"
                            : "text-[#cbd5e1] cursor-default",
                        ].join(" ")}
                        disabled={!isCurrent}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {cell.day}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FormSection() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-[600px]">
      <TechnicalPassUpload />
      
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
        <SPZInput />
        <VINInput />
      </div>
      
      <VehicleInfoBox />
      
      <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
        <EngineVolumeField />
        <KilometersField />
      </div>
      
      <UsageTypeField />
      
      <div className="flex flex-col gap-[12px] w-full">
        <Checkbox label="Bylo vozidlo poškozené  minulosti?" />
        <Checkbox label="Byla první registrace vozidla mimo území ČR?" />
        <Checkbox label="Je vozidlo v dobrém technickém stavu a nepoškozené?" />
        <Checkbox label="Jste prvním majitelem?" />
      </div>
      
      <AnnualMileageField />
      <InsuranceStartDateField />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[80px] px-[99px] relative">
      <FormSection />
      <FirstStepButtons nextTo="/auto/krok-2" />
    </div>
  );
}

export default function CarInsuranceStep1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="auto" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={1} />
      </div>
      <Frame12 />
    </div>
  );
}