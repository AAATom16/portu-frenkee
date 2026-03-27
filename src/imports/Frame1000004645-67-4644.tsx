import svgPaths from "./svg-xaq5xg72l3";
import imgAvatar from "figma:asset/f29a5a20848e95634cddf558560f2f1b558af759.png";
import imgAvatar1 from "figma:asset/57bb5a209c722857fa8f1034e366a55de909f381.png";

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Adresa</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/search_3_line">
            <div className="absolute inset-[8.33%_11.99%_11.99%_8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1213 19.1213">
                <path clipRule="evenodd" d={svgPaths.p314c2c80} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-tl-[13px] rounded-tr-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Země původu</p>
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
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Stát</p>
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
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input2 />
    </div>
  );
}

function Ends() {
  return (
    <div className="h-full relative shrink-0" data-name="ends">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center pr-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">{`https://`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrefixContainer() {
  return (
    <div className="h-full relative shrink-0" data-name="prefix_container">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pr-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">Prefix</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_left">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserContainer() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="user_container">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative rounded-[1200px] shrink-0 size-[16px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1200px] size-full" src={imgAvatar} />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.6]">Jane Doe</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="ming_icon/close_line">
        <div className="absolute inset-[19.32%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36394 7.36397">
            <path clipRule="evenodd" d={svgPaths.p82fb380} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UserContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="user_container">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative rounded-[1200px] shrink-0 size-[16px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1200px] size-full" src={imgAvatar1} />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.6]">John Doe</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="ming_icon/close_line">
        <div className="absolute inset-[19.32%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36394 7.36397">
            <path clipRule="evenodd" d={svgPaths.p82fb380} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UserOtherContainer() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-[2px] py-[4px] relative rounded-[8px] shrink-0" data-name="user_other_container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.6]">+4 others</p>
      </div>
    </div>
  );
}

function Suffix() {
  return (
    <div className="h-full relative shrink-0" data-name="suffix">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">Suffix</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dropdown">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ends1() {
  return (
    <div className="h-full relative shrink-0" data-name="ends">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center pl-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-bl-[12px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Ends />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_left">
            <div className="absolute inset-[9.5%_9.49%_9.5%_9.5%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2017 16.2017">
                <path clipRule="evenodd" d={svgPaths.p2b2e8e00} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
          <PrefixContainer />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Město</p>
          </div>
          <UserContainer />
          <UserContainer1 />
          <UserOtherContainer />
          <Suffix />
          <Ends1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-bl-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Ends2() {
  return (
    <div className="h-full relative shrink-0" data-name="ends">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center pr-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">{`https://`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrefixContainer1() {
  return (
    <div className="h-full relative shrink-0" data-name="prefix_container">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pr-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">Prefix</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_left">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="user_container">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative rounded-[1200px] shrink-0 size-[16px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1200px] size-full" src={imgAvatar} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.6]">Jane Doe</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="ming_icon/close_line">
        <div className="absolute inset-[19.32%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36394 7.36397">
            <path clipRule="evenodd" d={svgPaths.p82fb380} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UserContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="user_container">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative rounded-[1200px] shrink-0 size-[16px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1200px] size-full" src={imgAvatar1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.6]">John Doe</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="ming_icon/close_line">
        <div className="absolute inset-[19.32%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36394 7.36397">
            <path clipRule="evenodd" d={svgPaths.p82fb380} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UserOtherContainer1() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-[2px] py-[4px] relative rounded-[8px] shrink-0" data-name="user_other_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[1.6]">+4 others</p>
      </div>
    </div>
  );
}

function Suffix1() {
  return (
    <div className="h-full relative shrink-0" data-name="suffix">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">Suffix</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dropdown">
            <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0948 6.3807">
                <path clipRule="evenodd" d={svgPaths.p288a8400} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ends3() {
  return (
    <div className="h-full relative shrink-0" data-name="ends">
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center pl-[12px] py-[4px] relative">
          <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
            <p className="leading-[1.6]">.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[40px] relative rounded-br-[12px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Ends2 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_left">
            <div className="absolute inset-[9.5%_9.49%_9.5%_9.5%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2017 16.2017">
                <path clipRule="evenodd" d={svgPaths.p2b2e8e00} fill="var(--fill-0, #94A3B8)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
          <PrefixContainer1 />
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Směrovací číslo</p>
          </div>
          <UserContainer2 />
          <UserContainer3 />
          <UserOtherContainer1 />
          <Suffix1 />
          <Ends3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-[-1px] pointer-events-none rounded-br-[13px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="input_row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
        <Input3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
        <Input4 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] size-full">
      <InputFieldSkeleton />
      <InputFieldSkeleton1 />
      <InputFieldSkeleton2 />
      <InputRow />
    </div>
  );
}