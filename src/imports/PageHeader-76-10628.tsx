function S() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S1() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S2() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S3() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S4() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S5() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S6() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S7() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function StepIndicator() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Step Indicator">
      <S />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
      <S6 />
      <S7 />
    </div>
  );
}

export default function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full" data-name="Page Header">
      <StepIndicator />
      <p className="font-['Mona_Sans_VF:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[12px] whitespace-nowrap">Krok 1 z 8</p>
    </div>
  );
}