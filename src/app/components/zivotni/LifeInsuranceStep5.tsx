import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-nal9jy1t60";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";
import UpravidNabidkuModalOverlay from "./UpravidNabidkuModalOverlay";
import ComparisonChart from "../../../imports/Frame1000004692";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání životního pojištění</p>
      </div>
    </div>
  );
}

interface InsuranceCardProps {
  isMiddle?: boolean;
}

function InsuranceCard({ isMiddle }: InsuranceCardProps) {
  const [sportsEnabled, setSportsEnabled] = useState(true);
  const [hospitalizationEnabled, setHospitalizationEnabled] = useState(true);

  return (
    <div className="bg-gradient-to-r from-white to-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      
      {/* Card Content */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
            {/* Logo and Title */}
            <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[71px]">
                  <img alt="AXA logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
                </div>
                <div 
                  className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap"
                  style={{ fontWeight: 700 }}
                >
                  <p className="leading-[1.6]">AXA Comfort premium</p>
                </div>
              </div>
            </div>

            {/* Insurance Details */}
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Úmrtí</p>
                </div>
                <div 
                  className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0"
                  style={{ fontWeight: 700 }}
                >
                  <p className="leading-[1.6]">100 000 Kč</p>
                </div>
              </div>

              <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Invalidita konstantní</p>
                </div>
                <div 
                  className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0"
                  style={{ fontWeight: 700 }}
                >
                  <p>
                    <span className="leading-[1.6]">{`500tis. `}</span>
                    <span className="font-['Inter',sans-serif] leading-[1.6] not-italic" style={{ fontWeight: 400 }}>(pro III. st.)</span>
                  </p>
                </div>
              </div>

              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
                  <p className="leading-[1.6]">Invalidita klesající</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0">
                  <div 
                    className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap"
                    style={{ fontWeight: 700 }}
                  >
                    <p>
                      <span className="leading-[1.6]">{`5 mil. `}</span>
                      <span className="font-['Inter',sans-serif] leading-[1.6] not-italic" style={{ fontWeight: 400 }}>(pro III. st.)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Závažných nemocí</p>
                </div>
                <div 
                  className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0"
                  style={{ fontWeight: 700 }}
                >
                  <p className="leading-[1.6]">300 000 kč</p>
                </div>
              </div>

              <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[1.6]">Trvalé následky</p>
                </div>
                <div 
                  className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0"
                  style={{ fontWeight: 700 }}
                >
                  <p className="leading-[1.6]">700 000 kč</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.4px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 0.4">
                  <line stroke="#E5E5E5" strokeOpacity="1" strokeWidth="0.4" x2="408" y1="0.2" y2="0.2" />
                </svg>
              </div>
            </div>

            {/* Připojištění Section */}
            <div className="relative rounded-[12px] shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start p-[4px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div 
                    className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center whitespace-nowrap"
                    style={{ fontWeight: 700, color: sportsEnabled ? "#1A1A1A" : "#b0b0b0" }}
                  >
                    <p className="leading-[1.6]">Připojištění</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div 
                        className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center whitespace-nowrap"
                        style={{ color: sportsEnabled ? "#1A1A1A" : "#b0b0b0" }}
                      >
                        <p className="leading-[1.6]">Sporty</p>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                        {sportsEnabled && (
                          <div 
                            className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap"
                            style={{ fontWeight: 700 }}
                          >
                            <p className="leading-[1.6]">+ 310 Kč</p>
                          </div>
                        )}
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={sportsEnabled}
                            onChange={(e) => setSportsEnabled(e.target.checked)}
                          />
                          <div className={`${sportsEnabled ? 'bg-[#00A878]' : 'bg-[#cbd5e1]'} content-stretch flex h-[22.5px] items-center ${sportsEnabled ? 'justify-end' : 'justify-start'} overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]`}>
                            <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div 
                      className="content-stretch flex flex-col font-['Inter',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap"
                      style={{ color: sportsEnabled ? "#666666" : "#d1d1d1" }}
                    >
                      <div className="flex flex-col justify-center relative shrink-0">
                        <ul>
                          <li className="list-disc ms-[21px]">
                            <span className="leading-none">Squash - celostátní a mezinárodní úrovně</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <ul>
                          <li className="list-disc ms-[21px]">
                            <span className="leading-none">Smluvní servis bez spoluúčasti</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div 
                        className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center whitespace-nowrap"
                        style={{ color: hospitalizationEnabled ? "#1A1A1A" : "#b0b0b0" }}
                      >
                        <p className="leading-[1.6]">Hospitalizace</p>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                        {hospitalizationEnabled && (
                          <div 
                            className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap"
                            style={{ fontWeight: 700 }}
                          >
                            <p className="leading-[1.6]">+ 110 Kč</p>
                          </div>
                        )}
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={hospitalizationEnabled}
                            onChange={(e) => setHospitalizationEnabled(e.target.checked)}
                          />
                          <div className={`${hospitalizationEnabled ? 'bg-[#00A878]' : 'bg-[#cbd5e1]'} content-stretch flex h-[22.5px] items-center ${hospitalizationEnabled ? 'justify-end' : 'justify-start'} overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]`}>
                            <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div 
                        className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap"
                        style={{ color: hospitalizationEnabled ? "#666666" : "#d1d1d1" }}
                      >
                        <ul>
                          <li className="list-disc ms-[21px]">
                            <span className="leading-none">Limit dnů</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pojistné podmínky */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
                  <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
                    <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute inset-[8.33%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div 
                className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap"
                style={{ fontWeight: 700 }}
              >
                <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                <p className="leading-[1.6]">Pokračovat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OffersHeaderProps {
  onEditOffer: () => void;
}

function OffersHeader({ onEditOffer }: OffersHeaderProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div 
        className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap"
        style={{ fontWeight: 700 }}
      >
        <p className="leading-[1.6]">Dostupné nabídky</p>
      </div>
      <div className="content-stretch flex gap-[24px] h-[50px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div 
            className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap"
            style={{ fontWeight: 700 }}
          >
            <p className="leading-[1.6]">Frekvence plateb</p>
          </div>
          <div className="bg-white h-[50px] relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip p-[4px] relative rounded-[inherit]">
              <div className="bg-[#00A878] flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[14px] text-white whitespace-nowrap">
                  <p className="leading-[1.6]">Měsíčně</p>
                </div>
              </div>
              <div className="bg-transparent flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#94a3b8] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.6]">Kvartálně</p>
                </div>
              </div>
              <div className="bg-transparent flex flex-1 items-center justify-center h-full overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] cursor-pointer transition-colors">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic text-[#94a3b8] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.6]">Ročně</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
          </div>
        </div>
        <div 
          onClick={onEditOffer}
          className="bg-[#00A878] content-stretch flex flex-col items-start p-[10px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[12.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path clipRule="evenodd" d={svgPaths.p17c79800} fill="var(--fill-0, white)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.6]">Upravit nabídku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Frame12Props {
  onEditOffer: () => void;
}

function Frame12({ onEditOffer }: Frame12Props) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] relative shrink-0">
      <StepIndicator currentStep={5} />
      <div className="w-full max-w-[1320px] flex flex-col gap-[24px]">
        <OffersHeader onEditOffer={onEditOffer} />
        <div className="flex gap-[10px] items-start justify-center w-full">
          <InsuranceCard />
          <InsuranceCard isMiddle />
          <InsuranceCard />
        </div>
        <ComparisonChart />
      </div>
      {/* StepButtons removed */}
    </div>
  );
}

export default function LifeInsuranceStep5() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
      <NavbarHeaderShared activeTab="odpovednost" />
      <HeadingContainer />
      <Frame12 onEditOffer={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <UpravidNabidkuModalOverlay onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}