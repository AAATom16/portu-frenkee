function SummaryHeader() {
  return (
    <div className="content-stretch flex font-['Mona_Sans:Bold',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#3f2578] w-full whitespace-nowrap" data-name="Summary Header">
      <p className="leading-[1.4] relative shrink-0 text-[18px]">Pojištění auta</p>
      <p className="leading-[1.3] relative shrink-0 text-[28px]">647 Kč / měsíc</p>
    </div>
  );
}

export default function CardSummary() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Card - Summary">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <SummaryHeader />
        <div className="bg-[#d9d3e4] h-px shrink-0 w-full" data-name="Divider" />
        <p className="font-['Mona_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#655193] text-[13px] w-full">Cena zahrnuje povinné ručení, havarijní pojištění a pojištění skel v balíčku AXA Komfort. Platba jednou měsíčně.</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3f2578] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(63,37,120,0.08)]" />
    </div>
  );
}