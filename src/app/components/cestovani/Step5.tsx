import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import svgPaths from "../../../imports/svg-n3fwrbb13u";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="bg-clip-text flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[transparent] text-center tracking-[-1.5px] w-full" style={{ backgroundImage: "linear-gradient(90deg, #00A878 0%, #007A5E 100%)", fontWeight: 700 }}>
        <p className="leading-none">Online sjednání cestovního pojištění</p>
      </div>
    </div>
  );
}

function S() {
  return <div className="bg-[#00A878] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S1() {
  return <div className="bg-[#00A878] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S2() {
  return <div className="bg-[#00A878] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S3() {
  return <div className="bg-[#00A878] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S4() {
  return <div className="bg-[#00A878] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function StepIndicator() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Step Indicator">
      <S />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Page Header">
      <StepIndicator />
      <p className="font-['Inter',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">Krok 5 z 5</p>
    </div>
  );
}

function CheckCircleWrap() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Check Circle Wrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_18_4059)" id="Check Circle Wrap">
          <circle cx="32" cy="32" fill="var(--fill-0, #EDF2F7)" id="Check BG" r="31" stroke="var(--stroke-0, #64748B)" strokeWidth="2" />
          <g id="lucide/check">
            <path d={svgPaths.p2ce2a3c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function PageHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Page Header">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#64748b] text-[13px] tracking-[0.5px] whitespace-nowrap">Dokončeno</p>
      <CheckCircleWrap />
      <p className="font-['Inter',sans-serif] font-bold leading-[1.3] min-w-full not-italic relative shrink-0 text-[#1A1A1A] text-[28px] text-center w-[min-content]">Děkujeme za sjednání pojištění s pomocí Frenkeeho</p>
    </div>
  );
}

function ContractInfo() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Contract Info">
      <p className="font-['Inter',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#666666] text-[14px] text-center whitespace-nowrap">Smlouva č. 1220045131 byla úspěšně sjednána. Smlouvu a veškeré dokumenty najdete ve svém e-mailu. Pro platbu využijte informace níže, nebo QR kód.</p>
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[140px]" data-name="QR Code">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DetailRow() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full" data-name="Detail Row">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#666666]">Číslo účtu:</p>
      <p className="font-['Inter',sans-serif] font-semibold relative shrink-0 text-[#1A1A1A] text-right">2111576634/2700</p>
    </div>
  );
}

function DetailRow1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full" data-name="Detail Row">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#666666]">Variabilní symbol:</p>
      <p className="font-['Inter',sans-serif] font-semibold relative shrink-0 text-[#1A1A1A] text-right">1220045131</p>
    </div>
  );
}

function DetailRow2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full" data-name="Detail Row">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#666666]">IBAN:</p>
      <p className="font-['Inter',sans-serif] font-semibold relative shrink-0 text-[#1A1A1A] text-right">CZ4127000000002111576634</p>
    </div>
  );
}

function DetailRow3() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 text-[13px] w-full" data-name="Detail Row">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#666666]">BIC:</p>
      <p className="font-['Inter',sans-serif] font-semibold relative shrink-0 text-[#1A1A1A] text-right">BACXCZPP</p>
    </div>
  );
}

function DetailRow4() {
  return (
    <div className="content-stretch flex font-['Inter',sans-serif] items-center justify-between overflow-clip py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="Detail Row">
      <p className="relative shrink-0 text-[#1A1A1A] text-[14px]" style={{ fontWeight: 700 }}>Částka k úhradě:</p>
      <p className="relative shrink-0 text-[#64748b] text-[16px] text-right" style={{ fontWeight: 700 }}>890 Kč</p>
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Payment Details">
      <DetailRow />
      <DetailRow1 />
      <DetailRow2 />
      <DetailRow3 />
      <DetailRow4 />
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="bg-gradient-to-l from-[#ecfdf5] relative rounded-[16px] shrink-0 to-[#f0f9ff] to-[200%] w-full" data-name="Payment Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[24px] relative w-full">
          <QrCode />
          <PaymentDetails />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function LucideTriangleAlert() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/triangle-alert">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/triangle-alert">
          <path d={svgPaths.p1c17fc00} id="Vector" stroke="var(--stroke-0, #EF8600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #EF8600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #EF8600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function WarningBanner() {
  return (
    <div className="bg-[#fff2f0] relative rounded-[12px] shrink-0 w-full" data-name="warningBanner">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[14px] relative w-full">
          <LucideTriangleAlert />
          <p className="flex-[1_0_0] font-['Inter',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#8f5000] text-[13px]">Platbu prosím proveďte nejpozději do 24 hodin od sjednání pojištění. Delší prodleva v úhradě může způsobit, že pojistka nebude platit.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5b666] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LucideCreditCard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/credit-card">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/credit-card">
          <path d={svgPaths.p16dd5f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.66667 8.33333H18.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#00A878] h-[52px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,168,120,0.19)] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="CTA Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[40px] py-[14px] relative size-full">
          <LucideCreditCard />
          <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Zaplatit platební kartou</p>
        </div>
      </div>
    </div>
  );
}

function LucideFileText() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/file-text">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/file-text">
          <path d={svgPaths.p28b0a6c0} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f10900} id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SecondaryLink() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="secondaryLink">
      <LucideFileText />
      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#666666] text-[14px] whitespace-nowrap">Stáhnout dokumenty k pojištění</p>
    </div>
  );
}

