function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Vztah k nemovitosti</p>
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
    <div className="bg-[#3f2578] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
            <p className="leading-[1.6]">Vlastník</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Nájemce</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative size-full">
          <Input1 />
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
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

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">Pronajímáte nemovitost</p>
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

function Input3() {
  return (
    <div className="bg-[#3f2578] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
            <p className="leading-[1.6]">Ne</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Ano</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative size-full">
          <Input3 />
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="input_field/skeleton">
      <LabelContainer1 />
      <Input2 />
    </div>
  );
}

export default function InputFieldGeneral() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full" data-name="input_field_general">
      <InputFieldSkeleton />
      <InputFieldSkeleton1 />
    </div>
  );
}