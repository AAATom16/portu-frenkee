import { useState } from "react";

interface RiskProfileCardProps {
  onBack: () => void;
  onNext: () => void;
}

interface RiskProfile {
  level: number;
  title: string;
  description: string;
  stocks: number;
  bonds: number;
  expectedReturn: string;
}

const riskProfiles: Record<number, RiskProfile> = {
  1: {
    level: 1,
    title: "Velmi konzervativní",
    description: "Portfolio složené z 10 % akcií a 90 % dluhopisů. Očekávaný roční výnos 2–3 %. Minimální riziko, vhodné pro velmi opatrné investory.",
    stocks: 10,
    bonds: 90,
    expectedReturn: "2–3 %"
  },
  2: {
    level: 2,
    title: "Konzervativní",
    description: "Portfolio složené z 20 % akcií a 80 % dluhopisů. Očekávaný roční výnos 2,5–3,5 %. Nízké riziko s mírným růstovým potenciálem.",
    stocks: 20,
    bonds: 80,
    expectedReturn: "2,5–3,5 %"
  },
  3: {
    level: 3,
    title: "Mírně konzervativní",
    description: "Portfolio složené z 30 % akcií a 70 % dluhopisů. Očekávaný roční výnos 3–4 %. Vhodné pro investory preferující stabilitu.",
    stocks: 30,
    bonds: 70,
    expectedReturn: "3–4 %"
  },
  4: {
    level: 4,
    title: "Vyvážené — Konzervativní",
    description: "Portfolio složené z 40 % akcií a 60 % dluhopisů. Očekávaný roční výnos 4–5 %. Vyváženější přístup s mírnějším rizikem.",
    stocks: 40,
    bonds: 60,
    expectedReturn: "4–5 %"
  },
  5: {
    level: 5,
    title: "Vyvážené",
    description: "Portfolio složené z 50 % akcií a 50 % dluhopisů. Očekávaný roční výnos 5–6 %. Rovnováha mezi rizikem a výnosem.",
    stocks: 50,
    bonds: 50,
    expectedReturn: "5–6 %"
  },
  6: {
    level: 6,
    title: "Vyvážené — Dynamické",
    description: "Portfolio složené z 60 % akcií a 40 % dluhopisů. Očekávaný roční výnos 5,5–7 %. Větší důraz na růst s akceptovatelným rizikem.",
    stocks: 60,
    bonds: 40,
    expectedReturn: "5,5–7 %"
  },
  7: {
    level: 7,
    title: "Vyvážený růst",
    description: "Portfolio složené z 70 % akcií a 30 % dluhopisů. Očekávaný roční výnos 6–8 %. Vhodné pro investory se střednědobým až dlouhodobým horizontem.",
    stocks: 70,
    bonds: 30,
    expectedReturn: "6–8 %"
  },
  8: {
    level: 8,
    title: "Dynamický růst",
    description: "Portfolio složené z 80 % akcií a 20 % dluhopisů. Očekávaný roční výnos 7–9 %. Pro investory s vyšší tolerancí k riziku.",
    stocks: 80,
    bonds: 20,
    expectedReturn: "7–9 %"
  },
  9: {
    level: 9,
    title: "Velmi dynamický",
    description: "Portfolio složené z 90 % akcií a 10 % dluhopisů. Očekávaný roční výnos 8–10 %. Vysoké riziko s potenciálem vysokých výnosů.",
    stocks: 90,
    bonds: 10,
    expectedReturn: "8–10 %"
  },
  10: {
    level: 10,
    title: "Agresivní růst",
    description: "Portfolio složené z 100 % akcií. Očekávaný roční výnos 9–12 %. Maximální riziko pro dlouhodobé investory s vysokou tolerancí volatility.",
    stocks: 100,
    bonds: 0,
    expectedReturn: "9–12 %"
  }
};

