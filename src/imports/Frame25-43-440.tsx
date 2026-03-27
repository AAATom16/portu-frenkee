import svgPaths from "./svg-gb1tdf323s";

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full whitespace-nowrap" data-name="Page Header">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[14px]">Zkontrolujte údaje o vozidle a pojištění před odesláním</p>
    </div>
  );
}

function LucideCar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/car">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/car">
          <path d={svgPaths.pc9c9110} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ad65a80} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7.5 14.167H12.5" id="Vector_3" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3849af00} id="Vector_4" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideCar />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Vozidlo</p>
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
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Vozidlo</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Peugot 508</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">VIN</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">VF38D9HL0BL065925</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">První registrace</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">22. 11. 2011</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Balíček</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">AXA: Balíček komfort</p>
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
          <path d={svgPaths.p3497a680} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2dbef580} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
          <path d={svgPaths.p2e978a00} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LeftGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Left Group">
      <LucideShield />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Povinné ručení</p>
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
          <path d={svgPaths.p2e978a00} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#655193] text-[14px] whitespace-nowrap">Havarijní pojištění</p>
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

function LucideSquareDashedBottom() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/square-dashed-bottom">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/square-dashed-bottom">
          <path d={svgPaths.p38088480} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.75 15.75H7.5" id="Vector_2" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.5 15.75H11.25" id="Vector_3" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LeftGroup2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Left Group">
      <LucideSquareDashedBottom />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#655193] text-[14px] whitespace-nowrap">Pojištění skel</p>
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
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Krytí</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">100 mil. / 100 mil.</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Počátek pojištění</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">01. 02. 2026</p>
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
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Údaje</p>
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
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Pojistník</p>
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
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Provozovatel</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Stejný jako pojistník</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Vlastník</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">Stejný jako pojistník</p>
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

function LucideMail() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/mail">
          <path d={svgPaths.p39a81600} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2fa4a980} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideMail />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Kontaktní údaje</p>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <HeaderLeft3 />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[13px] whitespace-nowrap">Upravit</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">ladislav@frenkee.cz</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative" data-name="Email Field">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#655193] text-[12px] whitespace-nowrap">E-mail</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">+420 777 123 456</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PhoneField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px overflow-clip relative" data-name="Phone Field">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#655193] text-[12px] whitespace-nowrap">Telefon</p>
      <Input1 />
    </div>
  );
}

function InputRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Input Row">
      <EmailField />
      <PhoneField />
    </div>
  );
}

function CardKontaktniUdaje() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Kontaktní údaje">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <CardHeader3 />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <InputRow />
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
          <path d={svgPaths.p3497a680} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2dbef580} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader4() {
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
          <CardHeader4 />
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
      <p className="leading-[1.4] relative shrink-0 text-[18px]">Pojištění auta</p>
      <p className="leading-[1.3] relative shrink-0 text-[28px]">647 Kč / měsíc</p>
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
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#655193] text-[13px] whitespace-nowrap">Cena zahrnuje povinné ručení, havarijní pojištění a pojištění skel v balíčku AXA Komfort. Platba jednou měsíčně.</p>
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
      <CardVaseCesta />
      <CardVybranePojisteni />
      <CardPojisteneOsoby />
      <CardKontaktniUdaje />
      <CardSouhlas />
      <CardSummary />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center px-[40px] py-[48px] relative size-full">
      <FormInner />
    </div>
  );
}