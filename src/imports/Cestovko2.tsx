import { Link as RouterLink } from "react-router";
import svgPaths from "./svg-4bunbu02ed";
import ComparisonChart from "./Frame1000004692";
import NavbarHeaderShared from "../app/components/NavbarHeader";
import StepIndicator from "../app/components/cestovani/StepIndicator";
import imgChatGptImageJan222026053442Pm1 from "figma:asset/1c9a32916bc8db50cb48c2f4aa1c6d85e4813a31.png";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";
import imgPictureNaTentoProjektBylaPoskytnutaFinancniPodporaOdEvropskeUnie from "figma:asset/64e676c357a0f3e22dc152d792e1f5ecb200139a.png";
import { StepButtons } from "../app/components/StepButtons";

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
    <div className="absolute bg-[#ebecff] content-stretch flex h-[40px] items-center left-[131px] px-[12px] py-[2px] rounded-[8px] top-[4199px]" data-name="badge">
      <div aria-hidden="true" className="absolute border border-[#d9d3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.6]">Cestovní pojištění</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4187px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4329px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Úvěry</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4473px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění pro cizince</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4617px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">Shrnutí</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Axa Premium</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame19 />
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
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center whitespace-nowrap">
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
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center whitespace-nowrap">
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
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center whitespace-nowrap">
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
      <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Zimní sporty včetně lyžování a lyžařské výbavy</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Summary() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Summary">
      <Frame34 />
      <Frame18 />
    </div>
  );
}

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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-[300px] whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Léčebné výlohy</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">500 000 000 Kč</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úraz</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">1 000 000 Kč</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Ano</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odpovědnost</p>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Právní asistence</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">100 000 Kč</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Zavazadla</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">60 000 Kč</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Pojištění</p>
      </div>
      <Frame39 />
      <Frame40 />
      <Frame21 />
      <Frame41 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[12px] relative shrink-0">
      <Frame20 />
      <Frame42 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame46() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Storno zájezdu</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 310 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow />
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">30 000</p>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input1 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <Frame46 />
      <InputFieldSkeleton />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Adrenalinové sporty</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 62 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow1 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Sportovní vybavení</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow2 />
      </div>
    </div>
  );
}

function BackgroundShadow3() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Drink povolen</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 10 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow3 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow4() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Záloha půjčeného vozidla</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow4 />
      </div>
    </div>
  );
}

function BackgroundShadow5() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pro práci a studium</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow5 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Připojištění</p>
      </div>
      <Frame45 />
      <Frame47 />
    </div>
  );
}

function Radio() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
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

function Frame63() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame24 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="300" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame62 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 0.4">
                <line id="Line 7" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="300" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Radio />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">125 Kč</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[12px] relative w-full">
          <Frame25 />
          <RouterLink to="/cestovani/krok-3" className="h-[48px] relative rounded-[12px] shrink-0 w-full no-underline cursor-pointer hover:opacity-90 transition-opacity" data-name="primary" style={{ backgroundImage: "linear-gradient(254.341deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                  <p className="leading-[1.6]">Pokračovat</p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-white gap-[10px] items-center justify-center relative rounded-[12px] shrink-0 to-white w-[324px]" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame63 />
      <Frame23 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-[300px] whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Léčebné výlohy</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">500 000 000 Kč</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úraz</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">1 000 000 Kč</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Ano</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odpovědnost</p>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Právní asistence</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">100 000 Kč</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Zavazadla</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">60 000 Kč</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Pojištění</p>
      </div>
      <Frame55 />
      <Frame56 />
      <Frame28 />
      <Frame58 />
      <Frame29 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[12px] relative shrink-0">
      <Frame27 />
      <Frame54 />
    </div>
  );
}

function BackgroundShadow6() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame60() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Storno zájezdu</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 310 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow6 />
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">30 000</p>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input2 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <Frame60 />
      <InputFieldSkeleton1 />
    </div>
  );
}

function BackgroundShadow7() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Adrenalinové sporty</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 62 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow7 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function BackgroundShadow8() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Sportovní vybavení</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow8 />
      </div>
    </div>
  );
}

function BackgroundShadow9() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Drink povolen</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 10 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow9 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow10() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Záloha půjčeného vozidla</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow10 />
      </div>
    </div>
  );
}

