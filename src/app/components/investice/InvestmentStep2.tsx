import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-h29j7se0cc";
import imgInvestmentAdvisor from "figma:asset/34cb462dc4bbab0aa1a1b8b823858f2c1056f9be.png";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

interface RadioButtonProps {
  selected: boolean;
  onClick: () => void;
  label: string;
}

function RadioButton({ selected, onClick, label }: RadioButtonProps) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer"
    >
      <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            {selected ? (
              <g>
                <g />
                <path d={svgPaths.pbbdde00} fill="#00A878" />
              </g>
            ) : (
              <g>
                <path clipRule="evenodd" d={svgPaths.p17aa5480} fill="#CBD5E1" fillRule="evenodd" />
              </g>
            )}
          </svg>
        </div>
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] text-left" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">{label}</p>
        </div>
      </div>
    </button>
  );
}

interface InvestmentToolButtonProps {
  selected: boolean;
  onClick: () => void;
  label: string;
}

function InvestmentToolButton({ selected, onClick, label }: InvestmentToolButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        selected ? "bg-[#f0faf7] border-2 border-[#00A878]" : "bg-white border border-[#e2e9f0]"
      } h-[44px] relative rounded-[10px] shrink-0 px-[10px] py-[14px] cursor-pointer transition-all`}
    >
      <p className={`font-['Inter',sans-serif] leading-[1.3] not-italic text-[12px] text-center whitespace-nowrap ${
        selected ? "text-[#1A1A1A]" : "text-[#64748b]"
      }`} style={{ fontWeight: selected ? 700 : 600 }}>
        {label}
      </p>
    </button>
  );
}

export default function InvestmentStep2() {
  const navigate = useNavigate();

  // Form state
  const [experience, setExperience] = useState("beginner");
  const [duration, setDuration] = useState("less1");
  const [volume, setVolume] = useState("under20k");
  const [knowledge, setKnowledge] = useState("minimal");
  const [selectedTools, setSelectedTools] = useState<string[]>(["savings", "etf"]);

  const handleContinue = () => {
    navigate("/investice/krok-3");
  };

  const toggleTool = (tool: string) => {
    setSelectedTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Background Image - Absolute positioned on right side */}
      <div className="hidden xl:block absolute right-0 top-[200px] w-[400px] h-[600px] pointer-events-none">
        <img 
          src={imgInvestmentAdvisor} 
          alt="Investiční poradce" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={2} totalSteps={9} />
          
          {/* Centered Form Content */}
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full max-w-[600px] mx-auto">
            {/* Section Header */}
            <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A]">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                Zkušenosti s investováním
              </p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[12px] text-[#666666]" style={{ fontWeight: 400 }}>
                Řekněte nám více o vašich znalostech a zkušenostech s investováním, abychom vám doporučili tu nejvhodnější investici.
              </p>
            </div>

            {/* Question 1: Máte už s investováním nějaké zkušenosti? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Máte už s investováním nějaké zkušenosti?
              </p>
              <RadioButton selected={experience === "beginner"} onClick={() => setExperience("beginner")} label="Zatím ne, ale jdu do toho" />
              <RadioButton selected={experience === "some"} onClick={() => setExperience("some")} label="Pár investic už jsem udělal/a" />
              <RadioButton selected={experience === "regular"} onClick={() => setExperience("regular")} label="Investuji pravidelně" />
              <RadioButton selected={experience === "experienced"} onClick={() => setExperience("experienced")} label="S investováním mám mnoho zkušeností" />
            </div>

            {/* Question 2: Jak dlouho už investujete? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Jak dlouho už investujete?
              </p>
              <RadioButton selected={duration === "less1"} onClick={() => setDuration("less1")} label="Méně než 1 rok" />
              <RadioButton selected={duration === "1to5"} onClick={() => setDuration("1to5")} label="1 až 5 let" />
              <RadioButton selected={duration === "5to10"} onClick={() => setDuration("5to10")} label="5 až 10 let" />
              <RadioButton selected={duration === "10plus"} onClick={() => setDuration("10plus")} label="10 let a více" />
            </div>

            {/* Question 3: Jaký byl zhruba roční objem vašich předchozích investic? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Jaký byl zhruba roční objem vašich předchozích investic?
              </p>
              <RadioButton selected={volume === "under20k"} onClick={() => setVolume("under20k")} label="Do 20 000 Kč" />
              <RadioButton selected={volume === "20to100k"} onClick={() => setVolume("20to100k")} label="20 000 až 100 000 Kč" />
              <RadioButton selected={volume === "100to500k"} onClick={() => setVolume("100to500k")} label="100 000 až 500 000 Kč" />
              <RadioButton selected={volume === "500kplus"} onClick={() => setVolume("500kplus")} label="500 000 Kč a více" />
            </div>

            {/* Question 4: Jak hodnotíte své znalosti a zkušenosti v oblasti investování? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Jak hodnotíte své znalosti a zkušenosti v oblasti investování?
              </p>
              <RadioButton 
                selected={knowledge === "minimal"} 
                onClick={() => setKnowledge("minimal")} 
                label="Mé znalosti a zkušenosti jsou minimální nebo žádné" 
              />
              <RadioButton 
                selected={knowledge === "casual"} 
                onClick={() => setKnowledge("casual")} 
                label="O investice se zajímám okrajově (noviny, časopisy, internet aj.) nebo zatím jen krátce" 
              />
              <RadioButton 
                selected={knowledge === "active"} 
                onClick={() => setKnowledge("active")} 
                label="Oblast investic sleduji aktivně již delší dobu (včetně např. investičních kurzů nebo seminářů) a uvědomuji si rizika s touto oblastí spojená." 
              />
              <RadioButton 
                selected={knowledge === "advanced"} 
                onClick={() => setKnowledge("advanced")} 
                label="Mám vysokoškolské vzdělání v oblasti ekonomie či financí. Své znalosti považuji za velmi nadprůměrné." 
              />
              <RadioButton 
                selected={knowledge === "professional"} 
                onClick={() => setKnowledge("professional")} 
                label="Mé současné nebo dřívější povolání se vztahuje k bankovnictví nebo k oblasti investičních služeb." 
              />
            </div>

            {/* Investment Tools Selection */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px]" style={{ fontWeight: 600 }}>
                Z nabídky investičních nástrojů a služeb vyberte ty, u kterých chápete jejich podstatu a rozumíte jejich principům.
              </p>
              
              {/* Row 1 */}
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
                <InvestmentToolButton 
                  selected={selectedTools.includes("savings")} 
                  onClick={() => toggleTool("savings")} 
                  label="Spořicí a termínované vklady" 
                />
                <InvestmentToolButton 
                  selected={selectedTools.includes("funds")} 
                  onClick={() => toggleTool("funds")} 
                  label="Podílové fondy" 
                />
                <InvestmentToolButton 
                  selected={selectedTools.includes("bonds")} 
                  onClick={() => toggleTool("bonds")} 
                  label="Dluhopisy" 
                />
              </div>

              {/* Row 2 */}
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
                <InvestmentToolButton 
                  selected={selectedTools.includes("stocks")} 
                  onClick={() => toggleTool("stocks")} 
                  label="Akcie" 
                />
                <InvestmentToolButton 
                  selected={selectedTools.includes("etf")} 
                  onClick={() => toggleTool("etf")} 
                  label="ETF" 
                />
                <InvestmentToolButton 
                  selected={selectedTools.includes("mezanin")} 
                  onClick={() => toggleTool("mezanin")} 
                  label="Měnové zajištění pomocí derivátů" 
                />
              </div>

              {/* Row 3 */}
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
                <InvestmentToolButton 
                  selected={selectedTools.includes("advisory")} 
                  onClick={() => toggleTool("advisory")} 
                  label="Provádění pokynů na účet zákazníka" 
                />
                <InvestmentToolButton 
                  selected={selectedTools.includes("consultancy")} 
                  onClick={() => toggleTool("consultancy")} 
                  label="Investiční poradenství" 
                />
              </div>

              {/* Row 4 */}
              <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
                <InvestmentToolButton 
                  selected={selectedTools.includes("portfolio")} 
                  onClick={() => toggleTool("portfolio")} 
                  label="Obhospodařování investičního majetku zákazníka (portfolio management)" 
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[12px] w-full max-w-[600px]">
            <button
              onClick={() => navigate("/investice/krok-1")}
              className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer bg-white border border-[#e2e9f0]"
            >
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[#64748b] whitespace-nowrap" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Zpět</p>
              </div>
            </button>
            
            <button
              onClick={handleContinue}
              className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)] flex-1 cursor-pointer bg-[#00A878] hover:opacity-90 transition-opacity"
            >
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Pokračovat</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}