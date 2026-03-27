import { useState } from "react";
import svgPaths from "../../../imports/svg-apxmyyg335";

interface FormCardInteractiveProps {
  onNext: () => void;
}

type InvestmentGoal = "retirement" | "education" | "emergency" | "custom";

function LucideSunset() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_158_267)">
          <path d="M11 9.16667V1.83333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p14cabf80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.83333 16.5H3.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3333 16.5H20.1667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ad58740} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 20.1667H1.83333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p297e3900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33573d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_158_267">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LucideGraduationCap() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <path d={svgPaths.p1c85f400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 9.16667V14.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p334a2500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideShield() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <path d={svgPaths.p514ae00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideTarget() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_158_262)">
          <path d={svgPaths.p34f9e600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32501bf0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p26528600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_158_262">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GoalButton({ 
  icon, 
  label, 
  isSelected, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  if (isSelected) {
    return (
      <div 
        className="bg-[#f0fdf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] cursor-pointer transition-all"
        onClick={onClick}
      >
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
            <div className="text-[#00A878]">{icon}</div>
            <p className="font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#00A878] text-[12px] text-center whitespace-nowrap">
              {label}
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,168,120,0.12)]" />
      </div>
    );
  }

  return (
    <div 
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] cursor-pointer hover:bg-[#f0fdf8] transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
          <div className="text-[#94a3b8]">{icon}</div>
          <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 600 }}>
            {label}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GoalSelector({ selectedGoal, onSelectGoal }: { selectedGoal: InvestmentGoal; onSelectGoal: (goal: InvestmentGoal) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
        Na co chcete investovat?
      </p>
      <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
        <GoalButton 
          icon={<LucideSunset />} 
          label="Důchod" 
          isSelected={selectedGoal === "retirement"}
          onClick={() => onSelectGoal("retirement")}
        />
        <GoalButton 
          icon={<LucideGraduationCap />} 
          label="Vzdělání dětí" 
          isSelected={selectedGoal === "education"}
          onClick={() => onSelectGoal("education")}
        />
        <GoalButton 
          icon={<LucideShield />} 
          label="Finanční polštář" 
          isSelected={selectedGoal === "emergency"}
          onClick={() => onSelectGoal("emergency")}
        />
        <GoalButton 
          icon={<LucideTarget />} 
          label="Vlastní cíl" 
          isSelected={selectedGoal === "custom"}
          onClick={() => onSelectGoal("custom")}
        />
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  unit,
  min,
  max,
  onChange,
  minLabel,
  maxLabel
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  onChange: (value: number) => void;
  minLabel: string;
  maxLabel: string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;
  const thumbPosition = (percentage / 100) * 100; // percentage of container width

  const formatValue = (val: number) => {
    return val.toLocaleString('cs-CZ');
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 600 }}>
        {label}
      </p>
      <div className="bg-white h-[48px] relative rounded-[10px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between leading-[1.5] not-italic px-[16px] relative size-full whitespace-nowrap">
            <input
              type="number"
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              min={min}
              max={max}
              className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-[16px] bg-transparent border-none outline-none w-[120px]"
              style={{ fontWeight: 600 }}
            />
            <p className="font-['Inter',sans-serif] relative shrink-0 text-[#94a3b8] text-[14px]">
              {unit}
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2.38px_0px_rgba(0,0,0,0.02)]" />
      </div>
      <div className="relative w-full">
        <div className="bg-[#e2e9f0] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-full">
          <div 
            className="absolute bg-[#00A878] h-[6px] left-0 rounded-[3px] top-0 transition-all" 
            style={{ width: `${percentage}%` }}
          />
          <div 
            className="absolute bg-white rounded-[10px] size-[20px] top-[-7px] transition-all cursor-pointer" 
            style={{ left: `calc(${percentage}% - 10px)` }}
            onMouseDown={(e) => {
              const slider = e.currentTarget.parentElement;
              if (!slider) return;
              
              const handleMouseMove = (moveEvent: MouseEvent) => {
                const rect = slider.getBoundingClientRect();
                const x = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
                const newPercentage = (x / rect.width) * 100;
                const newValue = Math.round(min + (newPercentage / 100) * (max - min));
                onChange(Math.max(min, Math.min(max, newValue)));
              };

              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-[-2px] pointer-events-none rounded-[12px] shadow-[0px_2px_6px_0px_rgba(0,168,120,0.2)]" />
          </div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-[6px] opacity-0 cursor-pointer"
        />
      </div>
      <div className="content-stretch flex font-['Inter',sans-serif] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#94a3b8] text-[12px] w-full whitespace-nowrap">
        <p className="relative shrink-0">{minLabel}</p>
        <p className="relative shrink-0">{maxLabel}</p>
      </div>
    </div>
  );
}

function LucidePiggyBank() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p160a6300} stroke="var(--stroke-0, #7C3AED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 7.5H12.0075" stroke="var(--stroke-0, #7C3AED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p66b1b00} stroke="var(--stroke-0, #7C3AED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SummaryBar({ totalDeposit, years }: { totalDeposit: number; years: number }) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('cs-CZ') + ' Kč';
  };

  return (
    <div className="bg-[#F5F5F5] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
            <LucidePiggyBank />
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[13px] whitespace-nowrap">
              Celkový vklad za {years} {years === 1 ? 'rok' : years < 5 ? 'roky' : 'let'}
            </p>
          </div>
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 700 }}>
            {formatAmount(totalDeposit)}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d="M4.16667 10H15.8333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ae0b780} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
    >
      <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 600 }}>
        Pokračovat
      </p>
      <LucideArrowRight />
    </button>
  );
}

export default function FormCardInteractive({ onNext }: FormCardInteractiveProps) {
  const [selectedGoal, setSelectedGoal] = useState<InvestmentGoal>("retirement");
  const [oneTimeInvestment, setOneTimeInvestment] = useState(100000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [years, setYears] = useState(10);

  const totalDeposit = oneTimeInvestment + (monthlyDeposit * 12 * years);

  return (
    <div className="bg-white relative rounded-[16px] w-full max-w-[700px]">
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <GoalSelector selectedGoal={selectedGoal} onSelectGoal={setSelectedGoal} />
        
        <SliderField
          label="Jednorázová investice"
          value={oneTimeInvestment}
          unit="Kč"
          min={0}
          max={1000000}
          onChange={setOneTimeInvestment}
          minLabel="0 Kč"
          maxLabel="1 000 000 Kč"
        />

        <SliderField
          label="Pravidelný měsíční vklad"
          value={monthlyDeposit}
          unit="Kč / měsíc"
          min={0}
          max={50000}
          onChange={setMonthlyDeposit}
          minLabel="0 Kč"
          maxLabel="50 000 Kč"
        />

        <SliderField
          label="Investiční horizont"
          value={years}
          unit="let"
          min={1}
          max={30}
          onChange={setYears}
          minLabel="1 rok"
          maxLabel="30 let"
        />

        <SummaryBar totalDeposit={totalDeposit} years={years} />
        
        <CtaButton onClick={onNext} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}