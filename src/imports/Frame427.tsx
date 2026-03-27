import { Link as RouterLink } from "react-router";
import { useState } from "react";
import svgPaths from "./svg-cnukde6v17";
import svgPathsShield from "./svg-gb1tdf323s";
import imgPictureNaTentoProjektBylaPoskytnutaFinancniPodporaOdEvropskeUnie from "figma:asset/64e676c357a0f3e22dc152d792e1f5ecb200139a.png";
import NavbarHeaderShared from "../app/components/NavbarHeader";
import StepIndicator from "../app/components/cestovani/StepIndicator";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání cestovního pojištění</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap" data-name="Page Header">
      <p className="font-['Inter',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Inter',sans-serif] leading-[1.6] relative shrink-0 text-[14px] text-[#666666]">Zkontrolujte údaje o cestě a pojištění před odesláním</p>
    </div>
  );
}

function LucidePlane() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/plane">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/plane">
          <path d={svgPaths.pdab9800} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucidePlane />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Vaše cesta</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#00A878] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">Destinace</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>Albánie</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">Počet osob</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>2 osoby</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">Termín cesty</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>2. 2. – 15. 2. 2026 (14 dní)</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">Sporty</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>Zimní sporty vč. lyžování</p>
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function CardVaseCesta() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Vaše cesta">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <CardHeader />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <Rows />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function LucideShieldCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/shield-check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/shield-check">
          <path d={svgPathsShield.p25fc4100} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsShield.p3e012060} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideShieldCheck />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Vybrané pojištění</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft1 />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#00A878] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex font-['Inter',sans-serif] items-start justify-between overflow-clip relative shrink-0 text-[#1A1A1A] w-full" data-name="Row" style={{ fontWeight: 500 }}>
      <p className="relative shrink-0">AXA – Chci být safe (Excelent)</p>
      <p className="relative shrink-0">50 Kč</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">Zimní sporty vč. lyžování a výbavy</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>62 Kč</p>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row4 />
      <Row5 />
    </div>
  );
}

function CardVybranePojisteni() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Vybrané pojištění">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <CardHeader1 />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <Rows1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function LucideUsers() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/users">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p166b7100} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideUsers />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Pojištěné osoby</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft2 />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#00A878] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>Ladislav Švábek</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">24. 04. 2000</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]" style={{ fontWeight: 500 }}>Petr Novák</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">24. 04. 2000</p>
    </div>
  );
}

function Rows2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row6 />
      <Row7 />
    </div>
  );
}

function CardPojisteneOsoby() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Pojištěné osoby">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <CardHeader2 />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <Rows2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function CardSouhlas() {
  const [ch1, setCh1] = useState(true);
  const [ch2, setCh2] = useState(true);
  const [ch3, setCh3] = useState(true);
  const [ch4, setCh4] = useState(true);

  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Souhlas">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPathsShield.p3497a680} stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPathsShield.p2dbef580} stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Souhlas a potvrzení</p>
        </div>
        {/* Divider */}
        <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />

        {/* Row 1 – wraps to 2 lines, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh1(!ch1)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch1 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch1 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch1 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-[520px]" style={{ fontWeight: 400 }}>
            Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.
          </p>
        </div>

        {/* Row 2 – single line, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh2(!ch2)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch2 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch2 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch2 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Souhlasím se zpracováním osobních údajů v souladu s GDPR.
          </p>
        </div>

        {/* Row 3 – checked, items-center */}
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh3(!ch3)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch3 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch3 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch3 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Chci dostávat informace o novinkách a speciálních nabídkách.
          </p>
        </div>

        {/* Row 4 – single line, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh4(!ch4)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch4 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch4 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch4 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="content-stretch flex font-['Inter',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap" data-name="Summary Header" style={{ fontWeight: 700 }}>
      <p className="leading-[1.4] relative shrink-0 text-[18px]">Cestovní pojištění</p>
      <p className="leading-[1.3] relative shrink-0 text-[28px]">125 Kč</p>
    </div>
  );
}

function CardSummary() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card - Summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <SummaryHeader />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666666] text-[13px] whitespace-nowrap">Cena zahrnuje základní cestovní pojištění a připojištění zimních sportů pro 2 osoby na 14 dní.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,168,120,0.08)]" />
    </div>
  );
}

function FormInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[600px]" data-name="Form Inner">
      <PageHeader />
      <CardVaseCesta />
      <CardVybranePojisteni />
      <CardPojisteneOsoby />
      <CardSouhlas />
      <CardSummary />
      <RouterLink to="/cestovani/krok-5" className="no-underline self-center">
        <div
          className="w-[190px] h-[48px] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
        >
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">Sjednat a zaplatit</p>
          </div>
        </div>
      </RouterLink>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center px-[40px] pb-[80px] relative shrink-0">
      <FormInner />
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="cestovani" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={4} />
      </div>
      <Frame13 />
    </div>
  );
}