import React from "react";
import { Link as RouterLink } from "react-router";
import { Menu } from "lucide-react";
import svgPaths from "../../imports/svg-3jpohhloqp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const mobileNavClass =
  "rounded-lg px-3 py-3 font-['Inter',sans-serif] text-[15px] font-medium text-white/90 no-underline hover:bg-white/10";

function Logo() {
  return (
    <div className="flex flex-col items-start leading-none">
      <span className="font-['Inter',sans-serif] text-[18px] text-[#00A878]" style={{ fontWeight: 700 }}>
        Portu
      </span>
      <span className="font-['Inter',sans-serif] text-[10px] text-white/60" style={{ fontWeight: 400, letterSpacing: "0.02em" }}>
        powered by Frenkee
      </span>
    </div>
  );
}

function LogoLink() {
  return (
    <RouterLink to="/" className="content-stretch flex min-w-0 items-center relative shrink-0 no-underline">
      <Logo />
    </RouterLink>
  );
}

function LucideCar() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p382997c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ad65a80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7.5 14.1667H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3849af00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideHouse() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p275d2400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1db6d780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucidePlane() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.pdab9800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideShield() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p25fc4100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucidePaw() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <ellipse cx="6.66667" cy="5.83333" rx="1.66667" ry="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <ellipse cx="13.3333" cy="5.83333" rx="1.66667" ry="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <ellipse cx="3.33333" cy="10" rx="1.66667" ry="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <ellipse cx="16.6667" cy="10" rx="1.66667" ry="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7.5 13.3333C7.5 13.3333 8.33333 16.6667 10 16.6667C11.6667 16.6667 12.5 13.3333 12.5 13.3333C12.5 11.6667 11.3807 10 10 10C8.61929 10 7.5 11.6667 7.5 13.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideGlobe() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 10H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 2.5C11.6569 4.39765 12.5 7.13616 12.5 10C12.5 12.8638 11.6569 15.6024 10 17.5C8.34315 15.6024 7.5 12.8638 7.5 10C7.5 7.13616 8.34315 4.39765 10 2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideUser() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p1beb9580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

type TabProps = { isActive?: boolean };

function NavTab({ to, icon, label, isActive }: { to: string; icon: React.ReactNode; label: string; isActive?: boolean }) {
  return (
    <RouterLink to={to} className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 no-underline">
      <div className={isActive ? "text-[#00A878]" : "text-white"}>{icon}</div>
      <p
        className={`font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${isActive ? "text-[#00A878]" : "text-white"} hover:text-[#00A878] transition-colors`}
        style={{ fontWeight: isActive ? 600 : 400 }}
      >
        {label}
      </p>
    </RouterLink>
  );
}

function TabAuto({ isActive }: TabProps) {
  return <NavTab to="/auto/krok-1" icon={<LucideCar />} label="Auto" isActive={isActive} />;
}

function TabMajetek({ isActive }: TabProps) {
  return <NavTab to="/majetek/krok-1" icon={<LucideHouse />} label="Majetek" isActive={isActive} />;
}

function TabCestovani({ isActive }: TabProps) {
  return <NavTab to="/cestovani/krok-1" icon={<LucidePlane />} label="Cestování" isActive={isActive} />;
}

function TabZivotni({ isActive }: TabProps) {
  return <NavTab to="/zivotni/krok-1" icon={<LucideShield />} label="Životní pojištění" isActive={isActive} />;
}

function TabMazlicici({ isActive }: TabProps) {
  return <NavTab to="/mazlicici/krok-1" icon={<LucidePaw />} label="Mazlíčci" isActive={isActive} />;
}

function TabCizinci({ isActive }: TabProps) {
  return <NavTab to="/cizinci/krok-1" icon={<LucideGlobe />} label="Cizinci" isActive={isActive} />;
}

function RegBtn() {
  return (
    <div className="bg-[#00A878] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_1.75px_0px_rgba(10,13,18,0.05)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
      <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Registrace</p>
    </div>
  );
}

function KontaktLink() {
  return (
    <RouterLink to="/kontakt" className="no-underline">
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[14px] whitespace-nowrap hover:text-[#00A878] transition-colors cursor-pointer">
        Kontakt
      </p>
    </RouterLink>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[24px] h-full items-center overflow-clip relative shrink-0">
      <RegBtn />
      <KontaktLink />
      <LucideUser />
    </div>
  );
}

function MobileNavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
          aria-label="Otevřít menu"
        >
          <Menu className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l border-white/10 bg-[#210949] text-white [&>button]:text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Nabídka</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-3 border-b border-white/10 pb-6">
          <div className="flex items-center justify-center rounded-lg bg-[#00A878] px-4 py-3 shadow-sm">
            <p className="font-['Inter',sans-serif] text-[15px] font-medium text-white">Registrace</p>
          </div>
          <RouterLink to="/kontakt" className={mobileNavClass}>
            Kontakt
          </RouterLink>
          <div className="flex items-center gap-2 px-3 py-2 text-white/70">
            <LucideUser />
            <span className="font-['Inter',sans-serif] text-[14px]">Účet</span>
          </div>
        </div>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Hlavní navigace">
          <RouterLink to="/auto/krok-1" className={mobileNavClass}>
            Auto
          </RouterLink>
          <RouterLink to="/majetek/krok-1" className={mobileNavClass}>
            Majetek
          </RouterLink>
          <RouterLink to="/cestovani/krok-1" className={mobileNavClass}>
            Cestování
          </RouterLink>
          <RouterLink to="/zivotni/krok-1" className={mobileNavClass}>
            Životní pojištění
          </RouterLink>
          <RouterLink to="/mazlicici/krok-1" className={mobileNavClass}>
            Mazlíčci
          </RouterLink>
          <RouterLink to="/cizinci/krok-1" className={mobileNavClass}>
            Cizinci
          </RouterLink>
          <RouterLink to="/investice/krok-1" className={mobileNavClass}>
            Investice
          </RouterLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function TopRow() {
  return (
    <div className="relative h-[56px] w-full shrink-0">
      <div className="flex size-full flex-row items-center overflow-clip rounded-[inherit]">
        <div className="relative flex size-full min-w-0 items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
          <LogoLink />
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex">
              <RightSide />
            </div>
            <MobileNavSheet />
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomRow({ activeTab }: { activeTab?: string }) {
  return (
    <div className="relative hidden h-[48px] w-full shrink-0 lg:block">
      <div className="flex size-full flex-row items-center justify-center overflow-clip rounded-[inherit]">
        <div className="content-stretch flex gap-[24px] items-center justify-center overflow-x-auto px-8 relative size-full">
          <TabAuto isActive={activeTab === "auto"} />
          <TabMajetek isActive={activeTab === "majetek"} />
          <TabCestovani isActive={activeTab === "cestovani"} />
          <TabZivotni isActive={activeTab === "zivotni"} />
          <TabMazlicici isActive={activeTab === "mazlicici"} />
          <TabCizinci isActive={activeTab === "cizinci"} />
        </div>
      </div>
    </div>
  );
}

export default function NavbarHeader({ activeTab, sticky = false }: { activeTab?: string; sticky?: boolean }) {
  return (
    <div className={`${sticky ? "sticky top-0 z-50" : ""} flex w-full justify-center`}>
      <div className="relative flex w-full max-w-[1200px] flex-col items-start overflow-clip rounded-none bg-[#210949] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.4)] lg:rounded-[9px]">
        <TopRow />
        <div className="hidden h-px w-full shrink-0 bg-white/10 lg:block" />
        <BottomRow activeTab={activeTab} />
      </div>
    </div>
  );
}
