import svgPaths from "./svg-irupns2xiy";

function Badge() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[40px] items-center left-[131px] px-[12px] py-[2px] rounded-[8px] top-[4199px]" data-name="badge">
      <div aria-hidden="true" className="absolute border border-[#d9d3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.6]">Cestovní pojištění</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4187px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4329px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Úvěry</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4473px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění pro cizince</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4617px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění odpovědnosti</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[19.06px] relative shrink-0 w-[90px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 19.06">
        <g id="Frame 10">
          <path clipRule="evenodd" d={svgPaths.p2b787210} fill="url(#paint0_linear_199_784)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_199_784" x1="90" x2="1.22221e-06" y1="2.68221e-06" y2="19.06">
            <stop stopColor="#A752A9" />
            <stop offset="1" stopColor="#3F2578" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function RegBtn() {
  return (
    <div className="bg-[#3f2578] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_1.75px_0px_rgba(10,13,18,0.05)] shrink-0" data-name="regBtn">
      <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Registrace</p>
    </div>
  );
}

function RightGroup() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="rightGroup">
      <RegBtn />
    </div>
  );
}

function LucideUser() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/user">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/user">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[24px] h-full items-center overflow-clip relative shrink-0" data-name="rightSide">
      <RightGroup />
      <p className="font-['Mona_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Kontakt</p>
      <LucideUser />
    </div>
  );
}

