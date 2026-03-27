import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";
import svgPaths from "../../../imports/svg-po0y6r9oua";
import { SlidersHorizontal } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění mazlíčků</p>
      </div>
    </div>
  );
}

interface InsuranceCardProps {
  onContinue: () => void;
}

function InsuranceCard({ onContinue }: InsuranceCardProps) {
  const [responsibilityEnabled, setResponsibilityEnabled] = useState(true);
  const [walletEnabled, setWalletEnabled] = useState(true);

  const basePrice = 1563;
  const responsibilityPrice = responsibilityEnabled ? 25 : 0;
  const walletPrice = walletEnabled ? 20 : 0;
  const totalPrice = basePrice + responsibilityPrice + walletPrice;

  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
            {/* Logo + Title */}
            <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">AXA Comfort premium</p>
                </div>
              </div>
            </div>

            {/* Coverage Details */}
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Pojištění úrazu</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">bez limitu</p>
                </div>
              </div>

              <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Pojištění nemoci</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">500 000 Kč</p>
                </div>
              </div>

              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
                  <p className="leading-[1.6]">Alternativní léčba</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">50 000 Kč</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Chronická onemocnění</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">300 000 kč</p>
                </div>
              </div>

              <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Benefity</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">700 000 kč</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.4px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 0.4">
                  <line id="Line 6" stroke="#e2e9f0" strokeOpacity="1" strokeWidth="0.4" x2="408" y1="0.2" y2="0.2" />
                </svg>
              </div>
            </div>

            {/* Připojištění */}
            <div className="relative rounded-[12px] shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start p-[4px] relative w-full">
                {/* Odpovědnost */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Připojištění</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                        <p className="leading-[1.6]">Odpovědnost</p>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                          <p className="leading-[1.6]">+ 25 Kč</p>
                        </div>
                        <button
                          onClick={() => setResponsibilityEnabled(!responsibilityEnabled)}
                          className={`content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px] transition-all cursor-pointer ${
                            responsibilityEnabled ? "justify-end bg-[#00A878]" : "justify-start bg-[#cbd5e1]"
                          }`}
                        >
                          <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
                        </button>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col font-['Inter',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] text-center whitespace-nowrap">
                      <div className="flex flex-col justify-center relative shrink-0">
                        <ul>
                          <li className="list-disc ms-[21px]">
                            <span className="leading-none">Úmysl do zdraví a majetku (limit 3 mil. Kč / rok)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mazlíček v nouzi */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                        <p className="leading-[1.6]">Mazlíček v nouzi</p>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                          <p className="leading-[1.6]">+ 20 Kč</p>
                        </div>
                        <button
                          onClick={() => setWalletEnabled(!walletEnabled)}
                          className={`content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px] transition-all cursor-pointer ${
                            walletEnabled ? "justify-end bg-[#00A878]" : "justify-start bg-[#cbd5e1]"
                          }`}
                        >
                          <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
                        </button>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] text-center whitespace-nowrap">
                        <ul>
                          <li className="list-disc ms-[21px]">
                            <span className="leading-none">Pomoc v neočekávané životní situaci (limit 5 000 Kč / rok)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pojistné podmínky */}
            <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
                  <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
                    <div className="absolute inset-[8.33%]" data-name="vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price and Continue button */}
      <div className="bg-[#F5F5F5] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">{totalPrice} Kč / měsíčně</p>
              </div>
            </div>
            <button
              onClick={onContinue}
              className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
              data-name="primary"
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

function ComparisonChart() {
  const companies = [
    { name: "AXA", price: 7023, active: true },
    { name: "Axa", price: 10023, active: true },
    { name: "Slavia", price: 10023, active: true },
    { name: "Generali", price: 7023, active: false },
    { name: "AXA", price: 7023, active: false },
    { name: "Axa", price: 10023, active: false },
    { name: "Slavia", price: 10023, active: false },
    { name: "Generali", price: 7023, active: false },
    { name: "Slavia", price: 10023, active: false },
    { name: "AXA", price: 7023, active: false },
    { name: "Generali", price: 7023, active: false },
    { name: "Axa", price: 10023, active: false },
  ];

  const maxPrice = Math.max(...companies.map((c) => c.price));

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Porovnání všech nabídek</p>
      </div>
      
      <div className="content-stretch flex gap-[8px] items-end justify-between relative shrink-0 w-full h-[160px]">
        {companies.map((company, index) => {
          const height = (company.price / maxPrice) * 140;
          return (
            <div key={index} className="flex flex-col items-center gap-[8px] shrink-0">
              <div className="flex flex-col items-center gap-[4px]">
                <p className="font-['Inter',sans-serif] text-[12px] text-[#1A1A1A] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  {company.price.toLocaleString()} Kč
                </p>
                <div
                  className={`w-[48px] rounded-t-[4px] transition-all ${
                    company.active ? "bg-[#00A878]" : "bg-[#e2e9f0]"
                  }`}
                  style={{ height: `${height}px` }}
                />
              </div>
              <p className="font-['Inter',sans-serif] text-[12px] text-[#94a3b8] whitespace-nowrap">
                {company.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PetInsuranceStep2() {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleContinue = () => {
    navigate("/mazlicici/krok-3");
  };

  const handleBack = () => {
    navigate("/mazlicici/krok-1");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="mazlicici" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={2} totalSteps={4} />
          
          {/* Header with title and edit button */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full max-w-[1200px]">
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
              <p className="leading-[1.6]">Dostupné nabídky</p>
            </div>
            <button
              onClick={() => setShowEditModal(true)}
              className="bg-[#00A878] content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <SlidersHorizontal className="size-[20px] text-white" />
              <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>
                Upravit nabídku
              </p>
            </button>
          </div>

          {/* Insurance Cards - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full max-w-[1200px]">
            <InsuranceCard onContinue={handleContinue} />
            <InsuranceCard onContinue={handleContinue} />
            <InsuranceCard onContinue={handleContinue} />
          </div>

          {/* Comparison Chart */}
          <div className="w-full max-w-[1200px] bg-white rounded-[12px] p-[24px]">
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
            <ComparisonChart />
          </div>
        </div>
      </div>
    </div>
  );
}