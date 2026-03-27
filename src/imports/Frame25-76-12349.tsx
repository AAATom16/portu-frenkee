import imgChatGptImageJan222026014137Pm2 from "figma:asset/8c7e0309c7c87899dda928e6dfd0a33f87fc8531.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Co budeme pojišťovat?</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Nemovitost</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame18 />
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame7 />
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] w-full">
        <p className="leading-[1.6]">tvoří soubor movitých věcí sloužících k běžnému užívání osobami žijícími ve společné domácnosti v pojištěné nemovitosti.</p>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div className="content-stretch flex gap-[10px] items-start p-[12px] relative w-full">
        <div className="h-[104px] relative shrink-0 w-[127px]" data-name="ChatGPT Image Jan 22, 2026, 01_41_37 PM 2">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[183.51%] left-0 max-w-none top-[-33.33%] w-full" src={imgChatGptImageJan222026014137Pm2} />
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0" />
          </div>
        </div>
        <Frame4 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Dispozice bytu</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[87px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#94a3b8] text-[14px] text-ellipsis whitespace-nowrap">2+KK</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lucide/chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
              <path d="M0.5 0.5L4.5 4.5L8.5 0.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <Text />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function InputFieldSkeleton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <LabelContainer />
      <Input />
    </div>
  );
}

function InputFieldGeneral() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="input_field_general">
      <InputFieldSkeleton />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Podlahová plocha</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="input">
      <div className="content-stretch flex gap-[8px] h-full items-center min-w-[inherit] overflow-clip px-[12px] relative rounded-[inherit]">
        <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
          <p className="leading-[1.6]">110</p>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-0.5px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0.5">
                  <line id="Line 8" stroke="var(--stroke-0, #94A3B8)" strokeWidth="0.5" x2="24" y1="0.25" y2="0.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Bold',sans-serif]">
            <span className="leading-[1.6]">m</span>
            <span className="leading-[1.6] text-[9.030000000000001px]">2</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input_field/skeleton">
      <LabelContainer1 />
      <Input1 />
    </div>
  );
}

function InputFieldGeneral1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="input_field_general">
      <InputFieldSkeleton1 />
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Číslo bytu</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-[200px]" data-name="input">
      <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
          <p className="leading-[1.6]">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="input_field/skeleton">
      <LabelContainer2 />
      <Input2 />
    </div>
  );
}

function InputFieldGeneral2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="input_field_general">
      <InputFieldSkeleton2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <InputFieldGeneral />
      <InputFieldGeneral1 />
      <InputFieldGeneral2 />
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Umístění bytu</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#3f2578] content-stretch flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="input">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[1.6]">V rodinném domě</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">v bytovém domě</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0" data-name="input">
      <div className="content-stretch flex gap-[8px] h-full items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[inherit]">
        <Input4 />
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <LabelContainer3 />
      <Input3 />
    </div>
  );
}

function InputFieldGeneral3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="input_field_general">
      <InputFieldSkeleton3 />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Byt se nachází ve vyšším patře</p>
      </div>
      <Frame8 />
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Konstrukce nemovitosti</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-[#3f2578] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
            <p className="leading-[1.6]">Panel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Dřevo</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Cihla</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative size-full">
          <Input6 />
          <Frame13 />
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer4 />
      <Input5 />
    </div>
  );
}

function LabelContainer5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Kvalita bytu</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-[#3f2578] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
            <p className="leading-[1.6]">Standardní</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Nadstandard</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative size-full">
          <Input8 />
          <Frame15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer5 />
      <Input7 />
    </div>
  );
}

function LabelContainer6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Stav bytu</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-[#3f2578] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
            <p className="leading-[1.6]">Dobře udržovaný</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Po rekonstrukci / novostavba</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Potřebuje rekonstrukci</p>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative size-full">
          <Input10 />
          <Frame16 />
          <Frame17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer6 />
      <Input9 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow2 />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Byt má balkon</p>
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0" data-name="input">
      <div className="content-stretch flex gap-[8px] h-full items-center min-w-[inherit] overflow-clip px-[12px] relative rounded-[inherit]">
        <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
          <p className="leading-[1.6]">110</p>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-0.5px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0.5">
                  <line id="Line 8" stroke="var(--stroke-0, #94A3B8)" strokeWidth="0.5" x2="24" y1="0.25" y2="0.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">
          <p className="font-['Mona_Sans_VF:Bold',sans-serif]">
            <span className="leading-[1.6]">m</span>
            <span className="leading-[1.6] text-[9.030000000000001px]">2</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame27 />
      <Input11 />
    </div>
  );
}

function BackgroundShadow3() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow3 />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Byt má terasu</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function LabelContainer7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Vybavení domu a bytu</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function InputFieldSkeleton7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer7 />
    </div>
  );
}

function BackgroundShadow4() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow4 />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Garážové stání</p>
      </div>
    </div>
  );
}

function BackgroundShadow5() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow5 />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">V domě je výtah</p>
      </div>
    </div>
  );
}

function BackgroundShadow6() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow6 />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Parkovací stání</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame29 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <InputFieldSkeleton7 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame5 />
      <InputFieldGeneral3 />
      <Frame6 />
      <InputFieldSkeleton4 />
      <InputFieldSkeleton5 />
      <InputFieldSkeleton6 />
      <Frame21 />
      <Frame25 />
    </div>
  );
}

function LabelContainer8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Hodnota nemovitosti</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function LabelContainer9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[16px]">
        <p className="leading-[1.6]">Cena, za kterou by bylo možné na trhu koupit stejný byt, stejné kvality, ve stejné lokalitě.</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
      <LabelContainer8 />
      <LabelContainer9 />
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">0</p>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0.5">
                    <line id="Line 8" stroke="var(--stroke-0, #94A3B8)" strokeWidth="0.5" x2="24" y1="0.25" y2="0.25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">
            <p className="leading-[1.6]">Kč</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <Frame30 />
      <Input12 />
    </div>
  );
}

function InputFieldGeneral4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="input_field_general">
      <InputFieldSkeleton8 />
    </div>
  );
}

function Summary1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[12px] relative w-full">
        <InputFieldGeneral4 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center px-[99px] py-[24px] relative size-full">
      <Frame9 />
      <Frame26 />
      <Frame11 />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </div>
  );
}