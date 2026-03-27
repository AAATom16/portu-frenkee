import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-bat2004qpz";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-clip-text flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
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
        <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] text-left" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">{label}</p>
        </div>
      </div>
    </button>
  );
}

export default function InvestmentStep4() {
  const navigate = useNavigate();

  // Form state
  const [livingStandard, setLivingStandard] = useState("no");
  const [annualIncome, setAnnualIncome] = useState("under100k");
  const [totalAssets, setTotalAssets] = useState("under100k");
  const [debtPayments, setDebtPayments] = useState("under33");

  const handleContinue = () => {
    navigate("/investice/krok-5");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={4} totalSteps={9} />
          
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[600px]">
            {/* Section Header */}
            <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic relative shrink-0 text-[#3f2578]">
              <p className="font-['Mona_Sans',sans-serif] relative shrink-0 text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                Finanční zázemí
              </p>
              <p className="font-['Mona_Sans',sans-serif] relative shrink-0 text-[12px]" style={{ fontWeight: 400 }}>
                Potřebujeme znát vaši finanční situaci, abychom vám mohli doporučit vhodnou investici vzhledem k vašemu finančnímu zázemí.
              </p>
            </div>

            {/* Question 1: Zhoršila by se vaše životní úroveň */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Zhoršila by se vaše životní úroveň, kdyby hodnota vaší plánované investice značně poklesla?
              </p>
              <RadioButton 
                selected={livingStandard === "no"} 
                onClick={() => setLivingStandard("no")} 
                label="Ne, dopad by byl malý nebo žádný" 
              />
              <RadioButton 
                selected={livingStandard === "slightly"} 
                onClick={() => setLivingStandard("slightly")} 
                label="Mírně, mohlo by ji to negativně ovlivnit." 
              />
              <RadioButton 
                selected={livingStandard === "yes"} 
                onClick={() => setLivingStandard("yes")} 
                label="Ano, moje životní úroveň by výrazně poklesla." 
              />
            </div>

            {/* Question 2: Jaký je přibližně váš pravidelný roční příjem po zdanění? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Jaký je přibližně váš pravidelný roční příjem po zdanění?
              </p>
              <RadioButton 
                selected={annualIncome === "under100k"} 
                onClick={() => setAnnualIncome("under100k")} 
                label="Do 100 000 Kč" 
              />
              <RadioButton 
                selected={annualIncome === "100to500k"} 
                onClick={() => setAnnualIncome("100to500k")} 
                label="100 000 Kč až 500 000 Kč" 
              />
              <RadioButton 
                selected={annualIncome === "500kto1m"} 
                onClick={() => setAnnualIncome("500kto1m")} 
                label="500 000 Kč až 1 000 000 Kč" 
              />
              <RadioButton 
                selected={annualIncome === "over1m"} 
                onClick={() => setAnnualIncome("over1m")} 
                label="1 000 000 Kč a více" 
              />
            </div>

            {/* Question 3: Na kolik odhadujete hodnotu svého majetku? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Na kolik odhadujete hodnotu svého majetku? Včetně hotovosti, movitých věcí, investic a nemovitostí.
              </p>
              <RadioButton 
                selected={totalAssets === "under100k"} 
                onClick={() => setTotalAssets("under100k")} 
                label="Do 100 000 Kč" 
              />
              <RadioButton 
                selected={totalAssets === "100to500k"} 
                onClick={() => setTotalAssets("100to500k")} 
                label="100 000 Kč až 500 000 Kč" 
              />
              <RadioButton 
                selected={totalAssets === "500kto1m"} 
                onClick={() => setTotalAssets("500kto1m")} 
                label="500 000 Kč až 1 000 000 Kč" 
              />
              <RadioButton 
                selected={totalAssets === "1mto10m"} 
                onClick={() => setTotalAssets("1mto10m")} 
                label="1 000 000 Kč až 10 000 000 Kč." 
              />
              <RadioButton 
                selected={totalAssets === "over10m"} 
                onClick={() => setTotalAssets("over10m")} 
                label="10 000 000 Kč a více." 
              />
            </div>

            {/* Question 4: Kolik z vašich měsíčních čistých příjmů vynaložíte na pravidelné splátky */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Kolik z vašich měsíčních čistých příjmů vynaložíte na pravidelné splátky půjček nebo jiných finančních závazků?
              </p>
              <RadioButton 
                selected={debtPayments === "under33"} 
                onClick={() => setDebtPayments("under33")} 
                label="Nic nebo nejvýše třetinu (0 až 33 %)" 
              />
              <RadioButton 
                selected={debtPayments === "33to50"} 
                onClick={() => setDebtPayments("33to50")} 
                label="Něco mezi třetinou a polovinou (33 až 50 %)" 
              />
              <RadioButton 
                selected={debtPayments === "over50"} 
                onClick={() => setDebtPayments("over50")} 
                label="Většinu (nad 50 %)" 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[12px] w-full max-w-[600px]">
            <button
              onClick={() => navigate("/investice/krok-3")}
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
  );
}