function BackgroundShadow11() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pro práci a studium</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow11 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame66 />
      <Frame68 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Připojištění</p>
      </div>
      <Frame59 />
      <Frame61 />
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
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

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame26 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="300" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame65 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 0.4">
                <line id="Line 7" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="300" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Radio1 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">125 Kč</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[12px] relative w-full">
          <Frame31 />
          <RouterLink to="/cestovani/krok-3" className="h-[48px] relative rounded-[12px] shrink-0 w-full no-underline cursor-pointer hover:opacity-90 transition-opacity" data-name="primary" style={{ backgroundImage: "linear-gradient(254.341deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                  <p className="leading-[1.6]">Pokračovat</p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-white gap-[10px] items-center justify-center relative rounded-[12px] shrink-0 to-white w-[324px]" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame64 />
      <Frame30 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-[300px] whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Léčebné výlohy</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">500 000 000 Kč</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úraz</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">1 000 000 Kč</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/check_fill">
        <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9705 14.2723">
            <path clipRule="evenodd" d={svgPaths.p6929a00} fill="var(--fill-0, #64748B)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Ano</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Odpovědnost</p>
      </div>
      <Frame76 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Právní asistence</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">100 000 Kč</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Zavazadla</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6] font-bold">60 000 Kč</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Pojištění</p>
      </div>
      <Frame74 />
      <Frame75 />
      <Frame35 />
      <Frame77 />
      <Frame36 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[12px] relative shrink-0">
      <Frame33 />
      <Frame73 />
    </div>
  );
}

function BackgroundShadow12() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame80() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Storno zájezdu</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 310 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow12 />
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px]">
            <p className="leading-[1.6]">30 000</p>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
      <Input3 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <Frame80 />
      <InputFieldSkeleton2 />
    </div>
  );
}

function BackgroundShadow13() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Adrenalinové sporty</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 62 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow13 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame83 />
    </div>
  );
}

function BackgroundShadow14() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Sportovní vybavení</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow14 />
      </div>
    </div>
  );
}

function BackgroundShadow15() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Drink povolen</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.6] font-bold">+ 10 Kč</p>
        </div>
        <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
          <BackgroundShadow15 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow16() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Záloha půjčeného vozidla</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow16 />
      </div>
    </div>
  );
}

function BackgroundShadow17() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Pro práci a studium</p>
      </div>
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow17 />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame82 />
      <Frame84 />
      <Frame85 />
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6] font-bold">Připojištění</p>
      </div>
      <Frame79 />
      <Frame81 />
    </div>
  );
}

function Radio2() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
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

function Frame72() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame32 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="300" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame78 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 0.4">
                <line id="Line 7" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="300" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Radio2 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
        <p className="leading-[1.6]">125 Kč</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[12px] relative w-full">
          <Frame38 />
          <RouterLink to="/cestovani/krok-3" className="h-[48px] relative rounded-[12px] shrink-0 w-full no-underline cursor-pointer hover:opacity-90 transition-opacity" data-name="primary" style={{ backgroundImage: "linear-gradient(254.341deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
                  <p className="leading-[1.6]">Pokračovat</p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-white gap-[10px] items-center justify-center relative rounded-[12px] shrink-0 to-white w-[324px]" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame72 />
      <Frame37 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <TravelInsuranceCompanyCard />
      <TravelInsuranceCompanyCard1 />
      <TravelInsuranceCompanyCard2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[68px] pt-[24px] px-[99px] relative shrink-0">
      <Summary />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input_field">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input_field/skeleton">
          <LabelContainer />
          <Input />
        </div>
      </div>
      <Frame44 />
      <ComparisonChart />
      <StepButtons backTo="/cestovani/krok-1" nextTo="/cestovani/krok-3" />
    </div>
  );
}

function BrandColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px not-italic overflow-clip relative" data-name="Brand Column">
      <p className="bg-clip-text font-['Mona_Sans_VF:Bold',sans-serif] leading-none relative shrink-0 text-[36px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(260.245deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}>
        Frenkee
      </p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.7] min-w-full relative shrink-0 text-[#64748b] text-[14px] text-justify w-[min-content]">Provozovatel portálu Frenkee je společnost InSureMe.com s.r.o. zapsaná v registru ČNB jako Samostatný zprostředkovatel dle zákona o distribuci pojištění a zajištění a Samostatný zprostředkovatel banky dle zákona o spotřebitelském úvěru</p>
    </div>
  );
}

function ZakaznickyServis() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px overflow-clip relative" data-name="Zákaznický servis">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020617] text-[15px] whitespace-nowrap">Zákaznický servis</p>
      <div className="bg-gradient-to-t from-[#a752a9] h-[2px] rounded-[1px] shrink-0 to-[#3f2578] to-[200%] w-[28px]" data-name="Sep" />
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Obchodní podmínky</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Spolupracující instituce</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Licence a certifikace</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#261648] text-[14px] whitespace-nowrap">Ochrana osobních údajů</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#261648] text-[14px] whitespace-nowrap">Reklamační řád</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#261648] text-[14px] whitespace-nowrap">Zpětná vazba</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#261648] text-[14px] whitespace-nowrap">Whistleblowing</p>
    </div>
  );
}

function LucidePhone() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1315)" id="lucide/phone">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1315">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Phone 1">
      <LucidePhone />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">+420 226 633 522</p>
    </div>
  );
}