function TopRow() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="topRow">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] relative size-full">
          <Frame9 />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[29.17%_8.33%_20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12%_-6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6666 10.3334">
            <path d={svgPaths.p68eef80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_62.5%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.3333">
            <path d={svgPaths.p3781aa00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
            <path d="M1 1H6" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_20.83%_20.83%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3333 5.3333">
            <path d={svgPaths.p282b4f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function LucideCar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="LucideCar">
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[2px] w-[28.805px]" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Auto</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[56.805px]" data-name="Link">
      <LucideCar />
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-13.33%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9.5">
            <path d={svgPaths.p3201500} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.32%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17.8337">
            <path d={svgPaths.p1697500} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function LucideHouse() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="LucideHouse">
      <Icon1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[2px] w-[49.023px]" data-name="Frame1">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Majetek</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[20px] left-[80.8px] top-0 w-[77.023px]" data-name="Link">
      <LucideHouse />
      <Frame1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[11.72%_11.72%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[11.72%_11.72%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1563 17.1563">
            <path d={svgPaths.p1897ee00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function LucidePlane() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="LucidePlane">
      <Icon2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[2px] w-[63.039px]" data-name="Frame2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Cestování</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[20px] left-[181.83px] top-0 w-[91.039px]" data-name="Link">
      <LucidePlane />
      <Frame2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-6%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3334 18.6695">
            <path d={svgPaths.p35274a00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function LucideShield() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="LucideShield">
      <Icon3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[2px] w-[98.055px]" data-name="Frame3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Životní pojištění</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[20px] left-[296.87px] top-0 w-[126.055px]" data-name="Link">
      <LucideShield />
      <Frame3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]" data-name="Group">
      <div className="absolute bottom-[58.33%] left-1/4 right-[58.33%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33334 7">
            <path d={svgPaths.p3e5b0e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-[58.33%] right-1/4 top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33334 7">
            <path d={svgPaths.p3e5b0e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-20%_-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33334 7">
            <path d={svgPaths.p3e5b0e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-3/4 right-[8.33%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-20%_-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33334 7">
            <path d={svgPaths.p3e5b0e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-15%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8.6667">
            <path d={svgPaths.p254a98f0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group4 />
    </div>
  );
}

function LucidePaw() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="LucidePaw">
      <Icon4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[2px] w-[50.563px]" data-name="Frame4">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Mazlíčci</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[20px] left-[446.92px] top-0 w-[78.563px]" data-name="Link">
      <LucidePaw />
      <Frame4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p1d70d600} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
            <path d="M1 1H16" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 17">
            <path d={svgPaths.p3c1f5bc0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group5 />
    </div>
  );
}

function LucideGlobe() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="LucideGlobe">
      <Icon5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-[2px] w-[41.234px]" data-name="Frame5">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Cizinci</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[20px] left-[549.48px] top-0 w-[69.234px]" data-name="Link">
      <LucideGlobe />
      <Frame5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[29.17%_12.5%]" data-name="Group">
      <div className="absolute inset-[29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-12%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.3334">
            <path d={svgPaths.pc065640} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[66.67%] right-[12.5%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1667 6.16667">
            <path d="M1 1H5.1667V5.16667" id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group6 />
    </div>
  );
}

function LucideTrendingUp() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[-2px]" data-name="LucideTrendingUp">
      <Icon6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[28px] top-0 w-[63px]" data-name="Frame6">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Investice</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[20px] left-[642.98px] top-0 w-[95px]" data-name="Link">
      <LucideTrendingUp />
      <Frame6 />
      <div className="absolute bg-[#3f2578] h-[2px] left-0 rounded-[1px] top-[18px] w-[91px]" data-name="underline" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[725.969px]" data-name="Frame9">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function BottomRow() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="bottomRow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function DesktopNavbarV2TwoRowsAlt() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[9px] shadow-[0px_4px_7px_0px_rgba(0,0,0,0.15),0px_1px_2.625px_0px_rgba(0,0,0,0.3)] shrink-0 w-[1280px]" data-name="Desktop Navbar V2 - Two Rows Alt">
      <TopRow />
      <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="divider" />
      <BottomRow />
    </div>
  );
}

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="bg-clip-text flex flex-col font-['Mona_Sans:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-[transparent] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)" }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

function S() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S1() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S2() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S3() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S4() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S5() {
  return <div className="bg-[#3f2578] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S6() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S7() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function StepIndicator() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Step Indicator">
      <S />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
      <S6 />
      <S7 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Page Header">
      <StepIndicator />
      <p className="font-['Mona_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[12px] whitespace-nowrap">Krok 6 z 8</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <HeadingContainer />
      <PageHeader />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1392px]">
      <DesktopNavbarV2TwoRowsAlt />
      <Frame58 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[505px]">
        <p className="leading-[1.6]">Nabídka investic</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[510px]">
      <Frame12 />
    </div>
  );
}

function LucideStar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/star">
          <path d={svgPaths.p1cb8a680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative w-[414px]">
      <LucideStar />
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[384px]">
        <p className="leading-[1.6]">Doporučeno pro vás</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[10px] pr-[4px] py-[12px] relative rounded-bl-[12px] rounded-br-[12px] w-[522px]" style={{ backgroundImage: "linear-gradient(41.9423deg, rgb(71, 40, 124) 1.6639%, rgb(129, 73, 226) 164.65%)" }}>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Portfolio od Portu</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start py-[12px] relative shrink-0 w-[406px]">
      <Frame15 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[469px]">
        <p className="leading-[1.6]">Portfolia skládá a řídí Portu za vás, abyste se nemuseli o nic starat.</p>
      </div>
    </div>
  );
}

function CheckLight() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[473px]">
      <CheckLight />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Žádné starosti</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function CheckLight1() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[474px]">
      <CheckLight1 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[435px]">
        <p className="leading-[1.6]">Průměrný výnos za posledních 10 let 10,27 % ročně</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function CheckLight2() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[475px]">
      <CheckLight2 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Také v odpovědné variantě</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame61 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[474px]">
      <Frame19 />
      <Frame28 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[12px] px-[12px] relative shrink-0 w-[510px]">
      <Frame57 />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.18deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border-4 border-[#3f2578] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(63,37,120,0.1),0px_4px_4px_0px_rgba(63,37,120,0.05)]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame18 />
        </div>
      </div>
      <Frame46 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[522px]">
      <TravelInsuranceCompanyCard />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[505px]">
        <p className="leading-[1.6]">Další možnosti</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[510px]">
      <Frame13 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[522px]">
      <Frame14 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Investiční rezerva</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start py-[12px] relative shrink-0 w-[406px]">
      <Frame16 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[409px]">
        <p className="leading-[1.6]">Zhodnocujte konzervativně vaše úspory díky úročené hotovosti.</p>
      </div>
    </div>
  );
}

function CheckLight3() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight3 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Nejkonzervativnější produkt</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function CheckLight4() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight4 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Úrok v Kč 3,20 % a € 1,70 % p.a.</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function CheckLight5() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight5 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Ochrana před inflací</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[406px]">
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame65 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame29 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[47px] h-[324px] items-center pb-[12px] px-[12px] relative shrink-0 w-[478px]">
      <Frame62 />
      <div className="h-[48px] relative rounded-[12px] shrink-0" data-name="primary">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">
            <p className="leading-[1.6]">Pokračovat</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#64748b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white h-[338px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(63,37,120,0.1),0px_4px_4px_0px_rgba(63,37,120,0.05)]" />
      <Frame47 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TravelInsuranceCompanyCard1 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">WOOD realitní fond</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start py-[12px] relative shrink-0 w-[406px]">
      <Frame17 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[454px]">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[454px]">
        <p className="leading-[1.6]">{`Realitní fond od WOOD & Company investuje do sektoru komerčních nemovitostí s cílovým výnosem 7-9 % ročně.`}</p>
      </div>
    </div>
  );
}