function RiskButton({ level, isSelected, onClick }: { level: number; isSelected: boolean; onClick: () => void }) {
  if (isSelected) {
    return (
      <div 
        className="content-stretch flex h-[40px] items-center justify-center overflow-clip relative rounded-[10px] shadow-[0px_2px_8px_0px_rgba(63,37,120,0.25)] shrink-0 flex-1 cursor-pointer transition-all" 
        style={{ backgroundImage: "linear-gradient(182.081deg, rgb(167, 82, 169) 4.2957%, rgb(63, 37, 120) 100.1%)" }}
        onClick={onClick}
      >
        <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">{level}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f0ebf5] flex-1 h-[40px] relative rounded-[10px] cursor-pointer hover:bg-[#e8e0f2] transition-colors" onClick={onClick}>
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] text-center whitespace-nowrap">{level}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2d8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function RiskScale({ selectedLevel, onSelect }: { selectedLevel: number; onSelect: (level: number) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
        <RiskButton 
          key={level} 
          level={level} 
          isSelected={selectedLevel === level}
          onClick={() => onSelect(level)}
        />
      ))}
    </div>
  );
}

function RiskLabels() {
  return (
    <div className="content-stretch flex font-['Mona_Sans_VF:Medium',sans-serif] items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#94a3b8] text-[11px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Konzervativní</p>
      <p className="relative shrink-0">Dynamické</p>
    </div>
  );
}

function RiskInfo({ profile }: { profile: RiskProfile }) {
  return (
    <div className="bg-[#f8f6fb] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[16px] relative w-full">
          <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#3f2578] text-[15px]">
            Rizikový profil {profile.level} — {profile.title}
          </p>
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#64748b] text-[13px]">
            {profile.description}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2d8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function AllocationBar({ stocks, bonds }: { stocks: number; bonds: number }) {
  return (
    <div className="content-stretch flex h-[10px] items-start overflow-clip relative rounded-[5px] shrink-0 w-full">
      <div 
        className="bg-gradient-to-t from-[#a752a9] h-[10px] shrink-0 to-[#3f2578] to-[200%]" 
        style={{ width: `${stocks}%` }}
      />
      <div 
        className="bg-[#d4c8e8] h-[10px] shrink-0" 
        style={{ width: `${bonds}%` }}
      />
    </div>
  );
}

function Legend({ stocks, bonds }: { stocks: number; bonds: number }) {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full">
      <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
        <div className="bg-[#3f2578] rounded-[4px] shrink-0 size-[8px]" />
        <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
          Akcie {stocks} %
        </p>
      </div>
      <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
        <div className="bg-[#d4c8e8] rounded-[4px] shrink-0 size-[8px]" />
        <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
          Dluhopisy {bonds} %
        </p>
      </div>
    </div>
  );
}

function AllocationSection({ stocks, bonds }: { stocks: number; bonds: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[13px] whitespace-nowrap">
        Složení portfolia
      </p>
      <AllocationBar stocks={stocks} bonds={bonds} />
      <Legend stocks={stocks} bonds={bonds} />
    </div>
  );
}

function LucideArrowLeft() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d="M9 14.25L3.75 9L9 3.75" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14.25 9H3.75" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideArrowLeft />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[15px] whitespace-nowrap">
          Zpět
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </button>
  );
}

function LucideArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d="M3.75 9H14.25" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 3.75L14.25 9L9 14.25" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex flex-[1_0_0] gap-[8px] h-[44px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
      style={{ backgroundImage: "linear-gradient(180.362deg, rgb(167, 82, 169) 4.2957%, rgb(63, 37, 120) 100.1%)" }}
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        Pokračovat
      </p>
      <LucideArrowRight />
    </button>
  );
}

function ButtonRow({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
      <BackButton onClick={onBack} />
      <NextButton onClick={onNext} />
    </div>
  );
}

export default function RiskProfileCardInteractive({ onBack, onNext }: RiskProfileCardProps) {
  const [selectedLevel, setSelectedLevel] = useState(7);
  const currentProfile = riskProfiles[selectedLevel];

  return (
    <div className="bg-white relative rounded-[16px] w-full max-w-[700px]">
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#3f2578] text-[22px]">
          Váš rizikový profil
        </p>
        <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#64748b] text-[15px]">
          Na základě dotazníku Portu vám doporučuje rizikový profil 7. Můžete si zvolit i nižší.
        </p>
        <RiskScale selectedLevel={selectedLevel} onSelect={setSelectedLevel} />
        <RiskLabels />
        <RiskInfo profile={currentProfile} />
        <AllocationSection stocks={currentProfile.stocks} bonds={currentProfile.bonds} />
        <ButtonRow onBack={onBack} onNext={onNext} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
