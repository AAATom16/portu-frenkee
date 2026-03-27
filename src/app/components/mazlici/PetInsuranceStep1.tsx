import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import { FirstStepButtons } from "../StepButtons";
import svgPaths from "../../../imports/svg-or72if1kdn";
import imgDog from "figma:asset/7e2fec72cc7b7592e74cbd5914816a77e87b7df8.png";
import imgCat from "figma:asset/e6b2bef7d1b1a2c2188117492df2103e2615951f.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění mazlíčků</p>
      </div>
    </div>
  );
}

function PetTypeCard({ 
  type, 
  image, 
  isSelected, 
  onClick 
}: { 
  type: string; 
  image: string; 
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className="h-[180px] relative rounded-[8px] shrink-0 w-[285px] cursor-pointer hover:border-[#00A878] transition-colors"
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-end overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className={`${type === 'Pes' ? 'h-[116px] w-[87px]' : 'h-[115px] w-[93px]'} relative shrink-0`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt={type} className={`absolute ${type === 'Pes' ? 'h-[113.04%]' : 'h-[122.32%]'} left-0 max-w-none top-0 w-full`} src={image} />
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[8.33%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path 
                clipRule="evenodd" 
                d={svgPaths.p17aa5480} 
                fill={isSelected ? "#00A878" : "#E2E9F0"} 
                fillRule="evenodd" 
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">{type}</p>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border ${isSelected ? 'border-[#00A878] border-2' : 'border-[#e2e9f0]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

function Dropdown({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 500 }}>
        <p className="leading-[1.6]">{label}</p>
      </div>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
              <p className="leading-[1.6]">{placeholder}</p>
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
  );
}

function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 17));
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days: { day: number; isCurrentMonth: boolean }[] = [];
  const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }
  const remainingDays = 35 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ day: i, isCurrentMonth: false });
  }

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 500 }}>
        <p className="leading-[1.6]">Počátek pojištění</p>
      </div>
      
      <div className="bg-white relative rounded-[12px] shrink-0 w-full p-[16px]">
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
        
        <div className="flex flex-col gap-[16px]">
          {/* Header */}
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <button className="overflow-clip relative shrink-0 size-[20px] cursor-pointer bg-transparent border-none p-0">
              <ChevronLeft className="size-[20px] text-[#64748b]" />
            </button>
            <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1A1A1A] text-[16px] text-center" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</p>
            </div>
            <button className="overflow-clip relative shrink-0 size-[20px] cursor-pointer bg-transparent border-none p-0">
              <ChevronRight className="size-[20px] text-[#64748b]" />
            </button>
          </div>
          
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-[8px]">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
              <div key={day} className="flex items-center justify-center h-[32px]">
                <p className="font-['Inter',sans-serif] text-[#64748b] text-[12px] leading-[1.6]">{day}</p>
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-[8px]">
            {days.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-center justify-center h-[32px] ${
                  item.isCurrentMonth && item.day === 17
                    ? 'bg-[#00A878] rounded-full'
                    : ''
                } ${item.isCurrentMonth ? 'cursor-pointer hover:bg-[#f1f5f9] rounded-full' : ''}`}
              >
                <p className={`font-['Inter',sans-serif] text-[14px] leading-[1.6] ${
                  item.isCurrentMonth && item.day === 17
                    ? 'text-white font-medium'
                    : item.isCurrentMonth
                    ? 'text-[#020617]'
                    : 'text-[#94a3b8]'
                }`}>
                  {item.day}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PetInsuranceStep1() {
  const [selectedPetType, setSelectedPetType] = useState<'Pes' | 'Kočka' | null>(null);

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="mazlicici" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={1} totalSteps={4} />
          
          <div className="w-full max-w-[592px] flex flex-col gap-[24px]">
            {/* Pet Type Selection */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Informace o mazlíčkovi</p>
                </div>
              </div>
              
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 justify-center w-full">
                <PetTypeCard
                  type="Pes"
                  image={imgDog}
                  isSelected={selectedPetType === 'Pes'}
                  onClick={() => setSelectedPetType('Pes')}
                />
                <PetTypeCard
                  type="Kočka"
                  image={imgCat}
                  isSelected={selectedPetType === 'Kočka'}
                  onClick={() => setSelectedPetType('Kočka')}
                />
              </div>
            </div>

            {/* Form Fields */}
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
              <Dropdown label="Plemeno mazlíčka" placeholder="Plemeno mazlíčka" />
              <Dropdown label="Věk mazlíčka" placeholder="Věk mazlíčka" />
            </div>

            {/* Calendar */}
            <CalendarComponent />
          </div>

          {/* Button */}
          <div className="w-full max-w-[592px] flex justify-center">
            <FirstStepButtons nextTo="/mazlici/krok-2" />
          </div>
        </div>
      </div>
    </div>
  );
}