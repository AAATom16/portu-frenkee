import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-qcuxzxv5m7";

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
  subtext?: string;
}

function RadioButton({ selected, onClick, label, subtext }: RadioButtonProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
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
      {subtext && (
        <div className="h-[11px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[24px] relative size-full">
              <div className="content-stretch flex gap-[8px] h-[11px] items-center p-[2px] relative rounded-[2px] shrink-0 w-[225px]">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">{subtext}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <button
      onClick={onChange}
      className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full cursor-pointer"
    >
      <div className={`${checked ? "bg-[#3f2578]" : "bg-white"} relative rounded-[4px] shrink-0 size-[18px]`}>
        {checked && (
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[14px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g>
                  <path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        )}
        <div aria-hidden="true" className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px] ${checked ? "border-[#3f2578]" : "border-[#e2e9f0]"}`} />
      </div>
      <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] text-left" style={{ fontWeight: 400 }}>
        {label}
      </p>
    </button>
  );
}

export default function InvestmentStep5() {
  const navigate = useNavigate();

  // Form state
  const [esgPreference, setEsgPreference] = useState("custom");
  const [sfdrPreference, setSfdrPreference] = useState("min1percent");
  const [taxonomyPreference, setTaxonomyPreference] = useState("min1percent");
  
  const [sustainabilityImpacts, setSustainabilityImpacts] = useState({
    greenhouse: false,
    biodiversity: true,
    water: false,
    waste: false,
    fossil: false,
    energy: false,
    social: false,
  });

  const handleContinue = () => {
    navigate("/investice/krok-6");
  };

  const toggleImpact = (key: keyof typeof sustainabilityImpacts) => {
    setSustainabilityImpacts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={5} totalSteps={9} />
          
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[600px]">
            {/* Section Header */}
            <div className="content-stretch flex flex-col items-start leading-[1.4] not-italic relative shrink-0 text-[#3f2578]">
              <p className="font-['Mona_Sans',sans-serif] relative shrink-0 text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                ESG preference
              </p>
              <p className="font-['Mona_Sans',sans-serif] relative shrink-0 text-[12px]" style={{ fontWeight: 400 }}>
                ESG regulace finančních trhů je stále novinkou, a proto nemalá část investic aktuálně cíle udržitelnosti nesplňuje, nebo je plní jen částečně. Přesto musíme ověřit, jak je pro vás při investování otázka udržitelnosti důležitá.
              </p>
            </div>

            {/* Question 1: ESG kritéria */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Chcete investovat podle environmentálních, sociálních a governance (ESG) kritérií?
              </p>
              <RadioButton 
                selected={esgPreference === "no"} 
                onClick={() => setEsgPreference("no")} 
                label="Ne" 
                subtext="Nechci žádné další dotazy o ESG."
              />
              <RadioButton 
                selected={esgPreference === "porto"} 
                onClick={() => setEsgPreference("porto")} 
                label="Ano,  chci investovat dle ESG přístupu Portu" 
                subtext="Nechci žádné další dotazy o ESG."
              />
              <RadioButton 
                selected={esgPreference === "custom"} 
                onClick={() => setEsgPreference("custom")} 
                label="Chci si vybrat konkrétní přístup v oblasti ESG." 
                subtext="Zodpovím další 3 dotazy o ESG."
              />
            </div>

            {/* Question 2: SFDR */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Chcete investovat do produktů, které provádí udržitelné investice s environmentálním cílem?(tzv. SFDR*)
              </p>
              <RadioButton 
                selected={sfdrPreference === "no"} 
                onClick={() => setSfdrPreference("no")} 
                label="Ne" 
              />
              <RadioButton 
                selected={sfdrPreference === "any"} 
                onClick={() => setSfdrPreference("any")} 
                label="Ano. Jakákoliv míra udržitelnosti" 
              />
              <RadioButton 
                selected={sfdrPreference === "min1percent"} 
                onClick={() => setSfdrPreference("min1percent")} 
                label="Ano. Minimální míra udržitelnosti: 1 %" 
              />
            </div>

            {/* Divider with footnote */}
            <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-0.4px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 0.4">
                    <line stroke="#3F2578" strokeOpacity="0.5" strokeWidth="0.4" x2="600" y1="0.2" y2="0.2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px]" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">*Nařízení (EU) 2019/2088 o zveřejňování informací souvisejících s udržitelností v odvětví finančních služeb</p>
              </div>
            </div>

            {/* Question 3: Taxonomie */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Chcete investovat do produktů, které jsou prospěšné pro životní prostředí a usilují o naplňování alespoň jednoho z environmentálních cílů dle EU nařízení (tzv. taxonomie*)?
              </p>
              <RadioButton 
                selected={taxonomyPreference === "no"} 
                onClick={() => setTaxonomyPreference("no")} 
                label="Ne" 
              />
              <RadioButton 
                selected={taxonomyPreference === "min1percent"} 
                onClick={() => setTaxonomyPreference("min1percent")} 
                label="Ano. Minimální míra udržitelnosti: 1 %" 
              />
            </div>

            {/* Divider with footnote */}
            <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-0.4px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 0.4">
                    <line stroke="#3F2578" strokeOpacity="0.5" strokeWidth="0.4" x2="600" y1="0.2" y2="0.2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px]" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">*Nařízení (EU) 2020/852 ze dne 18. června 2020 o zřízení rámce pro usnadnění udržitelných investic</p>
              </div>
            </div>

            {/* Question 4: Nepříznivé dopady */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 600 }}>
                Jaké nepříznivé dopady na udržitelnost* chcete při svém investování zohledňovat? 
              </p>
              <div className="content-stretch flex flex-col gap-[7px] items-start pb-[14px] relative shrink-0 w-full">
                <Checkbox
                  checked={sustainabilityImpacts.greenhouse}
                  onChange={() => toggleImpact("greenhouse")}
                  label="Emise skleníkových plynů"
                />
                <Checkbox
                  checked={sustainabilityImpacts.biodiversity}
                  onChange={() => toggleImpact("biodiversity")}
                  label="Biodiverzita"
                />
                <Checkbox
                  checked={sustainabilityImpacts.water}
                  onChange={() => toggleImpact("water")}
                  label="Voda (emise do vodních zdrojů)"
                />
                <Checkbox
                  checked={sustainabilityImpacts.waste}
                  onChange={() => toggleImpact("waste")}
                  label="Odpad (poměr nebezpečného odpadu)"
                />
                <Checkbox
                  checked={sustainabilityImpacts.fossil}
                  onChange={() => toggleImpact("fossil")}
                  label="Fosilní paliva"
                />
                <Checkbox
                  checked={sustainabilityImpacts.energy}
                  onChange={() => toggleImpact("energy")}
                  label="Energetická soběstačnost"
                />
                <Checkbox
                  checked={sustainabilityImpacts.social}
                  onChange={() => toggleImpact("social")}
                  label="Sociální a zaměstnanecké záležitosti"
                />
              </div>
            </div>

            {/* Divider with footnote */}
            <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-0.4px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 0.4">
                    <line stroke="#3F2578" strokeOpacity="0.5" strokeWidth="0.4" x2="600" y1="0.2" y2="0.2" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px]" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">*Nařízení (EU) 2019/2088 o zveřejňování informací souvisejících s udržitelností v odvětví finančních služeb</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[12px] w-full max-w-[600px]">
            <button
              onClick={() => navigate("/investice/krok-4")}
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