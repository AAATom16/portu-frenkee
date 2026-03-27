import svgPaths from "./svg-b6eo52ohts";

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

function CardHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideShieldCheck />
      <p className="font-['Mona_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Souhlas a potvrzení</p>
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
      <p className="font-['Mona_Sans:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] w-[520px]">Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.</p>
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
      <p className="font-['Mona_Sans:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Souhlasím se zpracováním osobních údajů v souladu s GDPR.</p>
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
      <p className="font-['Mona_Sans:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Chci dostávat informace o novinkách a speciálních nabídkách.</p>
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
      <p className="font-['Mona_Sans:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.</p>
    </div>
  );
}

export default function CardSouhlas() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] size-full" data-name="Card - Souhlas">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <CardHeader />
        <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="Divider" />
        <CheckboxRow />
        <CheckboxRow1 />
        <CheckboxRow2 />
        <CheckboxRow3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}