import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import svgPaths from "../../../imports/svg-n3fwrbb13u";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online pojištění majetku</p>
      </div>
    </div>
  );
}

function StepDot() {
  return <div className="bg-[#00A878] h-[4px] rounded-[2px] shrink-0 w-[32px]" />;
}

function StepIndicator() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full">
      {[0,1,2,3,4,5,6].map(i => <StepDot key={i} />)}
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0 w-full">
      <StepIndicator />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#999999] text-[12px] whitespace-nowrap">Krok 7 z 7</p>
    </div>
  );
}

function CheckCircleWrap() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_prop7)">
          <circle cx="32" cy="32" fill="#e8f8f3" r="31" stroke="#00A878" strokeWidth="2" />
          <path d={svgPaths.p2ce2a3c0} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_prop7"><rect fill="white" height="64" width="64" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PageHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] text-[#64748b] text-[13px] tracking-[0.5px] whitespace-nowrap">Dokončeno</p>
      <CheckCircleWrap />
      <p className="font-['Inter',sans-serif] leading-[1.3] min-w-full relative shrink-0 text-[#1A1A1A] text-[28px] text-center w-[min-content]" style={{ fontWeight: 700 }}>Děkujeme za sjednání pojištění s pomocí Frenkeeho</p>
    </div>
  );
}

function ContractInfo() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] leading-[1.7] text-[#666666] text-[14px] text-center">Smlouva č. 1220045129 byla úspěšně sjednána. Smlouvu a veškeré dokumenty najdete ve svém e-mailu. Pro platbu využijte informace níže, nebo QR kód.</p>
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[140px]">
      <div aria-hidden="true" className="absolute border border-[#E5E7EB] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PaymentDetails() {
  const rows = [
    { label: "Číslo účtu:", value: "2111576634/2700" },
    { label: "Variabilní symbol:", value: "1220045129" },
    { label: "IBAN:", value: "CZ4127000000002111576634" },
    { label: "BIC:", value: "BACXCZPP" },
  ];
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.6] not-italic overflow-clip relative whitespace-nowrap">
      {rows.map(({ label, value }) => (
        <div key={label} className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full">
          <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 700 }}>{label}</p>
          <p className="font-['Inter',sans-serif] font-semibold relative shrink-0 text-[#1A1A1A] text-right">{value}</p>
        </div>
      ))}
      <div className="content-stretch flex font-['Inter',sans-serif] items-center justify-between overflow-clip py-[10px] relative shrink-0 w-full">
        <p className="text-[#1A1A1A] text-[14px]" style={{ fontWeight: 700 }}>Částka k úhradě:</p>
        <p className="text-[#64748b] text-[16px] text-right" style={{ fontWeight: 700 }}>389 Kč</p>
      </div>
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="bg-gradient-to-l from-[#ecfdf5] relative rounded-[16px] shrink-0 to-[#f0f9ff] to-[200%] w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[24px] relative w-full">
          <QrCode />
          <PaymentDetails />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#E5E7EB] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function WarningBanner() {
  return (
    <div className="bg-[#fff2f0] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[14px] relative w-full">
        <svg className="shrink-0 mt-[2px]" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M10 1L1 19h18L10 1z" stroke="#EF8600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 7.5V10.833" stroke="#EF8600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14.167H10.008" stroke="#EF8600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
        <p className="flex-[1_0_0] font-['Inter',sans-serif] leading-[1.5] text-[#8f5000] text-[13px]">Platbu prosím proveďte nejpozději do 24 hodin od sjednání pojištění. Delší prodleva v úhradě může způsobit, že pojistka nebude platit.</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5b666] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CtaButton() {
  return (
    <div className="h-[52px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,168,120,0.25)] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: "#00A878" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[40px] py-[14px] relative size-full">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p16dd5f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M1.667 8.333H18.333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] text-[16px] text-white whitespace-nowrap">Zaplatit platební kartou</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryLink() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p28b0a6c0} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p2f10900} stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6.667 6H5.333" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M10.667 8.667H5.333" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M10.667 11.333H5.333" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
      <p className="font-['Inter',sans-serif] leading-[1.6] text-[#666666] text-[14px] whitespace-nowrap">Stáhnout dokumenty k pojištění</p>
    </div>
  );
}

function PromoSection() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(212.668deg, #f0fdf8 50%, #e0f7f0 85.355%, #d0f0e8 120.71%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <div className="flex flex-col gap-[8px] items-center w-full text-center">
            <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>Zaregistrujte se a mějte vše pod kontrolou</p>
            <p className="font-['Inter',sans-serif] text-[#666666] text-[13px]">Získejte přehled o svých smlouvách a exkluzivní nabídky</p>
          </div>
          <div className="content-stretch flex flex-col gap-[14px] items-start w-full">
            {[
              { label: "Přehled všech smluv na jednom místě", desc: "Veškeré dostupné informace o vašich smlouvách z pojišťoven" },
              { label: "Automatické nabídky lepších podmínek", desc: "Když se podaří zajistit výhodnější cenu, dáme vám vědět" },
              { label: "Exkluzivní slevy a zvýhodněné ceny", desc: "Unikátní nabídky dostupné pouze pro registrované uživatele" },
            ].map(({ label, desc }) => (
              <div key={label} className="content-stretch flex gap-[12px] items-start w-full">
                <div className="relative rounded-[10px] shrink-0 size-[32px]" style={{ backgroundImage: "linear-gradient(-90deg, #e8f8f3 100%, #d0f5e8 200%)" }}>
                  <div className="flex items-center justify-center size-full">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <path d="M2 12V6l6-4 6 4v6a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#b3e8d5] inset-0 rounded-[10px]" />
                </div>
                <div className="flex flex-col gap-[2px] pt-[4px]">
                  <p className="font-['Inter',sans-serif] font-semibold text-[#1A1A1A] text-[14px]">{label}</p>
                  <p className="font-['Inter',sans-serif] text-[#666666] text-[12px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white h-[44px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity">
            <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
              <p className="font-['Inter',sans-serif] font-semibold text-[#00A878] text-[14px] whitespace-nowrap">Vytvořit účet zdarma</p>
            </div>
            <div aria-hidden="true" className="absolute border-[#00A878] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_6px_0px_rgba(0,168,120,0.1)]" />
          </div>
          <p className="font-['Inter',sans-serif] text-[#999999] text-[11px] text-center w-full">Registrace je zcela zdarma a zabere jen chvilku</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b3e8d5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

export default function PropertyInsuranceStep7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[99px] py-[24px] relative shrink-0">
        <PageHeader />
        <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-[600px]">
          <PageHeader1 />
          <ContractInfo />
          <PaymentCard />
          <WarningBanner />
          <CtaButton />
          <SecondaryLink />
          <div className="bg-[#E5E7EB] h-px rounded-[1px] shrink-0 w-[80px]" />
          <PromoSection />
        </div>
      </div>
    </div>
  );
}