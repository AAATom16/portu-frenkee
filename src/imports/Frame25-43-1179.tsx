import svgPaths from "./svg-k2ku5fo8cd";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";
import CardsRow from "./Frame1000004654";

function Input1() {
  return (
    <div className="bg-[#3f2578] content-stretch flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="input">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[1.6]">Měsíčně</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">kvartálně</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">ročně</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0" data-name="input">
      <div className="content-stretch flex gap-[24px] h-full items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[inherit]">
        <Input1 />
        <Frame74 />
        <Frame73 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Frekvence plateb</p>
      </div>
      <Input />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.6]">Upravit nabídku</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/settings_6_line">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p17c79800} fill="var(--fill-0, white)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame50 />
    </div>
  );
}

function Summary({ onEditOffer }: { onEditOffer?: () => void }) {
  return (
    <div
      className="bg-[#3f2578] content-stretch flex flex-col items-start p-[10px] relative rounded-[8px] shrink-0 cursor-pointer"
      data-name="Summary"
      onClick={onEditOffer}
    >
      <Frame19 />
    </div>
  );
}

function Frame78({ onEditOffer }: { onEditOffer?: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] h-[50px] items-center relative shrink-0">
      <Frame79 />
      <Summary onEditOffer={onEditOffer} />
    </div>
  );
}

function Frame2({ onEditOffer }: { onEditOffer?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Dostupné nabídky</p>
      </div>
      <Frame78 onEditOffer={onEditOffer} />
    </div>
  );
}

function Frame4({ onEditOffer }: { onEditOffer?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 onEditOffer={onEditOffer} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Požár, výbuch, blesk</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Voda z vodovodních zařízení</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odcizení vloupáním</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[307px]">
        <p className="leading-[1.6]">Živelní pohromy ( vichřice, krupobití, tíha sněhu)</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Základní asistence zahrnuta</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
      <Frame6 />
      <Frame26 />
      <Frame7 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 150 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Atmosférické srážky</p>
      </div>
      <Frame53 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 180 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Povodeň a záplava</p>
      </div>
      <Frame54 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow2 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] whitespace-pre">{`Vodní  škody - ztráta vody`}</p>
      </div>
      <Frame55 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function BackgroundShadow3() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 180 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow3 />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odcizení</p>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function BackgroundShadow4() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow4 />
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Přepětí</p>
      </div>
      <Frame61 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function BackgroundShadow5() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow5 />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Vandalismus</p>
      </div>
      <Frame64 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function BackgroundShadow6() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow6 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Poškození fasády</p>
      </div>
      <Frame67 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function BackgroundShadow7() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 200 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow7 />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Rozšířená asistence</p>
      </div>
      <Frame70 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame69 />
    </div>
  );
}

function BackgroundShadow8() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow8 />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Právní asistence</p>
      </div>
      <Frame75 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function BackgroundShadow9() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow9 />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">IT asistence</p>
      </div>
      <Frame80 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function BackgroundShadow10() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 500 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow10 />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
      <Frame83 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame45 />
      <Frame46 />
      <Frame49 />
      <Frame52 />
      <Frame59 />
      <Frame62 />
      <Frame65 />
      <Frame68 />
      <Frame71 />
      <Frame76 />
      <Frame81 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <Frame38 />
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame9 />
          <Frame27 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="358" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame47 />
          <Radio />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          <Frame10 />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame39 />
      <Frame8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Požár, výbuch, blesk</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Voda z vodovodních zařízení</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odcizení vloupáním</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[307px]">
        <p className="leading-[1.6]">Živelní pohromy ( vichřice, krupobití, tíha sněhu)</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Základní asistence zahrnuta</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <Frame13 />
      <Frame32 />
      <Frame14 />
    </div>
  );
}

function BackgroundShadow11() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 150 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow11 />
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Atmosférické srážky</p>
      </div>
      <Frame87 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame86 />
    </div>
  );
}

function BackgroundShadow12() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 180 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow12 />
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Povodeň a záplava</p>
      </div>
      <Frame90 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function BackgroundShadow13() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow13 />
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] whitespace-pre">{`Vodní  škody - ztráta vody`}</p>
      </div>
      <Frame93 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame92 />
    </div>
  );
}

function BackgroundShadow14() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 180 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow14 />
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odcizení</p>
      </div>
      <Frame96 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame95 />
    </div>
  );
}

function BackgroundShadow15() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow15 />
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Přepětí</p>
      </div>
      <Frame99 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame98 />
    </div>
  );
}

function BackgroundShadow16() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow16 />
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Vandalismus</p>
      </div>
      <Frame102 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame101 />
    </div>
  );
}

function BackgroundShadow17() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow17 />
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Poškození fasády</p>
      </div>
      <Frame105 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame104 />
    </div>
  );
}

