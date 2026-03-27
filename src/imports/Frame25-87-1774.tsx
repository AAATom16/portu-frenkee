import svgPaths from "./svg-ud7ckmb492";

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full whitespace-nowrap" data-name="Page Header">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[14px]">Zkontrolujte údaje o nemovitosti a pojištění před odesláním</p>
    </div>
  );
}

function LucideHouse() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/house">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/house">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideHouse />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Nemovitost</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Typ nemovitosti</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Byt v osobním vlastnictví</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Adresa</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Vinohradská 12, Praha 2</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Podlahová plocha</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">68 m²</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Rok kolaudace</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">2005</p>
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

function CardNemovitost() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Nemovitost">
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
          <path d={svgPaths.p25fc4100} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideShieldCheck />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Vybrané pojištění</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft1 />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function LucideShield() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/shield">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/shield">
          <path d={svgPaths.p3840bd70} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LeftGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Left Group">
      <LucideShield />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Pojištění nemovitosti</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <LeftGroup />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Ano</p>
    </div>
  );
}

function LucideShieldPlus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/shield-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/shield-plus">
          <path d={svgPaths.p3840bd70} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.75 9H11.25" id="Vector_2" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 6.75V11.25" id="Vector_3" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LeftGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Left Group">
      <LucideShieldPlus />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#655193] text-[14px] whitespace-nowrap">Pojištění domácnosti</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <LeftGroup1 />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Ano</p>
    </div>
  );
}

function LucideDroplets() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/droplets">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/droplets">
          <path d={svgPaths.p1912e080} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1bddbf80} id="Vector_2" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LeftGroup2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Left Group">
      <LucideDroplets />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#655193] text-[14px] whitespace-nowrap">Pojištění proti povodni</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <LeftGroup2 />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Ano</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Limit plnění</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">5 000 000 Kč</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Počátek pojištění</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">01. 03. 2026</p>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Rows">
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
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

function LucideUser() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/user">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideUser />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Pojistník</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft2 />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Jméno a příjmení</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Ladislav Švábek</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Rodné číslo</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">000324/1213</p>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Trvalé bydliště</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Vinohradská 12, Praha 2</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Vztah k nemovitosti</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Vlastník</p>
    </div>
  );
}

function Rows2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
    </div>
  );
}

function CardUdajeOPojistnikovi() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Údaje o pojistníkovi">
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

function LucideShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/shield-check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/shield-check">
          <path d={svgPaths.p25fc4100} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideShieldCheck1 />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Souhlas a potvrzení</p>
    </div>
  );
}

function Chk1Box() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="chk1box">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 1">
      <Chk1Box />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.</p>
    </div>
  );
}

function Chk2Box() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="chk2box">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 2">
      <Chk2Box />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Souhlasím se zpracováním osobních údajů v souladu s GDPR.</p>
    </div>
  );
}

function LucideCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/check">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Chk3Box() {
  return (
    <div className="bg-[#3f2578] relative rounded-[4px] shrink-0 size-[20px]" data-name="chk3box">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideCheck />
      </div>
      <div aria-hidden="true" className="absolute border-[#3f2578] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 3">
      <Chk3Box />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Chci dostávat informace o novinkách a speciálních nabídkách.</p>
    </div>
  );
}

function Chk4Box() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="chk4box">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 4">
      <Chk4Box />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.</p>
    </div>
  );
}

function CardSouhlas() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Souhlas">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <CardHeader3 />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <CheckboxRow />
          <CheckboxRow1 />
          <CheckboxRow2 />
          <CheckboxRow3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="content-stretch flex font-['Mona_Sans_VF:Bold',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full whitespace-nowrap" data-name="Summary Header">
      <p className="leading-[1.4] relative shrink-0 text-[18px]">Pojištění majetku</p>
      <p className="leading-[1.3] relative shrink-0 text-[28px]">389 Kč / měsíc</p>
    </div>
  );
}

function CardSummary() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card - Summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <SummaryHeader />
          <div className="bg-[#d9d3e4] h-px shrink-0 w-full" data-name="Divider" />
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#655193] text-[13px] whitespace-nowrap">Cena zahrnuje pojištění nemovitosti, domácnosti a pojištění proti povodni. Platba jednou měsíčně.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3f2578] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(63,37,120,0.08)]" />
    </div>
  );
}

function FormInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[600px]" data-name="Form Inner">
      <PageHeader />
      <CardNemovitost />
      <CardVybranePojisteni />
      <CardUdajeOPojistnikovi />
      <CardSouhlas />
      <CardSummary />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[40px] py-[48px] relative shrink-0">
      <FormInner />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(260.661deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Sjednat a zaplatit</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[99px] py-[24px] relative size-full">
      <Frame1 />
    </div>
  );
}