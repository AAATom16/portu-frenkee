import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-pw9iw3twdm";
import { PiggyBank } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  unit: string;
  minLabel: string;
  maxLabel: string;
}

function SliderInput({ label, value, onChange, min, max, unit, minLabel, maxLabel }: SliderInputProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
      <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 600 }}>
        {label}
      </p>
      
      {/* Input Display */}
      <div className="bg-white h-[48px] relative rounded-[10px] shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between leading-[1.5] not-italic px-[16px] relative size-full whitespace-nowrap">
            <p className="font-['Mona_Sans',sans-serif] relative shrink-0 text-[#1e1b2e] text-[16px]" style={{ fontWeight: 600 }}>
              {value.toLocaleString('cs-CZ')}
            </p>
            <p className="font-['Mona_Sans',sans-serif] relative shrink-0 text-[#94a3b8] text-[14px]" style={{ fontWeight: 500 }}>
              {unit}
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2.38px_0px_rgba(0,0,0,0.02)]" />
      </div>
      
      {/* Slider Track */}
      <div className="relative w-full">
        <div className="bg-[#e2e9f0] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-full">
          {/* Filled portion */}
          <div 
            className="absolute bg-gradient-to-t from-[#a752a9] h-[6px] left-0 rounded-[3px] to-[#3f2578] to-[200%] top-0"
            style={{ width: `${percentage}%` }}
          />
          {/* Thumb */}
          <div 
            className="absolute bg-white rounded-[10px] size-[20px] top-[-7px]"
            style={{ left: `calc(${percentage}% - 10px)` }}
          >
            <div aria-hidden="true" className="absolute border-2 border-[#3f2578] border-solid inset-[-2px] pointer-events-none rounded-[12px] shadow-[0px_2px_6px_0px_rgba(63,37,120,0.19)]" />
          </div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
      
      {/* Hints */}
      <div className="content-stretch flex font-['Mona_Sans',sans-serif] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#94a3b8] text-[12px] w-full whitespace-nowrap" style={{ fontWeight: 500 }}>
        <p className="relative shrink-0">{minLabel}</p>
        <p className="relative shrink-0">{maxLabel}</p>
      </div>
    </div>
  );
}

export default function InvestmentStep7() {
  const navigate = useNavigate();

  // Form state
  const [investmentHorizon, setInvestmentHorizon] = useState(10);
  const [oneTimeInvestment, setOneTimeInvestment] = useState(100000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [totalDeposit, setTotalDeposit] = useState(0);

  // Calculate total deposit
  useEffect(() => {
    const total = oneTimeInvestment + (monthlyDeposit * 12 * investmentHorizon);
    setTotalDeposit(total);
  }, [investmentHorizon, oneTimeInvestment, monthlyDeposit]);

  const handleContinue = () => {
    navigate("/investice/krok-8");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] relative shrink-0 w-full">
          <StepIndicator currentStep={7} totalSteps={9} />
          
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full max-w-[596px]">
            {/* Section Header */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Nastavení investice</p>
                </div>
              </div>
              
              {/* Form Card */}
              <div className="bg-white relative rounded-[16px] shrink-0 w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative w-full">
                    {/* Investment Horizon */}
                    <SliderInput
                      label="Investiční horizont"
                      value={investmentHorizon}
                      onChange={setInvestmentHorizon}
                      min={1}
                      max={30}
                      unit="let"
                      minLabel="1 rok"
                      maxLabel="30 let"
                    />
                    
                    {/* One-time Investment */}
                    <SliderInput
                      label="Jednorázová investice"
                      value={oneTimeInvestment}
                      onChange={setOneTimeInvestment}
                      min={0}
                      max={1000000}
                      unit="Kč"
                      minLabel="0 Kč"
                      maxLabel="1 000 000 Kč"
                    />
                    
                    {/* Monthly Deposit */}
                    <SliderInput
                      label="Pravidelný měsíční vklad"
                      value={monthlyDeposit}
                      onChange={setMonthlyDeposit}
                      min={0}
                      max={50000}
                      unit="Kč / měsíc"
                      minLabel="0 Kč"
                      maxLabel="50 000 Kč"
                    />
                    
                    {/* Summary Bar */}
                    <div className="bg-[#f8f6fb] relative rounded-[12px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">
                          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                            <PiggyBank className="size-[18px] text-[#7C3AED]" strokeWidth={2} />
                            <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                              Celkový vklad za {investmentHorizon} {investmentHorizon === 1 ? 'rok' : investmentHorizon < 5 ? 'roky' : 'let'}
                            </p>
                          </div>
                          <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px] whitespace-nowrap" style={{ fontWeight: 800 }}>
                            {totalDeposit.toLocaleString('cs-CZ')} Kč
                          </p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#e2d8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-[12px] w-full">
              <button
                onClick={() => navigate("/investice/krok-6")}
                className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer bg-white border border-[#e2e9f0]"
              >
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[#64748b] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Zpět</p>
                </div>
              </button>
              
              <button
                onClick={handleContinue}
                className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] flex-1 cursor-pointer"
                style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}
              >
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Pokračovat</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}