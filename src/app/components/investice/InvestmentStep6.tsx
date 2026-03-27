import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-irupns2xiy";
import { Star } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g>
          <path d={svgPaths.p182c1900} fill="#30AF77" />
        </g>
      </svg>
    </div>
  );
}

interface InvestmentCardProps {
  title: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  buttonVariant?: "primary" | "secondary";
  onContinue: () => void;
}

function InvestmentCard({ title, description, features, isRecommended = false, buttonVariant = "secondary", onContinue }: InvestmentCardProps) {
  return (
    <div className={`bg-white content-stretch flex flex-col items-center justify-center relative rounded-[12px] w-full overflow-hidden ${isRecommended ? "border-4 border-[#3f2578]" : "border border-[#e2e9f0]"}`}
      style={{ boxShadow: "0px 4px 4px 0px rgba(63,37,120,0.1), 0px 4px 4px 0px rgba(63,37,120,0.05)" }}
    >
      {isRecommended && (
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="content-stretch flex flex-col items-center px-[20px] py-[12px] relative w-full" style={{ backgroundImage: "linear-gradient(41.9423deg, rgb(71, 40, 124) 1.6639%, rgb(129, 73, 226) 164.65%)" }}>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative">
                    <Star className="size-[20px] text-white fill-white" />
                    <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white" style={{ fontWeight: 700 }}>
                      <p className="leading-[1.6]">Doporučeno pro vás</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full justify-center">
              <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">{title}</p>
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[1.4] not-italic relative text-[#3f2578] text-[18px]" style={{ fontWeight: 400 }}>
                <p>{description}</p>
              </div>
            </div>
            
            {features.map((feature, index) => (
              <div key={index} className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[11px] items-start relative w-full">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[1.4] not-italic relative text-[#3f2578] text-[18px] flex-1" style={{ fontWeight: 400 }}>
                    <p>{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={onContinue}
          className={`h-[48px] relative rounded-[12px] shrink-0 w-full cursor-pointer ${
            buttonVariant === "primary" 
              ? "content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px]" 
              : ""
          }`}
          style={buttonVariant === "primary" ? {
            backgroundImage: "linear-gradient(263.18deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)"
          } : {}}
        >
          {buttonVariant === "primary" ? (
            <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          ) : (
            <>
              <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Pokračovat</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#64748b] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function InvestmentStep6() {
  const navigate = useNavigate();

  const handleContinue = (option: string) => {
    // Store selected option if needed
    console.log("Selected investment option:", option);
    navigate("/investice/krok-7");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] relative shrink-0 w-full">
          <StepIndicator currentStep={6} totalSteps={9} />
          
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[522px]">
            {/* Nabídka investic Header */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[510px]">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Nabídka investic</p>
                </div>
              </div>
            </div>
            
            {/* Recommended Investment Card */}
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <InvestmentCard
                title="Portfolio od Portu"
                description="Portfolia skládá a řídí Portu za vás, abyste se nemuseli o nic starat."
                features={[
                  "Žádné starosti",
                  "Průměrný výnos za posledních 10 let 10,27 % ročně",
                  "Také v odpovědné variantě"
                ]}
                isRecommended={true}
                buttonVariant="primary"
                onContinue={() => handleContinue("porto-portfolio")}
              />
            </div>
            
            {/* Další možnosti Header */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[510px]">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Další možnosti</p>
                </div>
              </div>
            </div>
            
            {/* Other Investment Options - Vertical Layout */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <InvestmentCard
                title="Investiční rezerva"
                description="Zhodnocujte konzervativně vaše úspory díky úročené hotovosti."
                features={[
                  "Nejkonzervativnější produkt",
                  "Úrok v Kč 3,20 % a € 1,70 % p.a.",
                  "Ochrana před inflací"
                ]}
                onContinue={() => handleContinue("investment-reserve")}
              />
            </div>
            
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <InvestmentCard
                title="WOOD realitní fond"
                description="Realitní fond od WOOD & Company investuje do sektoru komerčních nemovitostí s cílovým výnosem 7-9 % ročně."
                features={[
                  "Pro konzervativní i dynamické investory",
                  "Cílový výnos 7-9 % ročně",
                  "Minimální investice 100 Kč"
                ]}
                onContinue={() => handleContinue("wood-fund")}
              />
            </div>
            
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <InvestmentCard
                title="Portfolio podle vás"
                description="Portfolio si skládáte sami z ETF a akcií nebo si vyberete z tematických balíčků."
                features={[
                  "Výběr z akcií, ETF i kryptoměn",
                  "Volitelné měnové zajištění",
                  "Pokročilé možnosti rebalance"
                ]}
                onContinue={() => handleContinue("custom-portfolio")}
              />
            </div>
            
            {/* Buttons */}
            <div className="flex gap-[12px] w-full max-w-[522px]">
              <button
                onClick={() => navigate("/investice/krok-5")}
                className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer bg-white border border-[#e2e9f0]"
              >
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[#64748b] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Zpět</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}