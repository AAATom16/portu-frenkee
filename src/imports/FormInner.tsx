import svgPaths from "./svg-pa3yoyqq2t";

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

function CardHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideHouse />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">{`Bydlení & energie`}</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputGroupHypoteka() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Group - Hypotéka">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Hypotéka / Nájem</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
    </div>
  );
}

function InputGroupEnergie() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Group - Energie">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Energie</p>
      <Input1 />
    </div>
  );
}

function LeftCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Left Col">
      <InputGroupHypoteka />
      <InputGroupEnergie />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
    </div>
  );
}

function InputGroupTelco() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Group - Telco">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Telco služby</p>
      <Input2 />
    </div>
  );
}

function RightCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Right Col">
      <InputGroupTelco />
    </div>
  );
}

function InputGrid() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Input Grid">
      <LeftCol />
      <RightCol />
    </div>
  );
}

function CardBydleniEnergie() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Card - Bydlení & energie">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <CardHeader />
          <InputGrid />
        </div>
      </div>
    </div>
  );
}

function LucideWallet() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/wallet">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/wallet">
          <path d={svgPaths.p3e8f800} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11d57a00} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideWallet />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Dluhy</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
    </div>
  );
}

function InputGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Input Group">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Spotřebitelské úvěry</p>
      <Input3 />
    </div>
  );
}

function ColL() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="colL2">
      <InputGroup />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
    </div>
  );
}

function InputGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Group">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Splátky kreditních karet</p>
      <Input4 />
    </div>
  );
}

function ColR() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="colR2">
      <InputGroup1 />
    </div>
  );
}

function InputGrid1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Input Grid">
      <ColL />
      <ColR />
    </div>
  );
}

function CardDluhy() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Card - Dluhy">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <CardHeader1 />
          <InputGrid1 />
        </div>
      </div>
    </div>
  );
}

function LucideStar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/star">
          <path d={svgPaths.p1cb8a680} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideStar />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Životní styl</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig6">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Restaurace</p>
      <Input5 />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig8">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Subscriptions</p>
      <Input6 />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig9">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Fitness a Wellness</p>
      <Input7 />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig10">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Cestování</p>
      <Input8 />
    </div>
  );
}

function ColL1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="colL3">
      <Ig />
      <Ig2 />
      <Ig3 />
      <Ig4 />
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig7">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Zábava (kino apod.)</p>
      <Input9 />
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig11">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Móda</p>
      <Input10 />
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig12">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Hobby</p>
      <Input11 />
    </div>
  );
}

function ColR1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="colR3">
      <Ig1 />
      <Ig5 />
      <Ig6 />
    </div>
  );
}

function InputGrid2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Input Grid">
      <ColL1 />
      <ColR1 />
    </div>
  );
}

function CardZivotniStyl() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Card - Životní styl">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <CardHeader2 />
          <InputGrid2 />
        </div>
      </div>
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

function CardHeader3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideShieldCheck />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Finanční závazky</p>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function CL() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="cL4">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Pojištění</p>
      <Input12 />
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function CR() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="cR4">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Spoření a investice</p>
      <Input13 />
    </div>
  );
}

function InputGrid3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Input Grid">
      <CL />
      <CR />
    </div>
  );
}

function CardFinancniZavazky() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Card - Finanční závazky">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <CardHeader3 />
          <InputGrid3 />
        </div>
      </div>
    </div>
  );
}

function LucideHeart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/heart">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/heart">
          <path d={svgPaths.pda9d200} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideHeart />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">{`Rodina & ostatní`}</p>
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig15">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Jídlo</p>
      <Input14 />
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig16">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Zvířata</p>
      <Input15 />
    </div>
  );
}

function CL1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="cL5">
      <Ig7 />
      <Ig8 />
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig17">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Auto</p>
      <Input16 />
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ig10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="ig18">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Děti</p>
      <Input17 />
    </div>
  );
}

function CR1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="cR5">
      <Ig9 />
      <Ig10 />
    </div>
  );
}

function InputGrid4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Input Grid">
      <CL1 />
      <CR1 />
    </div>
  );
}

function CardRodinaOstatni() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Card - Rodina & ostatní">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <CardHeader4 />
          <InputGrid4 />
        </div>
      </div>
    </div>
  );
}

function LucideListPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/list-plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/list-plus">
          <path d="M13.3333 4.16667H2.5" id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9.16667 10H2.5" id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 15.8333H2.5" id="Vector_3" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 7.5V12.5" id="Vector_4" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.5 10H12.5" id="Vector_5" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-name="Card Header">
      <LucideListPlus />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Vlastní položky</p>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Např. Kroužky</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function NameGrp() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="nameGrp">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Název</p>
      <Input18 />
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] relative shrink-0 text-right">0</p>
          <p className="font-['Mona_Sans_VF:Medium',sans-serif] relative shrink-0">Kč</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function AmtGrp() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[180px]" data-name="amtGrp">
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Měsíčně (Kč)</p>
      <Input19 />
    </div>
  );
}

function LucideTrash() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/trash-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/trash-2">
          <path d="M7.5 8.25V12.75" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.5 8.25V12.75" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3357c900} id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.25 4.5H15.75" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19dfc880} id="Vector_5" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DeleteButton() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[8px] shrink-0 size-[40px]" data-name="Delete Button">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideTrash />
      </div>
      <div aria-hidden="true" className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CustomRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full" data-name="Custom Row 1">
      <NameGrp />
      <AmtGrp />
      <DeleteButton />
    </div>
  );
}

function CustomRows() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Custom Rows">
      <CustomRow />
    </div>
  );
}

function AddItemButton() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Add Item Button">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">+ Přidat položku</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-dashed inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CardVlastniPolozky() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Card - Vlastní položky">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <CardHeader5 />
          <CustomRows />
          <AddItemButton />
        </div>
      </div>
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="content-stretch flex font-['Mona_Sans_VF:Bold',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full whitespace-nowrap" data-name="Summary Header">
      <p className="leading-[1.4] relative shrink-0 text-[18px]">Celkové měsíční výdaje</p>
      <p className="leading-[1.3] relative shrink-0 text-[28px]">12 500 Kč</p>
    </div>
  );
}

function CardSummary() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card - Summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <SummaryHeader />
          <div className="bg-[#d4c8ed] h-px shrink-0 w-full" data-name="Divider" />
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6b5e8a] text-[13px] whitespace-nowrap">Odhad slouží pouze pro výpočet doporučeného pojištění.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(63,37,120,0.08)]" />
    </div>
  );
}

export default function FormInner() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Form Inner">
      <CardBydleniEnergie />
      <CardDluhy />
      <CardZivotniStyl />
      <CardFinancniZavazky />
      <CardRodinaOstatni />
      <CardVlastniPolozky />
      <CardSummary />
    </div>
  );
}