function SectionDivider() {
  return <div className="bg-[#eddcee] h-px rounded-[1px] shrink-0 w-[80px]" data-name="Section Divider" />;
}

function PromoHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-center w-full whitespace-nowrap" data-name="Promo Header">
      <p className="font-['Inter',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#1A1A1A] text-[18px]">Zaregistrujte se a mějte vše pod kontrolou</p>
      <p className="font-['Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#666666] text-[13px]">Získejte přehled o svých smlouvách a exkluzivní nabídky</p>
    </div>
  );
}

function LucideFolderOpen() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/folder-open">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/folder-open">
          <path d={svgPaths.p1975cc00} id="Vector" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BenefitIcon() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Benefit Icon" style={{ backgroundImage: "linear-gradient(-90deg, rgb(243, 236, 250) 100%, rgb(235, 224, 245) 200%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideFolderOpen />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d3e4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BenefitText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic overflow-clip pt-[4px] relative whitespace-nowrap" data-name="Benefit Text">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#1A1A1A] text-[14px]">Přehled všech smluv na jednom místě</p>
      <p className="font-['Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#666666] text-[12px]">Veškeré dostupné informace o vašich smlouvách z pojišťoven</p>
    </div>
  );
}

function Benefit() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Benefit 1">
      <BenefitIcon />
      <BenefitText />
    </div>
  );
}

function LucideBellRing() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/bell-ring">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_4047)" id="lucide/bell-ring">
          <path d={svgPaths.p1ce3c700} id="Vector" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4c6c80} id="Vector_2" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1a06de00} id="Vector_3" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1239d780} id="Vector_4" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_18_4047">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BenefitIcon1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Benefit Icon" style={{ backgroundImage: "linear-gradient(-90deg, rgb(243, 236, 250) 100%, rgb(235, 224, 245) 200%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideBellRing />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d3e4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BenefitText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic overflow-clip pt-[4px] relative whitespace-nowrap" data-name="Benefit Text">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#1A1A1A] text-[14px]">Automatické nabídky lepších podmínek</p>
      <p className="font-['Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#666666] text-[12px]">Když se podaří zajistit výhodnější cenu, dáme vám vědět</p>
    </div>
  );
}

function Benefit1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Benefit 2">
      <BenefitIcon1 />
      <BenefitText1 />
    </div>
  );
}

function LucideBadgePercent() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/badge-percent">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_18_4041)" id="lucide/badge-percent">
          <path d={svgPaths.p21bd6c80} id="Vector" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 6L6 10" id="Vector_2" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6H6.00667" id="Vector_3" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 10H10.0067" id="Vector_4" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_18_4041">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BenefitIcon2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Benefit Icon" style={{ backgroundImage: "linear-gradient(-90deg, rgb(243, 236, 250) 100%, rgb(235, 224, 245) 200%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideBadgePercent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d3e4] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BenefitText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic overflow-clip pt-[4px] relative whitespace-nowrap" data-name="Benefit Text">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#1A1A1A] text-[14px]">Exkluzivní slevy a zvýhodněné ceny</p>
      <p className="font-['Inter',sans-serif] leading-[1.5] relative shrink-0 text-[#666666] text-[12px]">Unikátní nabídky dostupné pouze pro registrované uživatele</p>
    </div>
  );
}

function Benefit2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Benefit 3">
      <BenefitIcon2 />
      <BenefitText2 />
    </div>
  );
}

function BenefitsList() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Benefits List">
      <Benefit />
      <Benefit1 />
      <Benefit2 />
    </div>
  );
}

function LucideUserPlus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/user-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/user-plus">
          <path d={svgPaths.pd2eb480} id="Vector" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19685c00} id="Vector_2" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14.25 6V10.5" id="Vector_3" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16.5 8.25H12" id="Vector_4" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function RegisterButton() {
  return (
    <div className="bg-white h-[44px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Register Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideUserPlus />
        <p className="font-['Inter',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#00A878] text-[14px] whitespace-nowrap">Vytvořit účet zdarma</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#00A878] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_6px_0px_rgba(0,168,120,0.07)]" />
    </div>
  );
}

function RegistrationPromo() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Registration Promo" style={{ backgroundImage: "linear-gradient(212.668deg, rgb(245, 250, 248) 50%, rgb(232, 245, 240) 85.355%, rgb(228, 243, 237) 120.71%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <PromoHeader />
          <BenefitsList />
          <RegisterButton />
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[11px] text-center w-full">Registrace je zcela zdarma a zabere jen chvilku</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#E5E5E5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,168,120,0.06)]" />
    </div>
  );
}

function FormInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-[600px]" data-name="Form Inner">
      <PageHeader1 />
      <ContractInfo />
      <PaymentCard />
      <WarningBanner />
      <CtaButton />
      <SecondaryLink />
      <SectionDivider />
      <RegistrationPromo />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[99px] py-[24px] relative shrink-0">
      <PageHeader />
      <FormInner />
    </div>
  );
}

export default function TravelInsuranceStep5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="cestovani" />
      <HeadingContainer />
      <Frame12 />
    </div>
  );
}