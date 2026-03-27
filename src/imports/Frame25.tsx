import svgPaths from "./svg-koylo6oodi";
import imgAvatar from "figma:asset/f29a5a20848e95634cddf558560f2f1b558af759.png";
import imgAvatar1 from "figma:asset/57bb5a209c722857fa8f1034e366a55de909f381.png";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pojistník</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0" data-name="radio">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="radio_button_fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Group">
              <g id="Vector" />
              <path d={svgPaths.pbbdde00} fill="var(--fill-0, #64748B)" id="Vector_2" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[16px] whitespace-nowrap">
          <p className="leading-[1.6]">Soukromá osoba</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0" data-name="radio">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
          <div className="absolute inset-[8.33%]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path clipRule="evenodd" d={svgPaths.p17aa5480} fill="var(--fill-0, #CBD5E1)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[16px] whitespace-nowrap">
          <p className="leading-[1.6]">Firma</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0" data-name="radio">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
          <div className="absolute inset-[8.33%]" data-name="vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path clipRule="evenodd" d={svgPaths.p17aa5480} fill="var(--fill-0, #CBD5E1)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[16px] whitespace-nowrap">
          <p className="leading-[1.6]">OSVČ</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Jméno</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
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
            <p className="leading-[1.6]">Jméno</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Přijmení</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer />
      <Input />
      <Input1 />
    </div>
  );
}

function InputFieldGeneral() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input_field_general">
      <InputFieldSkeleton />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Rodné cíšlo</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
        <p className="leading-[1.6]">*</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">rodné číslo</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <LabelContainer1 />
      <Input2 />
    </div>
  );
}

function InputFieldGeneral1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input_field_general">
      <InputFieldSkeleton1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Adresa</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
        <p className="leading-[1.6]">*</p>
      </div>
    </div>
  );
}

function Input3() {
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

function InputFieldSkeleton2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input3 />
    </div>
  );
}

function Input4() {
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

function InputFieldSkeleton3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input4 />
    </div>
  );
}

function Input5() {
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

function InputFieldSkeleton4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input5 />
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

function Input6() {
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

function Input7() {
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
        <Input6 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
        <Input7 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0 w-full">
      <InputFieldSkeleton2 />
      <InputFieldSkeleton3 />
      <InputFieldSkeleton4 />
      <InputRow />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input_field">
      <InputField1 />
    </div>
  );
}

function MingIconCheckboxFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ming_icon/checkbox_fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ming_icon/checkbox_fill">
          <path clipRule="evenodd" d={svgPaths.p1c130880} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0" data-name="radio">
      <MingIconCheckboxFill />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[16px] whitespace-nowrap">
        <p className="leading-[1.6]">Jsem vlastník vozidla</p>
      </div>
    </div>
  );
}

function MingIconCheckboxFill1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ming_icon/checkbox_fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ming_icon/checkbox_fill">
          <path clipRule="evenodd" d={svgPaths.p1c130880} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[2px] relative rounded-[2px] shrink-0" data-name="radio">
      <MingIconCheckboxFill1 />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[16px] whitespace-nowrap">
        <p className="leading-[1.6]">Jsem provozovatel a zapsaný v malém technickém průkazu</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">
        <p className="leading-[1.6]">Vlastník a provozovatel vozidla</p>
      </div>
      <Radio />
      <Radio1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[340px] pt-[24px] px-[99px] relative size-full">
      <Frame3 />
      <InputFieldGeneral />
      <InputFieldGeneral1 />
      <InputField />
      <div className="h-0 relative shrink-0 w-[592px]">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 592 0.4">
            <line id="Line 1" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="592" y1="0.2" y2="0.2" />
          </svg>
        </div>
      </div>
      <Frame6 />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </div>
  );
}