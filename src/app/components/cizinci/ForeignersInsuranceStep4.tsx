import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import { CreditCard, FileText, FolderSync, Sparkles, AlertCircle } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání cestovního pojištění</p>
      </div>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[80px]">
      <div className="absolute inset-0 rounded-full border-[3px] border-[#00A878] opacity-20" />
      <svg className="size-[48px]" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="23" stroke="#00A878" strokeWidth="2" fill="none" />
        <path d="M14 24L20 30L34 16" stroke="#00A878" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className="bg-[#f0faf7] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#b3e8d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-start p-[24px] size-full gap-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>Číslo účtu:</p>
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 500 }}>2111576634/2700</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>Variabilní symbol:</p>
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 500 }}>1220045129</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>IBAN:</p>
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 500 }}>CZ4127000000002111576634</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>BIC:</p>
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 500 }}>BACXCZPP</p>
        </div>
        <div className="h-[1px] bg-[#b3e8d8] w-full" />
        <div className="flex items-center justify-between w-full">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[18px]" style={{ fontWeight: 700 }}>Částka k úhradě:</p>
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[20px]" style={{ fontWeight: 700 }}>77 Kč</p>
        </div>
      </div>
    </div>
  );
}

function WarningBox() {
  return (
    <div className="bg-[#fff3cd] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ffc107] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex items-start p-[16px] gap-[12px]">
        <AlertCircle className="size-[24px] text-[#ff9800] shrink-0 mt-[2px]" />
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[14px] leading-[1.5]" style={{ fontWeight: 500 }}>
            Platbu prosím proveďte nejpozději do 24 hodin od sjednání pojištění.
          </p>
          <p className="font-['Inter',sans-serif] text-[#666666] text-[13px] leading-[1.5]">
            Další ujednání v úhradě může zadržet, že pojištění nebude platit.
          </p>
        </div>
      </div>
    </div>
  );
}

function RegistrationBenefits() {
  return (
    <div className="bg-gradient-to-br from-[#f0faf7] to-[#e6f7f2] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center p-[32px] gap-[24px]">
        <div className="flex flex-col items-center gap-[8px] w-full">
          <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[24px] text-center leading-[1.3]" style={{ fontWeight: 700 }}>
            Zaregistrujte se a mějte vše pod kontrolou
          </p>
          <p className="font-['Inter',sans-serif] text-[#666666] text-[14px] text-center leading-[1.5]">
            Získejte přehled o svých smlouvách a exkluzivní nabídky
          </p>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex items-start gap-[12px]">
            <div className="shrink-0 size-[40px] rounded-full bg-[#00A878]/10 flex items-center justify-center">
              <FileText className="size-[20px] text-[#00A878]" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>
                Přehled všech smluv na jednom místě
              </p>
              <p className="font-['Inter',sans-serif] text-[#666666] text-[14px] leading-[1.5]">
                Veškeré dostupné informace o vašich smlouvách z pojišťoven
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[12px]">
            <div className="shrink-0 size-[40px] rounded-full bg-[#00A878]/10 flex items-center justify-center">
              <FolderSync className="size-[20px] text-[#00A878]" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>
                Automatické nabídky lepších podmínek
              </p>
              <p className="font-['Inter',sans-serif] text-[#666666] text-[14px] leading-[1.5]">
                Když se poštář začne vyhnáčet cenu, dáme vám vědět
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[12px]">
            <div className="shrink-0 size-[40px] rounded-full bg-[#00A878]/10 flex items-center justify-center">
              <Sparkles className="size-[20px] text-[#00A878]" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px]" style={{ fontWeight: 700 }}>
                Exkluzivní slevy a zvýhodněné ceny
              </p>
              <p className="font-['Inter',sans-serif] text-[#666666] text-[14px] leading-[1.5]">
                Unikátní nabídky dostupné pouze pro registrované uživatele
              </p>
            </div>
          </div>
        </div>

        <button className="h-[48px] relative rounded-[12px] shrink-0 w-full bg-white border border-[#00A878] hover:bg-[#f0faf7] transition-colors cursor-pointer">
          <div className="flex items-center justify-center gap-[8px] size-full">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5V7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H5V5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM13 7V5C13 4.20435 12.6839 3.44129 12.1213 2.87868C11.5587 2.31607 10.7956 2 10 2C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V7H13Z" fill="#00A878"/>
            </svg>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#00A878]" style={{ fontWeight: 700 }}>
              Vytvořit účet zdarma
            </p>
          </div>
        </button>

        <p className="font-['Inter',sans-serif] text-[#94a3b8] text-[12px] text-center">
          Registrací se účet zdarma a navždy zůstane zdarma
        </p>
      </div>
    </div>
  );
}

export default function ForeignersInsuranceStep4() {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    console.log("Proceeding to payment...");
  };

  const handleDownloadDocuments = () => {
    console.log("Downloading documents...");
  };

  const handleCreateAccount = () => {
    console.log("Creating account...");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="cizinci" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={4} totalSteps={4} />
          
          <div className="w-full max-w-[600px] flex flex-col gap-[32px] items-center">
            {/* Success Header */}
            <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[13px] tracking-[0.5px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Dokončeno
              </p>
              <CheckCircleIcon />
              <p className="font-['Inter',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#1A1A1A] text-[28px] text-center" style={{ fontWeight: 700 }}>
                Děkujeme za sjednání pojištění s pomocí Frenkeeho
              </p>
            </div>

            {/* Contract Info */}
            <div className="flex flex-col gap-[8px] items-center w-full">
              <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px] text-center leading-[1.6]">
                Smlouva č. 1220045129 byla úspěšně sjednána. Smlouvu a veškeré
              </p>
              <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px] text-center leading-[1.6]">
                dokumenty najdete ve svém e-mailu. Pro platbu využijte informace níže nebo
              </p>
              <p className="font-['Inter',sans-serif] text-[#1A1A1A] text-[16px] text-center leading-[1.6]">
                QR kód.
              </p>
            </div>

            {/* Payment Details */}
            <PaymentDetails />

            {/* Warning */}
            <WarningBox />

            {/* Payment Button */}
            <button
              onClick={handlePaymentClick}
              className="h-[52px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,168,120,0.3)] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]"
            >
              <div className="flex items-center justify-center gap-[8px] size-full">
                <CreditCard className="size-[20px] text-white" />
                <p className="font-['Inter',sans-serif] leading-[1.6] not-italic text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 600 }}>
                  Zaplatit platební kartou
                </p>
              </div>
            </button>

            {/* Download Documents */}
            <button
              onClick={handleDownloadDocuments}
              className="flex items-center justify-center gap-[8px] cursor-pointer hover:opacity-70 transition-opacity"
            >
              <FileText className="size-[20px] text-[#00A878]" />
              <p className="font-['Inter',sans-serif] text-[#00A878] text-[16px] decoration-solid underline" style={{ fontWeight: 500 }}>
                Stáhnout dokumenty k pojištění
              </p>
            </button>

            {/* Registration Benefits */}
            <RegistrationBenefits />
          </div>
        </div>
      </div>
    </div>
  );
}