function LucidePhone1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1315)" id="lucide/phone">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1315">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Phone1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Phone 2">
      <LucidePhone1 />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">+420 790 421 030</p>
    </div>
  );
}

function LucideMail() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/mail">
          <path d={svgPaths.p97bb7c0} id="Vector" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b122e80} id="Vector_2" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function EmailRow() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Email Row">
      <LucideMail />
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">info@frenkee.cz</p>
    </div>
  );
}

function LucideInstagram() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1359)" id="lucide/instagram">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2815c980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1359">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LucideLinkedin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/linkedin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/linkedin">
          <path d={svgPaths.p1bcdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideFacebook() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/facebook">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/facebook">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SocialRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip pt-[4px] relative shrink-0" data-name="Social Row">
      <LucideInstagram />
      <LucideLinkedin />
      <LucideFacebook />
    </div>
  );
}

function ContactCard() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Contact Card" style={{ backgroundImage: "linear-gradient(-62.5094deg, rgb(167, 82, 169) 1.3604%, rgb(63, 37, 120) 99.929%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Phone />
          <Phone1 />
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#d9d3e4] text-[12px] whitespace-nowrap">Po – Pá (09:00 – 17:00)</p>
          <EmailRow />
          <SocialRow />
        </div>
      </div>
    </div>
  );
}

function KontaktColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px overflow-clip relative" data-name="Kontakt Column">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020617] text-[15px] whitespace-nowrap">Buďte v kontaktu</p>
      <ContactCard />
    </div>
  );
}

function FooterMain() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-start px-[120px] py-[56px] relative w-full">
          <BrandColumn />
          <ZakaznickyServis />
          <KontaktColumn />
        </div>
      </div>
    </div>
  );
}

function NlText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="NL Text">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.3] relative shrink-0 text-[22px] text-white">Nenechte si ujít novinky a tipy</p>
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[#d9d3e4] text-[14px]">Přihlaste se k odběru a dostávejte praktické rady o pojištění přímo do schránky.</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[48px] relative rounded-[10px] shrink-0 w-[260px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#d9d3e4] text-[14px] whitespace-nowrap">váš@email.cz</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SubscribeButton() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-center overflow-clip px-[28px] relative rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.08)] shrink-0" data-name="Subscribe Button">
      <p className="font-['Mona_Sans_VF:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Odebírat</p>
    </div>
  );
}

function NlForm() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="NL Form">
      <EmailInput />
      <SubscribeButton />
    </div>
  );
}

function NewsletterCard() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Newsletter Card" style={{ backgroundImage: "linear-gradient(-84.8207deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 99.198%)" }}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] py-[36px] relative w-full">
          <NlText />
          <NlForm />
        </div>
      </div>
    </div>
  );
}

function NewsletterSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Newsletter Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[120px] relative w-full">
          <NewsletterCard />
        </div>
      </div>
    </div>
  );
}

function DividerWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider Wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[120px] relative w-full">
          <div className="bg-[#e2e9f0] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Divider" />
        </div>
      </div>
    </div>
  );
}

function PictureNaTentoProjektBylaPoskytnutaFinancniPodporaOdEvropskeUnie() {
  return (
    <div className="h-[25.073px] relative shrink-0 w-[157.437px]" data-name="Picture → Na tento projekt byla poskytnuta finanční podpora od Evropské Unie.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPictureNaTentoProjektBylaPoskytnutaFinancniPodporaOdEvropskeUnie} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center max-w-[207px] px-[9.33px] relative shrink-0 w-[207px]" data-name="Container">
      <PictureNaTentoProjektBylaPoskytnutaFinancniPodporaOdEvropskeUnie />
    </div>
  );
}

function EuBanner() {
  return (
    <div className="relative shrink-0 w-full" data-name="EU Banner">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[120px] py-[20px] relative w-full">
          <Container />
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">Na tento projekt byla poskytnuta finanční podpora od Evropské Unie.</p>
        </div>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="relative shrink-0 w-full" data-name="Copyright">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[24px] pt-[16px] px-[120px] relative w-full">
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">�� 2026 Frenkee.cz All rights reserved</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e9f0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function FooterNew() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Footer - New">
      <FooterMain />
      <NewsletterSection />
      <DividerWrap />
      <EuBanner />
      <Copyright />
    </div>
  );
}

export default function Cestovko() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full" data-name="Cestovko 2">
      <div className="absolute flex h-[768px] items-center justify-center left-[-152px] top-[506px] w-[512px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[768px] relative w-[512px]" data-name="ChatGPT Image Jan 22, 2026, 05_34_42 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageJan222026053442Pm1} />
          </div>
        </div>
      </div>
      <NavbarHeaderShared activeTab="cestovani" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={2} />
      </div>
      <Frame12 />
    </div>
  );
}