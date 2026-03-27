import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-ud7ckmb492";
import { useNavigate } from "react-router";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online pojištění majetku</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap">
      <p className="font-['Inter',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Inter',sans-serif] leading-[1.6] relative shrink-0 text-[14px] text-[#666666]">Zkontrolujte údaje o nemovitosti a pojištění před odesláním</p>
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">{label}</p>
      <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]">{value}</p>
    </div>
  );
}

function CardNemovitost() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p275d2400} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p1db6d780} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Nemovitost</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap">
            <DataRow label="Typ nemovitosti" value="Byt v osobním vlastnictví" />
            <DataRow label="Adresa" value="Vinohradská 12, Praha 2" />
            <DataRow label="Podlahová plocha" value="68 m²" />
            <DataRow label="Rok kolaudace" value="2005" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function CardVybranePojisteni() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p25fc4100} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p3e012060} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Vybrané pojištění</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
            {[
              { label: "Pojištění nemovitosti", active: true },
              { label: "Pojištění domácnosti", active: false },
              { label: "Pojištění proti povodni", active: false },
            ].map(({ label, active }) => (
              <div key={label} className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                  <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3840bd70} stroke="#F29E33" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <p className={`font-['Inter',sans-serif] leading-[1.6] relative shrink-0 text-[14px] whitespace-nowrap ${active ? "text-[#1A1A1A]" : "text-[#666666]"}`}>{label}</p>
                </div>
                <p className="font-['Inter',sans-serif] leading-[1.6] relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">Ano</p>
              </div>
            ))}
            <DataRow label="Limit plnění" value="5 000 000 Kč" />
            <DataRow label="Počátek pojištění" value="01. 03. 2026" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function CardUdajeOPojistnikovi() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p1beb9580} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p32ab0300} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Pojistník</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap">
            <DataRow label="Jméno a příjmení" value="Ladislav Šv��bek" />
            <DataRow label="Rodné číslo" value="000324/1213" />
            <DataRow label="Trvalé bydliště" value="Vinohradská 12, Praha 2" />
            <DataRow label="Vztah k nemovitosti" value="Vlastník" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function CardSouhlas() {
  const [ch1, setCh1] = useState(false);
  const [ch2, setCh2] = useState(false);
  const [ch3, setCh3] = useState(true);
  const [ch4, setCh4] = useState(false);

  const checkboxes = [
    { state: ch1, setState: setCh1, label: "Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.", wrap: true },
    { state: ch2, setState: setCh2, label: "Souhlasím se zpracováním osobních údajů v souladu s GDPR.", wrap: false },
    { state: ch3, setState: setCh3, label: "Chci dostávat informace o novinkách a speciálních nabídkách.", wrap: false },
    { state: ch4, setState: setCh4, label: "Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.", wrap: false },
  ];

  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p25fc4100} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3e012060} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Souhlas a potvrzení</p>
        </div>
        <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
        {checkboxes.map(({ state, setState, label, wrap }) => (
          <div key={label} className={`content-stretch flex gap-[12px] ${wrap ? "items-start" : "items-center"} overflow-clip relative shrink-0 w-full cursor-pointer`} onClick={() => setState(!state)}>
            <button
              type="button"
              className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${state ? "bg-[#00A878]" : "bg-white"}`}
              style={{ border: `1.5px solid ${state ? "#00A878" : "#e2e9f0"}` }}
            >
              {state && (
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              )}
            </button>
            <p className={`font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] ${!wrap ? "whitespace-nowrap" : ""}`}>{label}</p>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function CardSummary() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex font-['Inter',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap" style={{ fontWeight: 700 }}>
            <p className="leading-[1.4] relative shrink-0 text-[18px]">Pojištění majetku</p>
            <p className="leading-[1.3] relative shrink-0 text-[28px]">389 Kč / měsíc</p>
          </div>
          <div className="bg-[#E5E7EB] h-px shrink-0 w-full" />
          <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666666] text-[13px]">Cena zahrnuje pojištění nemovitosti, domácnosti a pojištění proti povodni. Platba jednou měsíčně.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,168,120,0.12)]" />
    </div>
  );
}

export default function PropertyInsuranceStep6() {
  const navigate = useNavigate();

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
        <StepIndicator currentStep={6} totalSteps={7} />
        
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[600px]">
          <PageHeader />
          <CardNemovitost />
          <CardVybranePojisteni />
          <CardUdajeOPojistnikovi />
          <CardSouhlas />
          <CardSummary />
        </div>
        
        <div 
          className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
          style={{ backgroundColor: "#00A878" }}
          onClick={() => navigate("/majetek/krok-7")}
        >
          <div className="font-['Inter',sans-serif] text-[16px] text-white whitespace-nowrap">
            Sjednat a zaplatit
          </div>
        </div>
      </div>
    </div>
  );
}