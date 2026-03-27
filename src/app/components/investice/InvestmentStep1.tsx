import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-18xxs161cb";
import businessmanImage from "figma:asset/38557a17e61d7fa1cccddca0bb129293e6f7aee7.png";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

function LucideSunset() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_158_267)">
          <path d="M11 9.16667V1.83333" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p14cabf80} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.83333 16.5H3.66667" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3333 16.5H20.1667" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ad58740} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 20.1667H1.83333" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p297e3900} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33573d00} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function LucideBaby({ isActive = false }: { isActive?: boolean }) {
  const color = isActive ? "#00A878" : "#94A3B8";
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="6" r="3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 14c-1.5 0-3 1-3 2.5V20h12v-3.5c0-1.5-1.5-2.5-3-2.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 20v-4M15 20v-4" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideBriefcase({ isActive = false }: { isActive?: boolean }) {
  const color = isActive ? "#00A878" : "#94A3B8";
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <rect width="18" height="14" x="3" y="7" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 14h18" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideWallet({ isActive = false }: { isActive?: boolean }) {
  const color = isActive ? "#00A878" : "#94A3B8";
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M20 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 14a2 2 0 1 1 0 0" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideUserAge({ isActive = false }: { isActive?: boolean }) {
  const color = isActive ? "#00A878" : "#94A3B8";
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <circle cx="12" cy="8" r="4" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 8h3M15 6h3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideGraduationCap({ isActive = false }: { isActive?: boolean }) {
  const color = isActive ? "#00A878" : "#94A3B8";
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <path d={svgPaths.p1c85f400} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 9.16667V14.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p334a2500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideShield({ isActive = false }: { isActive?: boolean }) {
  const color = isActive ? "#00A878" : "#94A3B8";
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g>
          <path d={svgPaths.p514ae00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface InvestmentGoalSelectorProps {
  selectedGoal: string;
  onSelectGoal: (goal: string) => void;
}

function InvestmentGoalSelector({ selectedGoal, onSelectGoal }: InvestmentGoalSelectorProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
      {/* Pro sebe */}
      <button
        onClick={() => onSelectGoal("sebe")}
        className={`${
          selectedGoal === "sebe" ? "bg-[#f0faf7] border-2 border-[#00A878]" : "bg-white border border-[#e2e9f0]"
        } flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] transition-all cursor-pointer`}
      >
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
            <LucideSunset />
            <p className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${
              selectedGoal === "sebe" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: selectedGoal === "sebe" ? 700 : 600 }}>
              Pro sebe
            </p>
          </div>
        </div>
      </button>

      {/* Pro sebe a dítě */}
      <button
        onClick={() => onSelectGoal("dite")}
        className={`${
          selectedGoal === "dite" ? "bg-[#f0faf7] border-2 border-[#00A878]" : "bg-white border border-[#e2e9f0]"
        } flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] transition-all cursor-pointer`}
      >
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
            <LucideBaby isActive={selectedGoal === "dite"} />
            <p className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${
              selectedGoal === "dite" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: selectedGoal === "dite" ? 700 : 600 }}>
              Pro sebe a dítě
            </p>
          </div>
        </div>
      </button>

      {/* Pro sebe a firmu */}
      <button
        onClick={() => onSelectGoal("firma")}
        className={`${
          selectedGoal === "firma" ? "bg-[#f0faf7] border-2 border-[#00A878]" : "bg-white border border-[#e2e9f0]"
        } flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] transition-all cursor-pointer`}
      >
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
            <LucideBriefcase isActive={selectedGoal === "firma"} />
            <p className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${
              selectedGoal === "firma" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: selectedGoal === "firma" ? 700 : 600 }}>
              Pro sebe a firmu
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

interface AccountTypeSelectorProps {
  selectedAccount: string;
  onSelectAccount: (account: string) => void;
}

function AccountTypeSelector({ selectedAccount, onSelectAccount }: AccountTypeSelectorProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full">
      {/* Klasický účet */}
      <button
        onClick={() => onSelectAccount("klasicky")}
        className={`${
          selectedAccount === "klasicky" ? "bg-[#f0faf7] border-2 border-[#00A878]" : "bg-white border border-[#e2e9f0]"
        } flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] transition-all cursor-pointer`}
      >
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative size-full">
            <LucideWallet isActive={selectedAccount === "klasicky"} />
            <p className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${
              selectedAccount === "klasicky" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: selectedAccount === "klasicky" ? 700 : 600 }}>
              Klasický účet
            </p>
            <div className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-left w-full ${
              selectedAccount === "klasicky" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: 400 }}>
              <p className="mb-0">✔️ Krátkodobé a dlouhodobé investice</p>
              <p className="mb-0">✔️ Flexibilní vklady a výběry</p>
              <p className="mb-0">✔️ Slevy pro dlouhodobé investice</p>
            </div>
          </div>
        </div>
      </button>

      {/* Důchodový účet (DIP) */}
      <button
        onClick={() => onSelectAccount("duchodovy")}
        className={`${
          selectedAccount === "duchodovy" ? "bg-[#f0faf7] border-2 border-[#00A878]" : "bg-white border border-[#e2e9f0]"
        } flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] transition-all cursor-pointer`}
      >
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative size-full">
            <LucideUserAge isActive={selectedAccount === "duchodovy"} />
            <p className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${
              selectedAccount === "duchodovy" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: selectedAccount === "duchodovy" ? 700 : 600 }}>
              Důchodový účet (DIP)
            </p>
            <div className={`font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-left w-full ${
              selectedAccount === "duchodovy" ? "text-[#1A1A1A]" : "text-[#64748b]"
            }`} style={{ fontWeight: 400 }}>
              <p className="mb-0">✔️ Daňové a poplatkové zvýhodnění</p>
              <p className="mb-0">✔️ Přispívat může i váš zaměstnavatel</p>
              <p className="mb-0">✔️ Podmínka investovat minimálně 10 let (do 60 let věku)</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function InvestmentStep1() {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState("sebe");
  const [age, setAge] = useState("34");
  const [selectedAccount, setSelectedAccount] = useState("klasicky");

  const handleContinue = () => {
    navigate("/investice/krok-2");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={1} totalSteps={9} />
          
          {/* Main Content Container - Centered with max-width */}
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full max-w-[600px]">
            {/* Otázky na úvod */}
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
              Otázky na úvod
            </p>

            {/* Pro koho investice zakládáte? */}
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Pro koho investice zakládáte?
              </p>
              <InvestmentGoalSelector selectedGoal={selectedGoal} onSelectGoal={setSelectedGoal} />
            </div>

            {/* Kolik vám je let? */}
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Kolik vám je let?
              </p>
              <div className="bg-white h-[48px] relative rounded-[10px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-between leading-[1.5] not-italic px-[16px] relative size-full text-[16px] whitespace-nowrap">
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] bg-transparent border-none outline-none"
                      style={{ fontWeight: 600 }}
                    />
                    <p className="font-['Inter',sans-serif] relative shrink-0 text-[#94a3b8]" style={{ fontWeight: 500 }}>let</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2.38px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            {/* S čím chcete začít? */}
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                S čím chcete začít?
              </p>
              <AccountTypeSelector selectedAccount={selectedAccount} onSelectAccount={setSelectedAccount} />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)] shrink-0 cursor-pointer bg-[#00A878] hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}