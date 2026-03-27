import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-2lsot4uq1k";
import imgMingIconLocationFill from "figma:asset/0df5bc1a88f29626e9a39ed2853e63c68b148db1.png";
import imgMingIconSurfboardLine from "figma:asset/bc05de0cd6e1652926833e79a1630e2a2462e5b9.png";
import { Search, User, Calendar, DollarSign } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání pojištění mazlíčků</p>
      </div>
    </div>
  );
}

function SummarySection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full max-w-[492px]" data-name="Summary">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
            <p className="leading-[1.6]">Shrnutí</p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
            <p className="leading-[1.6]">{`Slavia Komplex `}</p>
          </div>
        </div>
      </div>

      <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <User className="size-[24px] text-[#EF8600]" />
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">Pes</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[134.71%] left-[-39.1%] max-w-none top-[-13.24%] w-[172.18%]" src={imgMingIconLocationFill} />
            </div>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">1 rok</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <Calendar className="size-[24px] text-[#EF8600]" />
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">{`Datum `}</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="h-[27px] overflow-clip relative shrink-0 w-[28px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMingIconSurfboardLine} />
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">5 104 Kč</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}

function InputField({ label, placeholder, value, onChange, required = false, type = "text" }: InputFieldProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
        <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
          <p className="leading-[1.6]">{label}</p>
        </div>
        {required && (
          <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
            <p className="leading-[1.6]">*</p>
          </div>
        )}
      </div>
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
        />
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
      </div>
    </div>
  );
}

function UdajeZadavatele() {
  const [jmeno, setJmeno] = useState("");
  const [prijmeni, setPrijmeni] = useState("");
  const [rodneCislo, setRodneCislo] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#F5F5F5] relative rounded-[12px] shrink-0 w-full max-w-[492px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6] whitespace-pre">{`Údaje  zadavatele`}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />

          <div className="flex gap-[24px] w-full">
            <InputField label="Jméno" placeholder="Jméno" value={jmeno} onChange={setJmeno} required />
            <InputField label="Příjmení" placeholder="Příjmení" value={prijmeni} onChange={setPrijmeni} />
          </div>

          <InputField label="Rodné číslo" placeholder="rodné číslo" value={rodneCislo} onChange={setRodneCislo} required />

          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Kontaktní údaje</p>
              </div>
              <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
                <p className="leading-[1.6]">*</p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] w-full">
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="Telefon"
                  className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
                />
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>

              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
                />
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function UdajeOMazlickovi() {
  const [pohlavi, setPohlavi] = useState("");
  const [datumNarozeni, setDatumNarozeni] = useState("");
  const [cisloCipu, setCisloCipu] = useState("");
  const [kastrace, setKastrace] = useState(false);
  const [jmenoVeterinare, setJmenoVeterinare] = useState("");

  return (
    <div className="bg-[#F5F5F5] relative rounded-[12px] shrink-0 w-full max-w-[492px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Údaje o mazlíčkovi</p>
              </div>
            </div>
          </div>

          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />

          <div className="flex gap-[24px] w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1">
              <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Pohlaví mazlíčka</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <input
                  value={pohlavi}
                  onChange={(e) => setPohlavi(e.target.value)}
                  placeholder="fenka"
                  className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
                />
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1">
              <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Datum narození</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <input
                  type="date"
                  value={datumNarozeni}
                  onChange={(e) => setDatumNarozeni(e.target.value)}
                  placeholder="2/1.2025"
                  className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
                />
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] w-full items-end">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1">
              <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Číslo čipu</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <input
                  value={cisloCipu}
                  onChange={(e) => setCisloCipu(e.target.value)}
                  placeholder="číslo čipu"
                  className="flex flex-row items-center overflow-clip rounded-[inherit] size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
                />
                <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            <div className="content-stretch flex items-center justify-between relative shrink-0 h-[40px] px-[12px]">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Kastrace</p>
              </div>
              <button
                onClick={() => setKastrace(!kastrace)}
                className={`content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px] transition-all cursor-pointer ml-[12px] ${
                  kastrace ? "justify-end bg-[#00A878]" : "justify-start bg-[#cbd5e1]"
                }`}
              >
                <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" />
              </button>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1A1A1A] text-[18px]" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Jméno veterináře</p>
              </div>
              <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
                <p className="leading-[1.6]">*</p>
              </div>
            </div>
            <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <input
                  value={jmenoVeterinare}
                  onChange={(e) => setJmenoVeterinare(e.target.value)}
                  placeholder="jméno veterináře"
                  className="flex flex-1 items-center overflow-clip size-full px-[12px] font-['Inter',sans-serif] text-[14px] text-[#020617] placeholder:text-[#94a3b8] border-none outline-none"
                />
                <div className="overflow-clip relative shrink-0 size-[24px] mr-[12px]">
                  <Search className="size-[24px] text-[#E2E9F0]" />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function SouhlasPotvrzeni() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);

  return (
    <div className="bg-[#F5F5F5] relative rounded-[12px] shrink-0 w-full max-w-[492px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p14e0bc80} fill="#00A878" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
              <p className="leading-[1.6]">Souhlas a potvrzení</p>
            </div>
          </div>

          <div className="bg-[#e2e9f0] h-px shrink-0 w-full" />

          {[
            { state: checkbox1, setState: setCheckbox1, text: "Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že společnost provádí pojištění odpověď vašim požadavkům a potřebám. *" },
            { state: checkbox2, setState: setCheckbox2, text: "Souhlasím se zpracováním osobních údajů v souladu s GDPR. *" },
            { state: checkbox3, setState: setCheckbox3, text: "Chci dostávat informace o novinkách a speciálních nabídkách." },
            { state: checkbox4, setState: setCheckbox4, text: "Souhlasím s podmínkami pojištění a zasíláním elektronické komunikace." },
          ].map((item, idx) => (
            <div key={idx} className="relative shrink-0 w-full">
              <div className="flex flex-row items-start size-full">
                <div className="content-stretch flex gap-[12px] items-start p-[2px] relative w-full">
                  <button
                    onClick={() => item.setState(!item.state)}
                    className="overflow-clip relative shrink-0 size-[24px] cursor-pointer bg-transparent border-none p-0"
                  >
                    <div className="absolute inset-[8.33%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.p17aa5480} fill={item.state ? "#00A878" : "#E2E9F0"} fillRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                  <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1A1A1A] text-[14px]">
                    <p className="leading-[1.6]">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

export default function PetInsuranceStep3() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/mazlicici/krok-4");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="mazlicici" />
        <HeadingContainer />

        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={3} totalSteps={4} />

          <div className="w-full max-w-[600px] flex flex-col gap-[32px]">
            <SummarySection />
            <UdajeZadavatele />
            <UdajeOMazlickovi />
            <SouhlasPotvrzeni />

            <button
              onClick={handleSubmit}
              className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]"
            >
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
                <p className="leading-[1.6]">Sjednat a zaplatit</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}