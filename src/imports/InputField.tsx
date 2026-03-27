import svgPaths from "./svg-9z7hywsjcp";

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6] font-bold">Limity pojištění</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
        <p className="leading-[1.6]">*</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">...</p>
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

export default function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="input_field">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
        <LabelContainer />
        <Input />
      </div>
    </div>
  );
}