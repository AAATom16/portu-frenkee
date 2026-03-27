import svgPaths from "./svg-0q55s5xlyj";

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full whitespace-nowrap" data-name="Page Header">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[14px]">Zkontrolujte zadané údaje před odesláním</p>
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

function HeaderLeft() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideUser />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Osobní údaje</p>
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
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Jméno a příjmení</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">Jan Novák</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Datum narození</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">15. 3. 1985</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">E-mail</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">jan.novak@email.cz</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Telefon</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">+420 777 123 456</p>
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

function CardOsobniUdaje() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Osobní údaje">
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

function LucideBanknote() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/banknote">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/banknote">
          <path d={svgPaths.p39783000} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25499600} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 10H5.00833M15 10H15.0083" id="Vector_3" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideBanknote />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Příjmy</p>
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

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Čistý měsíční příjem</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">45 000 Kč</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Další příjmy</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">5 000 Kč</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Typ zaměstnání</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">Zaměstnanec (HPP)</p>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function CardPrijmy() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Příjmy">
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

function HeaderLeft2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideHouse />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Majetek</p>
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

function Row7() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Nemovitost</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">Byt 3+kk, Praha 5</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Odhadní hodnota</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">4 500 000 Kč</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Vozidlo</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">Škoda Octavia, 2021</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Úspory</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">250 000 Kč</p>
    </div>
  );
}

function Rows2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
    </div>
  );
}

function CardMajetek() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Majetek">
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

function LucideReceipt() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/receipt">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/receipt">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pfa00e00} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderLeft3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideReceipt />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Výdaje</p>
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

function Row11() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Bydlení a energie</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">4 500 Kč</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Dluhy a splátky</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">2 000 Kč</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Životní styl</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">3 500 Kč</p>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Rodina a ostatní</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#3f2578]">2 500 Kč</p>
    </div>
  );
}

function Rows3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row11 />
      <Row12 />
      <Row13 />
      <Row14 />
    </div>
  );
}

function CardVydaje() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Card - Výdaje">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <CardHeader3 />
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
          <Rows3 />
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

function CardHeader4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideShieldCheck />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Souhlas a potvrzení</p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 1">
      <Checkbox />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Potvrzuji, že všechny uvedené údaje jsou pravdivé a úplné.</p>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 2">
      <Checkbox1 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Souhlasím se zpracováním osobních údajů v souladu s GDPR a obchodními podmínkami.</p>
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

function Checkbox2() {
  return (
    <div className="bg-[#3f2578] relative rounded-[4px] shrink-0 size-[20px]" data-name="Checkbox">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideCheck />
      </div>
      <div aria-hidden="true" className="absolute border-[#3f2578] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxRow2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Checkbox Row 3">
      <Checkbox2 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Chci dostávat informace o novinkách a speciálních nabídkách.</p>
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
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="content-stretch flex font-['Mona_Sans_VF:Bold',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full" data-name="Summary Header">
      <p className="leading-[1.4] relative shrink-0 text-[18px] whitespace-nowrap">Doporučené pojištění</p>
      <p className="leading-[1.3] relative shrink-0 text-[28px] whitespace-pre">{`1 563  Kč / měsíc`}</p>
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
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#655193] text-[13px] whitespace-nowrap">Cena je kalkulována na základě vašich příjmů, výdajů a majetku. Konečná cena se může lišit dle vybraného rozsahu pojištění.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3f2578] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(63,37,120,0.08)]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full" data-name="Navigation">
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(260.818deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Sjednat a zaplatit</p>
        </div>
      </div>
    </div>
  );
}

export default function FormInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Form Inner">
      <PageHeader />
      <CardOsobniUdaje />
      <CardPrijmy />
      <CardMajetek />
      <CardVydaje />
      <CardSouhlas />
      <CardSummary />
      <Navigation />
    </div>
  );
}