import React from "react";
import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-pa3yoyqq2t";
import { StepButtons } from "../StepButtons";

// ── Icon components (inline SVG from Figma) ──────────────────────────────────

function IconHouse() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p275d2400} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p1db6d780} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconWallet() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p3e8f800} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p11d57a00} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconStar() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p1cb8a680} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconShieldCheck() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p25fc4100} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p3e012060} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconHeart() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.pda9d200} stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconListPlus() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d="M13.3333 4.16667H2.5" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M9.16667 10H2.5" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M13.3333 15.8333H2.5" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M15 7.5V12.5" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M17.5 10H12.5" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconTrash() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 18 18">
        <path d="M7.5 8.25V12.75" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M10.5 8.25V12.75" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p3357c900} stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M2.25 4.5H15.75" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p19dfc880} stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

// ── Reusable input component ─────────────────────────────────────────────────

interface CurrencyInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
}

function CurrencyInput({ label, value, onChange }: CurrencyInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter',sans-serif] leading-none not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
        {label}
      </p>
      <div className="bg-white h-[40px] relative rounded-[8px] w-full">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[14px]">
            <input
              type="number"
              min={0}
              value={value === 0 && !focused ? "" : value}
              placeholder="0"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
              className="font-['Inter',sans-serif] relative flex-1 text-right text-[#94a3b8] bg-transparent outline-none min-w-0 placeholder-[#94a3b8]"
              style={{ appearance: "textfield" }}
            />
            <p className="font-['Inter',sans-serif] relative shrink-0 text-[#94a3b8]">Kč</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] ${focused ? "border-[#00A878]" : "border-[#e2e9f0]"}`}
        />
      </div>
    </div>
  );
}

// ── Card wrapper ──────────────────────────────────────────────────────────────

function SectionCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          {/* Card header */}
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
            {icon}
            <p
              className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap"
              style={{ fontWeight: 700 }}
            >
              {title}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Two-column grid helper ────────────────────────────────────────────────────

function TwoColGrid({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
        {left}
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
        {right}
      </div>
    </div>
  );
}

// ── Main form ─────────────────────────────────────────────────────────────────

interface CustomItem {
  id: number;
  name: string;
  amount: number;
}

export default function LifeInsuranceStep4() {
  // Bydlení & energie
  const [hypoteka, setHypoteka] = useState(0);
  const [telco, setTelco] = useState(0);
  const [energie, setEnergie] = useState(0);

  // Dluhy
  const [spotrebUvery, setSpotrebUvery] = useState(0);
  const [splatkyKarty, setSplatkyKarty] = useState(0);

  // Životní styl
  const [restaurace, setRestaurace] = useState(0);
  const [zabava, setZabava] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);
  const [moda, setModa] = useState(0);
  const [fitnessWellness, setFitnessWellness] = useState(0);
  const [hobby, setHobby] = useState(0);
  const [cestovani, setCestovani] = useState(0);

  // Finanční závazky
  const [pojisteni, setPojisteni] = useState(0);
  const [sporeniInvestice, setSporeniInvestice] = useState(0);

  // Rodina & ostatní
  const [jidlo, setJidlo] = useState(0);
  const [auto, setAuto] = useState(0);
  const [zvirata, setZvirata] = useState(0);
  const [deti, setDeti] = useState(0);

  // Vlastní položky
  const [customItems, setCustomItems] = useState<CustomItem[]>([
    { id: 1, name: "", amount: 0 },
  ]);
  const [nextId, setNextId] = useState(2);

  const addCustomItem = () => {
    setCustomItems((prev) => [...prev, { id: nextId, name: "", amount: 0 }]);
    setNextId((n) => n + 1);
  };

  const removeCustomItem = (id: number) => {
    setCustomItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCustomItem = (id: number, field: "name" | "amount", value: string | number) => {
    setCustomItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Total calculation
  const customTotal = customItems.reduce((sum, item) => sum + item.amount, 0);
  const total =
    hypoteka + telco + energie +
    spotrebUvery + splatkyKarty +
    restaurace + zabava + subscriptions + moda + fitnessWellness + hobby + cestovani +
    pojisteni + sporeniInvestice +
    jidlo + auto + zvirata + deti +
    customTotal;

  const formatCurrency = (n: number) =>
    n === 0 ? "0 Kč" : `${n.toLocaleString("cs-CZ")} Kč`;

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative min-h-full">
      <NavbarHeaderShared activeTab="odpovednost" />

      {/* Gradient heading */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div
          className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full"
          style={{ fontWeight: 700 }}
        >
          <p className="leading-none">Online sjednání životního pojištění</p>
        </div>
      </div>

      {/* Step indicator + form */}
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[99px] relative shrink-0">
        <StepIndicator currentStep={4} />

        <div className="content-stretch flex flex-col gap-[24px] items-start w-[600px]">
          {/* Section heading */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <div 
                  className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap"
                  style={{ fontWeight: 700 }}
                >
                  <p className="leading-[1.6]">Výdaje</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666666] text-[14px] w-full">
              <p className="leading-[1.6]">Zadejte všechny měsíční výdaje</p>
            </div>
          </div>

          {/* ── Bydlení & energie ── */}
          <SectionCard icon={<IconHouse />} title="Bydlení & energie">
            <TwoColGrid
              left={
                <>
                  <CurrencyInput label="Hypotéka / Nájem" value={hypoteka} onChange={setHypoteka} />
                  <CurrencyInput label="Energie" value={energie} onChange={setEnergie} />
                </>
              }
              right={
                <CurrencyInput label="Telco služby" value={telco} onChange={setTelco} />
              }
            />
          </SectionCard>

          {/* ── Dluhy ── */}
          <SectionCard icon={<IconWallet />} title="Dluhy">
            <TwoColGrid
              left={<CurrencyInput label="Spotřebitelské úvěry" value={spotrebUvery} onChange={setSpotrebUvery} />}
              right={<CurrencyInput label="Splátky kreditních karet" value={splatkyKarty} onChange={setSplatkyKarty} />}
            />
          </SectionCard>

          {/* ── Životní styl ── */}
          <SectionCard icon={<IconStar />} title="Životní styl">
            <TwoColGrid
              left={
                <>
                  <CurrencyInput label="Restaurace" value={restaurace} onChange={setRestaurace} />
                  <CurrencyInput label="Subscriptions" value={subscriptions} onChange={setSubscriptions} />
                  <CurrencyInput label="Fitness a Wellness" value={fitnessWellness} onChange={setFitnessWellness} />
                  <CurrencyInput label="Cestování" value={cestovani} onChange={setCestovani} />
                </>
              }
              right={
                <>
                  <CurrencyInput label="Zábava (kino apod.)" value={zabava} onChange={setZabava} />
                  <CurrencyInput label="Móda" value={moda} onChange={setModa} />
                  <CurrencyInput label="Hobby" value={hobby} onChange={setHobby} />
                </>
              }
            />
          </SectionCard>

          {/* ── Finanční závazky ── */}
          <SectionCard icon={<IconShieldCheck />} title="Finanční závazky">
            <TwoColGrid
              left={<CurrencyInput label="Pojištění" value={pojisteni} onChange={setPojisteni} />}
              right={<CurrencyInput label="Spoření a investice" value={sporeniInvestice} onChange={setSporeniInvestice} />}
            />
          </SectionCard>

          {/* ── Rodina & ostatní ── */}
          <SectionCard icon={<IconHeart />} title="Rodina & ostatní">
            <TwoColGrid
              left={
                <>
                  <CurrencyInput label="Jídlo" value={jidlo} onChange={setJidlo} />
                  <CurrencyInput label="Zvířata" value={zvirata} onChange={setZvirata} />
                </>
              }
              right={
                <>
                  <CurrencyInput label="Auto" value={auto} onChange={setAuto} />
                  <CurrencyInput label="Děti" value={deti} onChange={setDeti} />
                </>
              }
            />
          </SectionCard>

          {/* ── Vlastní položky ── */}
          <SectionCard icon={<IconListPlus />} title="Vlastní položky">
            {/* Custom rows */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              {customItems.map((item) => (
                <div
                  key={item.id}
                  className="content-stretch flex gap-[12px] items-end overflow-clip relative shrink-0 w-full"
                >
                  {/* Název */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative">
                    <p className="font-['Inter',sans-serif] leading-none not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
                      Název
                    </p>
                    <div className="bg-white h-[40px] relative rounded-[8px] w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center px-[12px] relative size-full">
                          <input
                            type="text"
                            value={item.name}
                            placeholder="Např. Kroužky"
                            onChange={(e) => updateCustomItem(item.id, "name", e.target.value)}
                            className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#94a3b8] text-[14px] bg-transparent outline-none w-full placeholder-[#94a3b8]"
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]"
                      />
                    </div>
                  </div>

                  {/* Měsíčně */}
                  <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[180px]">
                    <p className="font-['Inter',sans-serif] leading-none not-italic relative shrink-0 text-[#1A1A1A] text-[14px] whitespace-nowrap">
                      Měsíčně (Kč)
                    </p>
                    <div className="bg-white h-[40px] relative rounded-[8px] w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center leading-[1.6] not-italic px-[12px] relative size-full text-[#94a3b8] text-[14px]">
                          <input
                            type="number"
                            min={0}
                            value={item.amount === 0 ? "" : item.amount}
                            placeholder="0"
                            onChange={(e) => updateCustomItem(item.id, "amount", Math.max(0, Number(e.target.value) || 0))}
                            className="font-['Inter',sans-serif] relative flex-1 text-right text-[#94a3b8] bg-transparent outline-none min-w-0 placeholder-[#94a3b8]"
                            style={{ appearance: "textfield" }}
                          />
                          <p className="font-['Inter',sans-serif] relative shrink-0 text-[#94a3b8]">Kč</p>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.3px_0.45px_0px_rgba(0,0,0,0.06),0px_1.14px_2.38px_0px_rgba(0,0,0,0.02)]"
                      />
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    type="button"
                    onClick={() => removeCustomItem(item.id)}
                    className="bg-[#fef2f2] relative rounded-[8px] shrink-0 size-[40px] flex items-center justify-center cursor-pointer hover:bg-[#fee2e2] transition-colors"
                  >
                    <IconTrash />
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Add item button */}
            <button
              type="button"
              onClick={addCustomItem}
              className="h-[48px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#f0faf7] transition-colors"
            >
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
                  + Přidat položku
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#e2e9f0] border-dashed inset-0 pointer-events-none rounded-[12px]"
              />
            </button>
          </SectionCard>

          {/* ── Summary card ── */}
          <div className="bg-white relative rounded-[12px] shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                <div className="content-stretch flex items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1A1A1A] w-full whitespace-nowrap">
                  <p 
                    className="font-['Inter',sans-serif] leading-[1.4] relative shrink-0 text-[18px]"
                    style={{ fontWeight: 700 }}
                  >
                    Celkové měsíční výdaje
                  </p>
                  <p 
                    className="font-['Inter',sans-serif] leading-[1.3] relative shrink-0 text-[28px] text-[#00A878]"
                    style={{ fontWeight: 700 }}
                  >
                    {formatCurrency(total)}
                  </p>
                </div>
                <div className="bg-[#E5E5E5] h-px shrink-0 w-full" />
                <p className="font-['Inter',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666666] text-[13px]">
                  Odhad slouží pouze pro výpočet doporučeného pojištění.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border-2 border-[#E5E5E5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>

        <StepButtons backTo="/zivotni/krok-3" nextTo="/zivotni/krok-5" containerWidth="600px" />
      </div>
    </div>
  );
}