function CheckLight6() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight6 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Pro konzervativní i dynamické investory</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function CheckLight7() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight7 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Cílový výnos 7-9 % ročně</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function CheckLight8() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight8 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Minimální investice 100 Kč</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[406px]">
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame69 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[454px]">
      <Frame22 />
      <Frame37 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[12px] px-[12px] relative shrink-0 w-[478px]">
      <Frame66 />
      <div className="h-[48px] relative rounded-[12px] shrink-0" data-name="primary">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">
            <p className="leading-[1.6]">Pokračovat</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#64748b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(63,37,120,0.1),0px_4px_4px_0px_rgba(63,37,120,0.05)]" />
      <Frame48 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TravelInsuranceCompanyCard2 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Portfolio podle vás</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start py-[12px] relative shrink-0 w-[406px]">
      <Frame24 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[409px]">
        <p className="leading-[1.6]">Portfolio si skládáte sami z ETF a akcií nebo si vyberete z tematických balíčků.</p>
      </div>
    </div>
  );
}

function CheckLight9() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight9 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Výběr z akcií, ETF i kryptoměn</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame71 />
    </div>
  );
}

function CheckLight10() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight10 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Volitelné měnové zajištění</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function CheckLight11() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[28px]" data-name="check-light">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28.5">
        <g id="check-light">
          <path d={svgPaths.p182c1900} fill="var(--fill-0, #30AF77)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[408px]">
      <CheckLight11 />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] w-[380px]">
        <p className="leading-[1.6]">Pokročilé možnosti rebalance</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[406px]">
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame73 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame23 />
      <Frame42 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[12px] px-[12px] relative shrink-0 w-[416px]">
      <Frame70 />
      <div className="h-[48px] relative rounded-[12px] shrink-0" data-name="primary">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">
            <p className="leading-[1.6]">Pokračovat</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#64748b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard3() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(63,37,120,0.1),0px_4px_4px_0px_rgba(63,37,120,0.05)]" />
      <Frame49 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TravelInsuranceCompanyCard3 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pb-[25px] pt-[24px] px-[24px] relative w-full">
          <Frame50 />
          <Frame51 />
          <Frame52 />
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function AutoVyberPojisteni() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1563px] items-center overflow-clip pb-[50px] px-[24px] relative shrink-0 w-[596px]" data-name="Auto Výběr pojištění">
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[50px] px-[99px] relative w-full">
          <AutoVyberPojisteni />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame55 />
      <Frame10 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col h-[1843px] items-center relative shrink-0 w-[1280px]">
      <Frame59 />
    </div>
  );
}

export default function Investice() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full" data-name="Investice 6">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
      <Badge4 />
      <Frame54 />
    </div>
  );
}