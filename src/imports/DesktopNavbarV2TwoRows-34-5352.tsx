import svgPaths from "./svg-3jpohhloqp";

function Frame() {
  return (
    <div className="h-[19.06px] relative shrink-0 w-[90px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 19.06">
        <g id="Frame 10">
          <path clipRule="evenodd" d={svgPaths.p2b787210} fill="url(#paint0_linear_34_5032)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_34_5032" x1="90" x2="1.22221e-06" y1="2.68221e-06" y2="19.06">
            <stop stopColor="#A752A9" />
            <stop offset="1" stopColor="#3F2578" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
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
          <Frame1 />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

function LucideCar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/car">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/car">
          <path d={svgPaths.p382997c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ad65a80} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7.5 14.1667H12.5" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3849af00} id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="tab1">
      <LucideCar />
      <p className="font-['Mona_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Auto</p>
    </div>
  );
}

function LucideHouse() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/house">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/house">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="tab2">
      <LucideHouse />
      <p className="font-['Mona_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Majetek</p>
    </div>
  );
}

function LucidePlane() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/plane">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/plane">
          <path d={svgPaths.pdab9800} id="Vector" stroke="var(--stroke-0, #3F2578)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="tab3">
      <LucidePlane />
      <p className="font-['Mona_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap">Cestování</p>
    </div>
  );
}

function LucideShield() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide/shield">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide/shield">
          <path d={svgPaths.p25fc4100} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="tab4">
      <LucideShield />
      <p className="font-['Mona_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Životní pojištění</p>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="bottomRow">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-center px-[32px] relative size-full">
          <Tab />
          <Tab1 />
          <Tab2 />
          <Tab3 />
        </div>
      </div>
    </div>
  );
}

export default function DesktopNavbarV2TwoRows() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[9px] shadow-[0px_4px_7px_0px_rgba(0,0,0,0.15),0px_1px_2.625px_0px_rgba(0,0,0,0.3)] size-full" data-name="Desktop Navbar V2 - Two Rows">
      <TopRow />
      <div className="bg-[#e2e9f0] h-px shrink-0 w-full" data-name="divider" />
      <BottomRow />
    </div>
  );
}