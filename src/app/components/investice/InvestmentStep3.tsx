import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-ftcni2me6t";

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
                <path d={svgPaths.pbbdde00} fill="#64748B" />
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

export default function InvestmentStep3() {
  const navigate = useNavigate();

  // Form state
  const [purpose, setPurpose] = useState("protect");
  const [volatility, setVolatility] = useState("notBother");
  const [threshold, setThreshold] = useState("noCancel");
  const [reaction, setReaction] = useState("buyMore");

  const handleContinue = () => {
    navigate("/investice/krok-4");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={3} totalSteps={9} />
          
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[600px]">
            {/* Section Header */}
            <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A]">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                Postoj k riziku
              </p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[12px] text-[#666666]" style={{ fontWeight: 400 }}>
                Váš postoj k riziku nám napovídá, jaká je vaše ochota a vůle riskovat peníze za účelem jejich zhodnocení.
              </p>
            </div>

            {/* Question 1: Co je účelem vašich investic? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Co je účelem vašich investic?
              </p>
              <RadioButton 
                selected={purpose === "protect"} 
                onClick={() => setPurpose("protect")} 
                label="Primárně ochránit své investované prostředky" 
              />
              <RadioButton 
                selected={purpose === "mildGrowth"} 
                onClick={() => setPurpose("mildGrowth")} 
                label="Mírně zhodnotit své prostředky a minimalizovat riziko ztráty" 
              />
              <RadioButton 
                selected={purpose === "growth"} 
                onClick={() => setPurpose("growth")} 
                label="Zhodnotit své prostředky s vědomím vyšší pravděpodobnosti případné ztráty" 
              />
              <RadioButton 
                selected={purpose === "highGrowth"} 
                onClick={() => setPurpose("highGrowth")} 
                label="Výrazně zhodnotit své prostředky i za cenu velmi vysoké kolísavosti hodnoty investice" 
              />
            </div>

            {/* Question 2: Jak moc vám vadí krátkodobé a mnohdy značné kolísání hodnoty vaší investice oběma směry? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px]" style={{ fontWeight: 600 }}>
                Jak moc vám vadí krátkodobé a mnohdy značné kolísání hodnoty vaší investice oběma směry?
              </p>
              <RadioButton 
                selected={volatility === "notBother"} 
                onClick={() => setVolatility("notBother")} 
                label="Vůbec mi nevadí" 
              />
              <RadioButton 
                selected={volatility === "ratherNot"} 
                onClick={() => setVolatility("ratherNot")} 
                label="Spíše mi nevadí" 
              />
              <RadioButton 
                selected={volatility === "neutral"} 
                onClick={() => setVolatility("neutral")} 
                label="Mám k tomu neutrální postoj" 
              />
              <RadioButton 
                selected={volatility === "ratherBother"} 
                onClick={() => setVolatility("ratherBother")} 
                label="Spíše mi vadí" 
              />
              <RadioButton 
                selected={volatility === "definitely"} 
                onClick={() => setVolatility("definitely")} 
                label="Rozhodně mi vadí." 
              />
            </div>

            {/* Question 3: Hodnota investice může růst i klesat... */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px]" style={{ fontWeight: 600 }}>
                Hodnota investice může růst i klesat. O kolik by se celková hodnota vaší investice musela snížit, abyste začali přemýšlet o tom, že investici zrušíte?
              </p>
              <RadioButton 
                selected={threshold === "noCancel"} 
                onClick={() => setThreshold("noCancel")} 
                label="O rušení nepřemýšlím, dokud nevyprší plánovaný investiční horizont" 
              />
              <RadioButton 
                selected={threshold === "10plus"} 
                onClick={() => setThreshold("10plus")} 
                label="O 10 % a více" 
              />
              <RadioButton 
                selected={threshold === "20plus"} 
                onClick={() => setThreshold("20plus")} 
                label="O 20 % a více" 
              />
              <RadioButton 
                selected={threshold === "33plus"} 
                onClick={() => setThreshold("33plus")} 
                label="O 33 % a více" 
              />
              <RadioButton 
                selected={threshold === "50plus"} 
                onClick={() => setThreshold("50plus")} 
                label="O 50 % a více" 
              />
            </div>

            {/* Question 4: Jaká by byla vaše reakce, pokud by se hodnota vaší investice propadla o 10 % během několika dní? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px]" style={{ fontWeight: 600 }}>
                Jaká by byla vaše reakce, pokud by se hodnota vaší investice propadla o 10 % během několika dní?
              </p>
              <RadioButton 
                selected={reaction === "buyMore"} 
                onClick={() => setReaction("buyMore")} 
                label="Využiji této příležitosti a nakoupím více za nižší ceny" 
              />
              <RadioButton 
                selected={reaction === "wait"} 
                onClick={() => setReaction("wait")} 
                label="Počkám na další vývoj, dokud se hodnota nevrátí" 
              />
              <RadioButton 
                selected={reaction === "sellPart"} 
                onClick={() => setReaction("sellPart")} 
                label="Prodám část své investice" 
              />
              <RadioButton 
                selected={reaction === "sellAll"} 
                onClick={() => setReaction("sellAll")} 
                label="Okamžitě celou svou investici prodám a budu raději držet hotovost" 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[12px] w-full max-w-[600px]">
            <button
              onClick={() => navigate("/investice/krok-2")}
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