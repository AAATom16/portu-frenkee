import svgPaths from "./svg-18xxs161cb";

function Badge() {
  return (
    <div className="absolute bg-[#ebecff] content-stretch flex h-[20px] items-center left-[876px] px-[6px] py-px rounded-[4px] top-[4473px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#d9d3e4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a752a9] text-[9px] whitespace-nowrap">
        <p className="leading-[1.6]">Pojištění pro cizince</p>
      </div>
    </div>
  );
}

function Badge1() {
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
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s1" />;
}

function S2() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S3() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S4() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
}

function S5() {
  return <div className="bg-[#b2a8c9] h-[4px] rounded-[2px] shrink-0 w-[32px]" data-name="s6" />;
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
      <p className="font-['Mona_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8c7cae] text-[12px] whitespace-nowrap">Krok 1 z 8</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[24px] top-[23px] w-[1392px]">
      <DesktopNavbarV2TwoRowsAlt />
      <HeadingContainer />
      <PageHeader />
    </div>
  );
}

function LucideSunset() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="lucide/sunset">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_158_267)" id="lucide/sunset">
          <path d="M11 9.16667V1.83333" id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p14cabf80} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.83333 16.5H3.66667" id="Vector_3" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3333 16.5H20.1667" id="Vector_4" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ad58740} id="Vector_5" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 20.1667H1.83333" id="Vector_6" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p297e3900} id="Vector_7" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33573d00} id="Vector_8" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_158_267">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GoalDuchod() {
  return (
    <div className="bg-[#f8f6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Goal - Důchod">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
          <LucideSunset />
          <p className="font-['Mona_Sans:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#3f2578] text-[12px] text-center whitespace-nowrap">Pro sebe</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3f2578] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_6px_0px_rgba(63,37,120,0.08)]" />
    </div>
  );
}

function LucideGraduationCap() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="lucide/graduation-cap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="lucide/graduation-cap">
          <path d={svgPaths.p1c85f400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 9.16667V14.6667" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p334a2500} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function GoalVzdelani() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Goal - Vzdělání">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
          <LucideGraduationCap />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">Pro sebe a dítě</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function LucideShield1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="lucide/shield">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="lucide/shield">
          <path d={svgPaths.p514ae00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function GoalPolstar() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Goal - Polštář">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
          <LucideShield1 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">Pro sebe a firmu</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GoalGrid() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Goal Grid">
      <GoalDuchod />
      <GoalVzdelani />
      <GoalPolstar />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between leading-[1.5] not-italic px-[16px] relative size-full text-[14px] whitespace-nowrap">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1e1b2e]">34</p>
          <p className="font-['Mona_Sans:Medium',sans-serif] relative shrink-0 text-[#94a3b8]">let</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2.38px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function FieldJednorazovaInvestice() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Field - Jednorázová investice">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Kolik vám je let?</p>
      <Input />
    </div>
  );
}

function LucideSunset1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="lucide/sunset">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_158_267)" id="lucide/sunset">
          <path d="M11 9.16667V1.83333" id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p14cabf80} id="Vector_2" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.83333 16.5H3.66667" id="Vector_3" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18.3333 16.5H20.1667" id="Vector_4" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ad58740} id="Vector_5" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 20.1667H1.83333" id="Vector_6" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p297e3900} id="Vector_7" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33573d00} id="Vector_8" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_158_267">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GoalDuchod1() {
  return (
    <div className="bg-[#f8f6fb] flex-[1_0_0] h-[142px] min-h-px min-w-px relative rounded-[10px]" data-name="Goal - Důchod">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative size-full">
          <LucideSunset1 />
          <p className="font-['Mona_Sans:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#3f2578] text-[12px] text-center whitespace-nowrap">Klasický účet</p>
          <div className="font-['Mona_Sans:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#3f2578] text-[12px] whitespace-nowrap">
            <p className="mb-0">✔️ Krátkodobé a dlouhodobé investice</p>
            <p className="mb-0">✔️ Flexibiní vklady a výběry</p>
            <p>✔️ Slevy pro dlouhodobé investice</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3f2578] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_6px_0px_rgba(63,37,120,0.08)]" />
    </div>
  );
}

function LucideGraduationCap1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="lucide/graduation-cap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="lucide/graduation-cap">
          <path d={svgPaths.p1c85f400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20.1667 9.16667V14.6667" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p334a2500} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function GoalVzdelani1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Goal - Vzdělání">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[10px] py-[14px] relative w-full">
          <LucideGraduationCap1 />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">Důchodový účet (DIP)</p>
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[235px] whitespace-pre-wrap">
            <p className="mb-0">
              <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic">{`✔️ `}</span>
              <span className="leading-[1.3]">Daňové a poplatkové zvýhodnění</span>
            </p>
            <p className="mb-0">
              <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic">{`✔️ `}</span>
              <span className="leading-[1.3]">Přispívat může i váš zaměstnavatel</span>
            </p>
            <p>
              <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic">{`✔️ `}</span>
              <span className="leading-[1.3]">{`Podmínka investovatminimálně 10 let      (do 60 let věku)`}</span>
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GoalGrid1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Goal Grid">
      <GoalDuchod1 />
      <GoalVzdelani1 />
    </div>
  );
}

function GoalSelector1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Goal Selector">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">S čím chcete začít?</p>
      <GoalGrid1 />
    </div>
  );
}

function GoalSelector() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[600px]" data-name="Goal Selector">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[18px] whitespace-nowrap">Otázky na úvod</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Pro koho investice zakládáte?</p>
      <GoalGrid />
      <FieldJednorazovaInvestice />
      <GoalSelector1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[325px] overflow-clip pb-[50px] pt-[24px] px-[99px] top-[253px]">
      <GoalSelector />
      <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[1.6]">Pokračovat</p>
        </div>
      </div>
    </div>
  );
}

export default function Investice() {
  return (
    <div className="bg-white relative size-full" data-name="Investice 1">
      <Badge />
      <Badge1 />
      <Frame11 />
      <Frame10 />
    </div>
  );
}