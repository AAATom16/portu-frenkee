import svgPaths from "./svg-coobc4a51";

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

function HeaderLeft() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Header Left">
      <LucideShieldCheck />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Vybrané pojištění</p>
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
    <div className="content-stretch flex font-['Mona_Sans_VF:Medium',sans-serif] items-start justify-between overflow-clip relative shrink-0 text-[#3f2578] w-full" data-name="Row">
      <p className="relative shrink-0">AXA – Chci být safe (Excelent)</p>
      <p className="relative shrink-0">50 Kč</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-[#655193]">Zimní sporty vč. lyžování a výbavy</p>
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0 text-[#3f2578]">62 Kč</p>
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Rows">
      <Row />
      <Row1 />
    </div>
  );
}

export default function CardVybranePojisteni() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] size-full" data-name="Card - Vybrané pojištění">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <CardHeader />
        <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
        <Rows />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}