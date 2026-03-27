import { useState } from "react";
import { Link as RouterLink } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-gb1tdf323s";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#1A1A1A] text-center tracking-[-1.5px] w-full"
        style={{ fontWeight: 700 }}
      >
        <p className="leading-none">Online sjednání pojištění auta</p>
      </div>
    </div>
  );
}

/* ── Page Header ── */
function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap">
      <p className="font-['Inter',sans-serif] leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>Shrnutí</p>
      <p className="font-['Inter',sans-serif] leading-[1.6] relative shrink-0 text-[14px] text-[#666666]">Zkontrolujte údaje o vozidle a pojištění před odesláním</p>
    </div>
  );
}

/* ── Card: Vozidlo ── */
function CardVozidlo() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pc9c9110} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2ad65a80} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M7.5 14.167H12.5" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p3849af00} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Vozidlo</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          {/* Divider */}
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          {/* Rows */}
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap">
            {[
              { label: "Vozidlo", value: "Peugot 508" },
              { label: "VIN", value: "VF38D9HL0BL065925" },
              { label: "První registrace", value: "22. 11. 2011" },
              { label: "Balíček", value: "AXA: Balíček komfort" },
            ].map((row) => (
              <div key={row.label} className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 400 }}>{row.label}</p>
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

/* ── Card: Pojištění ── */
function CardPojisteni() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <div className="relative shrink-0 size-[20px]" data-name="lucide/shield-check">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="lucide/shield-check">
                    <path d={svgPaths.p3497a680} id="Vector" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p2dbef580} id="Vector_2" stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Vybrané pojištění</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          {/* Divider */}
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          {/* Rows with icons */}
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
            {/* Povinné ručení */}
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2e978a00} stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 700 }}>Povinné ručení</p>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">Ano</p>
            </div>
            {/* Havarijní pojištění */}
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2e978a00} stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M6.75 9H11.25" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M9 6.75V11.25" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 700 }}>Havarijní pojištění</p>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">Ano</p>
            </div>
            {/* Pojištění skel */}
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p38088480} stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M6.75 15.75H7.5" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M10.5 15.75H11.25" stroke="var(--stroke-0, #F29E33)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 700 }}>Pojištění skel</p>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">Ano</p>
            </div>
            {/* Krytí & Počátek */}
            {[
              { label: "Krytí", value: "100 mil. / 100 mil." },
              { label: "Počátek pojištění", value: "01. 02. 2026" },
            ].map((row) => (
              <div key={row.label} className="content-stretch flex items-start justify-between leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap">
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 400 }}>{row.label}</p>
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

/* ── Card: Údaje ── */
function CardUdaje() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1beb9580} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p32ab0300} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Údaje</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          {/* Divider */}
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          {/* Rows */}
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap">
            {[
              { label: "Pojistník", value: "Ladislav Švábek" },
              { label: "Rodné číslo", value: "000324/1213" },
              { label: "Provozovatel", value: "Stejný jako pojistník" },
              { label: "Vlastník", value: "Stejný jako pojistník" },
            ].map((row) => (
              <div key={row.label} className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#666666]" style={{ fontWeight: 400 }}>{row.label}</p>
                <p className="font-['Inter',sans-serif] relative shrink-0 text-[#1A1A1A]">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

/* ── Card: Kontaktní údaje ── */
function CardKontakt() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p39a81600} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2fa4a980} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Kontaktní údaje</p>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#999999] text-[13px] whitespace-nowrap cursor-pointer">Upravit</p>
          </div>
          {/* Divider */}
          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />
          {/* Input Row */}
          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full">
            {/* Email */}
            <div className="content-stretch flex flex-1 flex-col gap-[6px] items-start overflow-clip relative">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">E-mail</p>
              <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[12px] relative size-full">
                    <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">ladislav@frenkee.cz</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
            {/* Phone */}
            <div className="content-stretch flex flex-1 flex-col gap-[6px] items-start overflow-clip relative">
              <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">Telefon</p>
              <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[12px] relative size-full">
                    <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">+420 777 123 456</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

/* ── Card: Souhlas a potvrzení ── */
function CardSouhlas() {
  const [ch1, setCh1] = useState(true);
  const [ch2, setCh2] = useState(true);
  const [ch3, setCh3] = useState(true);
  const [ch4, setCh4] = useState(true);

  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3497a680} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p2dbef580} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>Souhlas a potvrzení</p>
        </div>
        {/* Divider */}
        <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />

        {/* Row 1 – wraps to 2 lines, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh1(!ch1)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch1 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch1 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch1 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] w-[520px]" style={{ fontWeight: 400 }}>
            Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.
          </p>
        </div>

        {/* Row 2 – single line, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh2(!ch2)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch2 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch2 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch2 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Souhlasím se zpracováním osobních údajů v souladu s GDPR.
          </p>
        </div>

        {/* Row 3 – checked, items-center */}
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh3(!ch3)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch3 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch3 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch3 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
          </button>
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap" style={{ fontWeight: 400 }}>
            Chci dostávat informace o novinkách a speciálních nabídkách.
          </p>
        </div>

        {/* Row 4 – single line, items-start */}
        <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setCh4(!ch4)}
            className={`relative rounded-[4px] shrink-0 size-[20px] flex items-center justify-center transition-colors ${ch4 ? "bg-[#00A878]" : "bg-white"}`}
            style={{ border: `1.5px solid ${ch4 ? "#00A878" : "#e2e9f0"}` }}
          >
            {ch4 && <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p3de7e600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>}
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

/* ── Card: Summary (price) ── */
function CardSummary() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter',sans-serif] items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap">
          <p className="leading-[1.4] relative shrink-0 text-[18px]" style={{ fontWeight: 700 }}>Pojištění auta</p>
          <p className="leading-[1.3] relative shrink-0 text-[28px]" style={{ fontWeight: 700 }}>647 Kč / měsíc</p>
        </div>
        <div className="bg-[#E5E7EB] h-px shrink-0 w-full" />
        <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666666] text-[13px] w-full">
          Cena zahrnuje povinné ručení, havarijní pojištění a pojištění skel v balíčku AXA Komfort. Platba jednou měsíčně.
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,168,120,0.12)]" />
    </div>
  );
}

/* ── Form Section ── */
function FormSection() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-[600px]">
      <PageHeader />
      <CardVozidlo />
      <CardPojisteni />
      <CardUdaje />
      <CardKontakt />
      <CardSouhlas />
      <CardSummary />
      <RouterLink to="/auto/krok-6" className="no-underline self-center">
        <div
          className="w-[190px] h-[48px] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
          style={{ backgroundColor: "#00A878" }}
        >
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[1.6]">Sjednat a zaplatit</p>
          </div>
        </div>
      </RouterLink>
    </div>
  );
}

export default function CarInsuranceStep5() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="auto" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={5} />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[80px] px-[99px] relative">
        <FormSection />
      </div>
    </div>
  );
}