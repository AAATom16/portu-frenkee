import svgPaths from "./svg-hphq6d7i9y";
import imgChatGptImageFeb82026083207Pm1 from "figma:asset/7fbb9461ffb5d8e96cbc1919a8f42b2fc543bef8.png";

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Domácnost</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame3 />
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[14px] w-full">
        <p className="leading-[1.6]">tvoří soubor movitých věcí sloužících k běžnému užívání osobami žijícími ve společné domácnosti v pojištěné nemovitosti.</p>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div className="content-stretch flex gap-[10px] items-start p-[12px] relative w-full">
        <div className="h-[110px] relative shrink-0 w-[127px]" data-name="ChatGPT Image Feb 8, 2026, 08_32_07 PM 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[128%] left-[-4.75%] max-w-none top-[-8.13%] w-[110.58%]" src={imgChatGptImageFeb82026083207Pm1} />
          </div>
        </div>
        <Frame2 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Hodnota nemovitosti</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="label_container">
      <Frame16 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[16px]">
        <p className="leading-[1.6]">Cena, za kterou by bylo možné na trhu koupit stejný byt, stejné kvality, ve stejné lokalitě.</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <LabelContainer />
      <LabelContainer1 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">0</p>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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

function InputFieldSkeleton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <Frame7 />
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

function Summary1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[12px] relative w-full">
        <InputFieldGeneral />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-[474px] whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Věci zvláštní hodnoty</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="label_container">
      <Frame15 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <LabelContainer2 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">0</p>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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

function InputFieldSkeleton1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <Frame9 />
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

function Summary2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[12px] relative w-full">
        <InputFieldGeneral1 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Vybavení i věci připevněné</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="label_container">
      <Frame14 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <LabelContainer3 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">0</p>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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

function InputFieldSkeleton2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <Frame11 />
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

function Summary3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[12px] relative w-full">
        <InputFieldGeneral2 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-[509.5px] whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Věci v nebytových prostorech</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
      </div>
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="label_container">
      <Frame17 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <LabelContainer4 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">0</p>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
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

function InputFieldSkeleton3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <Frame13 />
      <Input3 />
    </div>
  );
}

function InputFieldGeneral3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="input_field_general">
      <InputFieldSkeleton3 />
    </div>
  );
}

function Summary4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Summary">
      <div aria-hidden="true" className="absolute border border-[#edf2f7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[12px] relative w-full">
        <InputFieldGeneral3 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Summary4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center px-[99px] py-[24px] relative size-full">
      <Frame5 />
      <Frame6 />
      <Frame8 />
      <Frame10 />
      <Frame12 />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </div>
  );
}