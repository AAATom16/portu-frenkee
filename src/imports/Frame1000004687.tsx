import svgPaths from "./svg-h7gtjsgb4k";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Pojištění skel</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/car_window_fill">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p33906a80} fill="var(--fill-0, #00A878)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <div className="bg-[#00A878] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#f8fafc] h-[53px] relative rounded-[12px] shrink-0 w-full" data-name="Summary">
      <div aria-hidden="true" className="absolute border border-[#E5E7EB] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_10.3px_0px_rgba(0,168,120,0.25)]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Rozsah</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Všechna skla</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_right">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Limit</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_right">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[480px]">
      <Input />
      <Input1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      <Summary />
      <Frame2 />
    </div>
  );
}