function BackgroundShadow18() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 200 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow18 />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Rozšířená asistence</p>
      </div>
      <Frame108 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame107 />
    </div>
  );
}

function BackgroundShadow19() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow19 />
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Právní asistence</p>
      </div>
      <Frame111 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame110 />
    </div>
  );
}

function BackgroundShadow20() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow20 />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">IT asistence</p>
      </div>
      <Frame114 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame113 />
    </div>
  );
}

function BackgroundShadow21() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 500 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow21 />
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
      <Frame117 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame116 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame85 />
      <Frame88 />
      <Frame91 />
      <Frame94 />
      <Frame97 />
      <Frame100 />
      <Frame103 />
      <Frame106 />
      <Frame109 />
      <Frame112 />
      <Frame115 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <Frame41 />
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame11 />
          <Frame28 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="358" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame84 />
          <Radio1 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          <Frame16 />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame40 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Požár, výbuch, blesk</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Voda z vodovodních zařízení</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odcizení vloupáním</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[307px]">
        <p className="leading-[1.6]">Živelní pohromy ( vichřice, krupobití, tíha sněhu)</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Základní asistence zahrnuta</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame35 />
      <Frame20 />
      <Frame36 />
      <Frame21 />
    </div>
  );
}

function BackgroundShadow22() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 150 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow22 />
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Atmosférické srážky</p>
      </div>
      <Frame121 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame120 />
    </div>
  );
}

function BackgroundShadow23() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 180 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow23 />
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Povodeň a záplava</p>
      </div>
      <Frame124 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame123 />
    </div>
  );
}

function BackgroundShadow24() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow24 />
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] whitespace-pre">{`Vodní  škody - ztráta vody`}</p>
      </div>
      <Frame127 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame126 />
    </div>
  );
}

function BackgroundShadow25() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 180 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow25 />
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odcizení</p>
      </div>
      <Frame130 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame129 />
    </div>
  );
}

function BackgroundShadow26() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow26 />
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Přepětí</p>
      </div>
      <Frame133 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame132 />
    </div>
  );
}

function BackgroundShadow27() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow27 />
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Vandalismus</p>
      </div>
      <Frame136 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame135 />
    </div>
  );
}

function BackgroundShadow28() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow28 />
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Poškození fasády</p>
      </div>
      <Frame139 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame138 />
    </div>
  );
}

function BackgroundShadow29() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 200 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow29 />
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Rozšířená asistence</p>
      </div>
      <Frame142 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame141 />
    </div>
  );
}

function BackgroundShadow30() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow30 />
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Právní asistence</p>
      </div>
      <Frame145 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame144 />
    </div>
  );
}

function BackgroundShadow31() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame148() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 100 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow31 />
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">IT asistence</p>
      </div>
      <Frame148 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame147 />
    </div>
  );
}

function BackgroundShadow32() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 500 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow32 />
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
      <Frame151 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame150 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame119 />
      <Frame122 />
      <Frame125 />
      <Frame128 />
      <Frame131 />
      <Frame134 />
      <Frame137 />
      <Frame140 />
      <Frame143 />
      <Frame146 />
      <Frame149 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <Frame43 />
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame17 />
          <Frame33 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="358" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame118 />
          <Radio2 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          <Frame23 />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame42 />
      <Frame22 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <TravelInsuranceCompanyCard />
      <TravelInsuranceCompanyCard1 />
      <TravelInsuranceCompanyCard2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Porovnání všech nabídek</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Bar() {
  return <div className="bg-[#3f2578] h-[76px] rounded-[8px] shrink-0 w-full" data-name="bar" />;
}

function BarContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="bar_container">
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
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0" data-name="charts">
      {/* Active group — 3 highlighted bars; underline is absolute so it doesn't offset label alignment */}
      <div className="relative flex gap-[24px] items-end">
        <BarContainer />
        <BarContainer1 />
        <BarContainer2 />
        <div className="absolute -bottom-[6px] left-0 right-0 h-[2px] bg-[#3f2578] rounded-full" />
      </div>
      <BarContainer3 />
      <BarContainer4 />
      <BarContainer5 />
      <BarContainer6 />
      <BarContainer7 />
      <BarContainer8 />
      <BarContainer9 />
      <BarContainer10 />
      <BarContainer11 />
    </div>
  );
}

function TravelInsuranceCompanyCard3() {
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

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame37 />
      <TravelInsuranceCompanyCard3 />
    </div>
  );
}

function Frame58({ onEditOffer }: { onEditOffer?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame4 onEditOffer={onEditOffer} />
      <CardsRow />
      <Frame152 />
    </div>
  );
}

export default function Frame({ onEditOffer }: { onEditOffer?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center px-[99px] py-[24px] relative size-full">
      <Frame58 onEditOffer={onEditOffer} />
    </div>
  );
}