import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../app/components/NavbarHeader";
import StepIndicator from "../app/components/cestovani/StepIndicator";
import { StepButtons } from "../app/components/StepButtons";
import svgPaths from "./svg-3jhk8u6ixa";
import imgAvatar from "figma:asset/f29a5a20848e95634cddf558560f2f1b558af759.png";
import imgAvatar1 from "figma:asset/57bb5a209c722857fa8f1034e366a55de909f381.png";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání cestovního pojištění</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#e6f7f3] content-stretch flex h-[40px] items-center left-[131px] px-[12px] py-[2px] rounded-[8px] top-[4199px]" data-name="badge">
      <div aria-hidden="true" className="absolute border border-[#00A878] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[#1A1A1A] whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Cestovní pojištění</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#e6f7f3] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4187px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#00A878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#e6f7f3] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4329px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#00A878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Úvěry</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#e6f7f3] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4473px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#00A878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění pro cizince</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#e6f7f3] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4617px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#00A878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00A878] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Shrnutí</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Axa Premium</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame22 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/location_fill">
        <div className="absolute inset-[8.33%_12.5%_7.64%_12.5%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.1663">
            <path d={svgPaths.pf2f7e00} fill="var(--fill-0, #EF8600)" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Albánie</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/user_2_fill">
        <div className="absolute inset-[8.33%_12.5%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p9494b80} fill="var(--fill-0, #EF8600)" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 Osoba</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/calendar_month_fill">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1cce9500} fill="var(--fill-0, #EF8600)" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Datum - datum (x dny)</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/surfboard_line">
        <div className="absolute inset-[15.53%_15.53%_9.67%_9.66%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9543 17.9542">
            <path clipRule="evenodd" d={svgPaths.p1a024b00} fill="var(--fill-0, #EF8600)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Zimní sporty včetně lyžování a lyžařské výbavy</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Summary() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[492px]" data-name="Summary">
      <Frame23 />
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Jsem</p>
      </div>
    </div>
  );
}

function Frame19() {
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
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap">
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
        <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap">
          <p className="leading-[1.6]">Firma</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[496px]">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
        <p className="leading-[1.6]">Jméno</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[497px]" data-name="input_field_general">
      <InputFieldSkeleton />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="label_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
        <p className="leading-[1.6]">Rodné cíšlo</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">&nbsp;</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[497px]" data-name="input_field_general">
      <InputFieldSkeleton1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
        <p className="leading-[1.6]">Adresa</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
        <p className="leading-[1.6]">*</p>
      </div>
    </div>
  );
}

function MingIconSearch3Line({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[24px]"} data-name="ming_icon/search_3_line">
      <div className="absolute inset-[8.33%_11.99%_11.99%_8.33%]" data-name="vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1213 19.1213">
          <path clipRule="evenodd" d={svgPaths.p314c2c80} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Adresa</p>
          </div>
          <MingIconSearch3Line />
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
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
          <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
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
          <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
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
          <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
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
          <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Město</p>
          </div>
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
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
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
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[12px] text-right whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-right whitespace-nowrap">
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
          <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[14px] text-right whitespace-nowrap">
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
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-right whitespace-nowrap">
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
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Směrovací číslo</p>
          </div>
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

function Frame24() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0 w-full">
      <InputFieldSkeleton2 />
      <InputFieldSkeleton3 />
      <InputFieldSkeleton4 />
      <InputRow />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[492px]" data-name="input_field">
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
        <p className="leading-[1.6]">Kontaktní údaje</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
        <p className="leading-[1.6]">*</p>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">Telefon</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">E-mail</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function InputFieldSkeleton5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input8 />
      <Input9 />
    </div>
  );
}

function InputFieldGeneral2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[497px]" data-name="input_field_general">
      <Frame26 />
      <InputFieldSkeleton5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] px-[99px] relative shrink-0">
      <Summary />
      <Frame20 />
      <InputFieldGeneral />
      <InputFieldGeneral1 />
      <InputField />
      <InputFieldGeneral2 />
      <div className="h-0 relative shrink-0 w-[493px]">
        <div className="absolute inset-[-0.4px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 0.4">
            <line id="Line 4" stroke="var(--stroke-0, #E5E5E5)" strokeOpacity="0.5" strokeWidth="0.4" x2="493" y1="0.2" y2="0.2" />
          </svg>
        </div>
      </div>
      <StepButtons backTo="/cestovani/krok-2" nextTo="/cestovani/krok-4" />
    </div>
  );
}

export default function Cestovko() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen" data-name="Cestovko 3">
      <NavbarHeaderShared activeTab="cestovani" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={3} />
      </div>
      <Frame12 />
    </div>
  );
}