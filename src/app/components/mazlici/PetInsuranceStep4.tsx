import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-2kbc1pzhal";
import { CreditCard, FileText, UserPlus, Sparkles, RefreshCw, DollarSign, AlertTriangle } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění mazlíčků</p>
      </div>
    </div>
  );
}

function CheckCircleWrap() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_18_4059)">
          <circle cx="32" cy="32" fill="#f0faf7" r="31" stroke="#00A878" strokeWidth="2" />
          <g>
            <path d={svgPaths.p2ce2a3c0} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_18_4059">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PageHeaderCompleted() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[13px] tracking-[0.5px] whitespace-nowrap" style={{ fontWeight: 600 }}>Dokončeno</p>
      <CheckCircleWrap />
      <p className="font-['Inter',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#1A1A1A] text-[28px] text-center w-[min-content]" style={{ fontWeight: 700 }}>Děkujeme za sjednání pojištění s pomocí Frenkeeho</p>
    </div>
  );
}

function ContractInfo() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#666666] text-[14px] text-center w-[512px]">Smlouva č. 1220045129 byla úspěšně sjednána. Smlouvu a veškeré dokumenty najdete ve svém e-mailu. Pro platbu využijte informace níže, nebo QR kód.</p>
    </div>
  );
}

function PaymentDetailsCard() {
  return (
    <div className="bg-[#f0faf7] relative rounded-[12px] shrink-0 w-full max-w-[630px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[20px] relative w-full">
          {/* QR Code placeholder */}
          <div className="relative rounded-[8px] shrink-0 size-[140px] bg-white border border-[#e2e9f0]" />
          
          {/* Payment Details */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 700 }}>Číslo účtu:</p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-right" style={{ fontWeight: 600 }}>2111576634/2700</p>
            </div>

            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 700 }}>Variabilní symbol:</p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-right" style={{ fontWeight: 600 }}>1220045129</p>
            </div>

            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 700 }}>IBAN:</p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-right" style={{ fontWeight: 600 }}>CZ4127000000002111576634</p>
            </div>

            <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 700 }}>BIC:</p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-right" style={{ fontWeight: 600 }}>BACXCZPP</p>
            </div>

            <div className="bg-[#b3e8d8] h-px shrink-0 w-full" />

            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-[15px]" style={{ fontWeight: 700 }}>Částka k úhradě:</p>
              <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A] text-[15px] text-right" style={{ fontWeight: 700 }}>77 Kč</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b3e8d8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,168,120,0.08)]" />
    </div>
  );
}

function WarningAlert() {
  return (
    <div className="bg-[#fff8e5] relative rounded-[12px] shrink-0 w-full max-w-[630px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px] mt-[2px]">
            <AlertTriangle className="size-[20px] text-[#EF8600]" />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] leading-[1.6] min-h-px min-w-px not-italic relative text-[#666666] text-[13px]">
            <p>Platbu prosím proveďte nejpozději do 24 hodin od sjednání pojištění. Další provedenou v úhradě může způsobit, že pojištění nebude platit.</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fde68a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CtaButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="h-[52px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,168,120,0.3)] shrink-0 w-full max-w-[630px] cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[40px] py-[14px] relative size-full">
          <CreditCard className="size-[20px] text-white" />
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 600 }}>Zaplatit platební kartou</p>
        </div>
      </div>
    </button>
  );
}

function DownloadLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
    >
      <FileText className="size-[16px] text-[#00A878]" />
      <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#00A878] text-[14px] underline whitespace-nowrap" style={{ fontWeight: 500 }}>Stáhnout dokumenty k pojištění</p>
    </button>
  );
}

function BenefitItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px] mt-[2px]">
        <Icon className="size-[20px] text-[#00A878]" />
      </div>
      <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
        <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-full" style={{ fontWeight: 700 }}>{title}</p>
        <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666666] text-[12px] w-full">{description}</p>
      </div>
    </div>
  );
}

function BenefitsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <BenefitItem
        icon={Sparkles}
        title="Přehled všech smluv na jednom místě"
        description="Veškeré dostupné informace o vašich smlouvách s pojišťovnami"
      />
      <BenefitItem
        icon={RefreshCw}
        title="Automatické nabídky lepších podmínek"
        description="Když se poplatí zaplatit výhodnější cenu, dáme vám vědět"
      />
      <BenefitItem
        icon={DollarSign}
        title="Exkluzivní slevy a zvýhodněné ceny"
        description="Unikátní nabídky dostupné pouze pro registrované uživatele"
      />
    </div>
  );
}

function RegisterButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white h-[44px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <UserPlus className="size-[18px] text-[#00A878]" />
        <p className="font-['Inter',sans-serif] leading-none not-italic relative shrink-0 text-[#00A878] text-[14px] whitespace-nowrap" style={{ fontWeight: 600 }}>Vytvořit účet zdarma</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#00A878] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_6px_0px_rgba(0,168,120,0.07)]" />
    </button>
  );
}

function RegistrationPromo() {
  return (
    <div className="bg-gradient-to-br from-[#f0faf7] to-[#e6f7f2] relative rounded-[16px] shrink-0 w-full max-w-[630px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] w-full" style={{ fontWeight: 700 }}>Zaregistrujte se a mějte vše pod kontrolou</p>
            <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666666] text-[13px] w-full">Získejte přehled o svých smlouvách a exkluzivní nabídky</p>
          </div>
          
          <BenefitsList />
          
          <RegisterButton onClick={() => {}} />
          
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#94a3b8] text-[11px] text-center w-full">Registrace je zcela zdarma a zabere jen chvilku</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b3e8d8] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,168,120,0.06)]" />
    </div>
  );
}

export default function PetInsuranceStep4() {
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log("Processing payment...");
  };

  const handleDownload = () => {
    console.log("Downloading documents...");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="mazlicici" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={4} totalSteps={4} />
          
          <PageHeaderCompleted />
          
          <ContractInfo />
          
          <PaymentDetailsCard />
          
          <WarningAlert />
          
          <CtaButton onClick={handlePayment} />
          
          <DownloadLink onClick={handleDownload} />
          
          <RegistrationPromo />
        </div>
      </div>
    </div>
  );
}