function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Porovnání všech nabídek</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Bar() {
  return <div className="bg-[#3f2578] h-[76px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#3f2578] text-[14px] text-center w-[min-content]">AXA</p>
    </div>
  );
}

function Bar1() {
  return <div className="bg-[#3f2578] h-[88px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar1 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#3f2578] text-[14px] text-center w-[min-content]">Axa</p>
    </div>
  );
}

function Bar2() {
  return <div className="bg-[#3f2578] h-[92px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">10 023 Kč</p>
      </div>
      <Bar2 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#3f2578] text-[14px] text-center w-[min-content]">Slavia</p>
    </div>
  );
}

function Bar3() {
  return <div className="bg-[#e2e9f0] h-[75px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar3 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Generali</p>
    </div>
  );
}

function Bar4() {
  return <div className="bg-[#e2e9f0] h-[76px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar4 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">AXA</p>
    </div>
  );
}

function Bar5() {
  return <div className="bg-[#e2e9f0] h-[88px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar5 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Axa</p>
    </div>
  );
}

function Bar6() {
  return <div className="bg-[#e2e9f0] h-[92px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">10 023 Kč</p>
      </div>
      <Bar6 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Slavia</p>
    </div>
  );
}

function Bar7() {
  return <div className="bg-[#e2e9f0] h-[75px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar7 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Generali</p>
    </div>
  );
}

function Bar8() {
  return <div className="bg-[#e2e9f0] h-[92px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">10 023 Kč</p>
      </div>
      <Bar8 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Slavia</p>
    </div>
  );
}

function Bar9() {
  return <div className="bg-[#e2e9f0] h-[76px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar9 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">AXA</p>
    </div>
  );
}

function Bar10() {
  return <div className="bg-[#e2e9f0] h-[75px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar10 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Generali</p>
    </div>
  );
}

function Bar11() {
  return <div className="bg-[#e2e9f0] h-[88px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-end relative shrink-0" data-name="bar_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">7 023 Kč</p>
      </div>
      <Bar11 />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[min-content]">Axa</p>
    </div>
  );
}

function Charts() {
  return (
    <div className="content-stretch flex gap-[24px] items-end justify-end relative shrink-0" data-name="charts">
      {/* Active group — 3 highlighted bars; underline is absolute so it doesn't offset label alignment */}
      <div className="relative flex gap-[24px] items-end">
        <div className="flex flex-row items-end self-stretch">
          <BarContainer />
        </div>
        <div className="flex flex-row items-end self-stretch">
          <BarContainer1 />
        </div>
        <div className="flex flex-row items-end self-stretch">
          <BarContainer2 />
        </div>
        <div className="absolute -bottom-[6px] left-0 right-0 h-[2px] bg-[#3f2578] rounded-full" />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer3 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer4 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer5 />
      </div>
      <BarContainer6 />
      <div className="flex flex-row items-end self-stretch">
        <BarContainer7 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer8 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer9 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer10 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <BarContainer11 />
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard() {
  return (
    <div className="bg-gradient-to-r from-white relative rounded-[12px] shrink-0 to-white w-full" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[24px] relative w-full">
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default function Frame1000004692() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
      <Frame1 />
      <TravelInsuranceCompanyCard />
    </div>
  );
}