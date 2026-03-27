import { useState } from "react";
import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-x9z7j45il0";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání životního pojištění</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap">
      <p className="font-['Inter',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Inter',sans-serif] leading-[1.6] relative shrink-0 text-[14px]">Zkontrolujte zadané údaje před odesláním</p>
    </div>
  );
}

interface SummarySectionProps {
  icon: React.ReactNode;
  title: string;
  items: { label: string; value: string }[];
}

function SummarySection({ icon, title, items }: SummarySectionProps) {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <div className="relative shrink-0 size-[20px] text-[#00A878]">
                {icon}
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>{title}</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#00A878] text-[13px] whitespace-nowrap cursor-pointer hover:underline">Upravit</p>
          </div>
          
          {/* Divider */}
          <div className="bg-[#E5E5E5] h-px shrink-0 w-full" />
          
          {/* Rows */}
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap">
            {items.map((item, index) => (
              <div key={index} className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]">{item.label}</p>
                <p className="font-['Inter',sans-serif] font-semibold relative shrink-0 text-[#1A1A1A]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function ConsentSection({ consent1, setConsent1, consent2, setConsent2, consent3, setConsent3, consent4, setConsent4 }: { consent1: boolean, setConsent1: (value: boolean) => void, consent2: boolean, setConsent2: (value: boolean) => void, consent3: boolean, setConsent3: (value: boolean) => void, consent4: boolean, setConsent4: (value: boolean) => void }) {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3497a680} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2dbef580} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Souhlas a potvrzení</p>
        </div>
        {/* Divider */}
        <div className="bg-[#E5E5E5] h-px shrink-0 w-full" />

        {/* Row 1 – wraps to 2 lines, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setConsent1(!consent1)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${consent1 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${consent1 ? "#00A878" : "#e2e9f0"}` }}
          >
            {consent1 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-[520px]" style={{ fontWeight: 400 }}>
            Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.
          </p>
        </div>

        {/* Row 2 – single line, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setConsent2(!consent2)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${consent2 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${consent2 ? "#00A878" : "#e2e9f0"}` }}
          >
            {consent2 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Souhlasím se zpracováním osobních údajů v souladu s GDPR.
          </p>
        </div>

        {/* Row 3 – checked, items-center */}
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setConsent3(!consent3)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${consent3 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${consent3 ? "#00A878" : "#e2e9f0"}` }}
          >
            {consent3 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Chci dostávat informace o novinkách a speciálních nabídkách.
          </p>
        </div>

        {/* Row 4 – single line, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setConsent4(!consent4)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${consent4 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${consent4 ? "#00A878" : "#e2e9f0"}` }}
          >
            {consent4 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.
          </p>
        </div>
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
          {/* Summary Header */}
          <div className="content-stretch flex font-['Inter',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full">
            <p className="leading-[1.4] relative shrink-0 text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Doporučené pojištění</p>
            <p className="leading-[1.3] relative shrink-0 text-[28px] whitespace-pre text-[#00A878]" style={{ fontWeight: 700 }}>{`1 563  Kč / měsíc`}</p>
          </div>
          
          {/* Divider */}
          <div className="bg-[#E5E5E5] h-px shrink-0 w-full" />
          
          <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative text-[#666666] text-[13px] w-full">Cena je kalkulována na základě vašich příjmů, výdajů a majetku. Konečná cena se může lišit dle vybraného rozsahu pojištění.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,168,120,0.15)]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full">
      <RouterLink to="/zivotni/krok-8" className="no-underline">
        <div className="w-[190px] h-[48px] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[1.6]">Sjednat a zaplatit</p>
          </div>
        </div>
      </RouterLink>
    </div>
  );
}

function Frame12({ consent1, setConsent1, consent2, setConsent2, consent3, setConsent3, consent4, setConsent4 }: { consent1: boolean, setConsent1: (value: boolean) => void, consent2: boolean, setConsent2: (value: boolean) => void, consent3: boolean, setConsent3: (value: boolean) => void, consent4: boolean, setConsent4: (value: boolean) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
      <StepIndicator currentStep={7} />
      
      <PageHeader />

      <div className="flex flex-col gap-[16px] items-start w-[600px]">
        {/* Osobní údaje */}
        <SummarySection
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          title="Osobní údaje"
          items={[
            { label: "Jméno a příjmení", value: "Jan Novák" },
            { label: "Datum narození", value: "15. 3. 1985" },
            { label: "E-mail", value: "jan.novak@email.cz" },
            { label: "Telefon", value: "+420 777 123 456" },
          ]}
        />

        {/* Příjmy */}
        <SummarySection
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          title="Příjmy"
          items={[
            { label: "Čistý měsíční příjem", value: "45 000 Kč" },
            { label: "Další výdeje", value: "4 000 Kč" },
            { label: "Čisté zůstatky", value: "Zaměstnanec (HPP)" },
          ]}
        />

        {/* Majetek */}
        <SummarySection
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          title="Majetek"
          items={[
            { label: "Nemovitost", value: "Byt 2+kk, Praha 5" },
            { label: "Akcie/Podílové", value: "0 000 000 Kč" },
            { label: "Dluhy", value: "Banka + Privát" },
            { label: "Úspory", value: "250 000 Kč" },
          ]}
        />

        {/* Výdaje */}
        <SummarySection
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          title="Výdaje"
          items={[
            { label: "Bydlení a energie", value: "4 000 Kč" },
            { label: "Dluhy a výdaje", value: "3 700 Kč" },
            { label: "Životní styl", value: "3 900 Kč" },
            { label: "Rozvaha a ostatní", value: "2 500 Kč" },
          ]}
        />

        {/* Souhlas a potvrzení */}
        <ConsentSection
          consent1={consent1}
          setConsent1={setConsent1}
          consent2={consent2}
          setConsent2={setConsent2}
          consent3={consent3}
          setConsent3={setConsent3}
          consent4={consent4}
          setConsent4={setConsent4}
        />

        {/* Price Box */}
        <CardSummary />

        {/* Submit Button */}
        <Navigation />
      </div>
    </div>
  );
}

export default function LifeInsuranceStep7() {
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [consent3, setConsent3] = useState(false);
  const [consent4, setConsent4] = useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="odpovednost" />
      <HeadingContainer />
      
      {/* Decorative 3D illustration removed */}
      
      <Frame12 
        consent1={consent1}
        consent2={consent2}
        consent3={consent3}
        consent4={consent4}
        setConsent1={setConsent1}
        setConsent2={setConsent2}
        setConsent3={setConsent3}
        setConsent4={setConsent4}
      />
      
    </div>
  );
}