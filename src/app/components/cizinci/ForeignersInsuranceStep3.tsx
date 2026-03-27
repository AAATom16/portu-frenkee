import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-v3xbo2h1gw";
import imgChatGptImageMar202026104444Am2 from "figma:asset/fdd2d788dd6542f4fe4284d63d5df7bd1d8ed821.png";
import imgMingIconLocationFill from "figma:asset/0df5bc1a88f29626e9a39ed2853e63c68b148db1.png";
import imgMingIconSurfboardLine from "figma:asset/bc05de0cd6e1652926833e79a1630e2a2462e5b9.png";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online sjednání cestovního pojištění</p>
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
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">{`Slavia Komplex `}</p>
          </div>
        </div>
      </div>

      <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Deštník">
          <div className="flex h-[19.092px] items-center justify-center relative shrink-0 w-[22.079px]">
            <div className="flex-none rotate-[0.24deg]">
              <div className="h-[19px] relative w-[22px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[145%] left-[-13.04%] max-w-none top-[-15%] w-[126.09%]" src={imgChatGptImageMar202026104444Am2} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">Komplexní péče</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ming_icon/location_fill">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[134.71%] left-[-39.1%] max-w-none top-[-13.24%] w-[172.18%]" src={imgMingIconLocationFill} />
            </div>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">3 měsíce</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/calendar_month_fill">
            <div className="absolute inset-[12.5%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p1cce9500} fill="var(--fill-0, #EF8600)" id="vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] text-center whitespace-nowrap" style={{ fontWeight: 500 }}>
            <p className="leading-[1.6]">{`Datum `}</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
          <div className="h-[27px] overflow-clip relative shrink-0 w-[28px]" data-name="ming_icon/surfboard_line">
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
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#94a3b8] text-[14px] bg-transparent border-none outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface DropdownFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}

function DropdownField({ label, placeholder, value, onChange, options, required = false }: DropdownFieldProps) {
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
      <div className="bg-white relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-[1_0_0] font-['Inter',sans-serif] leading-[20px] min-h-px min-w-px bg-transparent border-none outline-none text-[#94a3b8] text-[14px]"
            >
              <option value="">{placeholder}</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

function CheckboxField({ label, checked, onChange, description }: CheckboxFieldProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <button
        onClick={() => onChange(!checked)}
        className="bg-white relative rounded-[4px] shrink-0 size-[20px] cursor-pointer mt-[2px]"
      >
        <div aria-hidden="true" className={`absolute border ${checked ? "border-[#00A878]" : "border-[#e2e9f0]"} border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]`} />
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#00A878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </button>
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Inter',sans-serif] leading-[1.6] not-italic text-[#1A1A1A] text-[14px]">
          {label}
        </p>
        {description && (
          <p className="font-['Inter',sans-serif] leading-[1.6] not-italic text-[#64748b] text-[12px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ForeignersInsuranceStep3() {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passportValidFrom, setPassportValidFrom] = useState("");
  const [passportValidTo, setPassportValidTo] = useState("");
  
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [address, setAddress] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  
  const [differentAddress, setDifferentAddress] = useState(false);
  const [otherInsured, setOtherInsured] = useState(false);
  
  const [gdprConsent, setGdprConsent] = useState(false);
  const [personalDataConsent, setPersonalDataConsent] = useState(false);
  const [newsConsent, setNewsConsent] = useState(true);
  const [electronicConsent, setElectronicConsent] = useState(true);

  const handleSubmit = () => {
    navigate("/cizinci/krok-4");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="cizinci" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] md:px-[99px] relative shrink-0 w-full">
          <StepIndicator currentStep={3} totalSteps={4} />
          
          <div className="w-full max-w-[600px] flex flex-col gap-[32px]">
            <SummarySection />

            {/* Personal Information */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[20px]" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Osobní údaje</p>
              </div>
              
              <div className="grid grid-cols-2 gap-[16px]">
                <InputField label="Jméno" placeholder="Jméno" value={firstName} onChange={setFirstName} required />
                <InputField label="Příjmení" placeholder="Příjmení" value={lastName} onChange={setLastName} />
              </div>

              <DropdownField
                label="Datum narození"
                placeholder="2.1.2026"
                value={birthYear}
                onChange={setBirthYear}
                options={["2.1.2026", "1.1.2026", "3.1.2026"]}
                required
              />

              <InputField label="Číslo pasu" placeholder="Číslo pasu" value={passportNumber} onChange={setPassportNumber} required />

              <div className="grid grid-cols-2 gap-[16px]">
                <DropdownField
                  label="Pas platný od"
                  placeholder="2.1.2026"
                  value={passportValidFrom}
                  onChange={setPassportValidFrom}
                  options={["2.1.2026", "1.1.2026", "3.1.2026"]}
                  required
                />
                <DropdownField
                  label="Pas platný do"
                  placeholder="2.1.2026"
                  value={passportValidTo}
                  onChange={setPassportValidTo}
                  options={["2.1.2026", "1.1.2026", "3.1.2026"]}
                  required
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[20px]" style={{ fontWeight: 700 }}>
                <p className="leading-[1.6]">Kontaktní údaje</p>
              </div>
              
              <InputField label="Telefon" placeholder="Telefon" value={phone} onChange={setPhone} required type="tel" />
              <InputField label="E-mail" placeholder="E-mail" value={email} onChange={setEmail} required type="email" />
            </div>

            {/* Address in Czech Republic */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[4px] items-center">
                <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1A1A1A] text-[20px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Adresa v ČR</p>
                </div>
                <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center relative shrink-0 text-[#d60021] text-[14px]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              
              <div className="flex gap-[8px] items-center">
                <InputField label="" placeholder="Adresa" value={address} onChange={setAddress} />
                <div className="overflow-clip relative shrink-0 size-[24px] mt-[8px] cursor-pointer" data-name="ming_icon/search_line">
                  <div className="absolute inset-[8.33%]" data-name="vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p110fb400} fill="var(--fill-0, #CBD5E1)" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>

              <DropdownField
                label="Země původu"
                placeholder="Země původu"
                value={countryOfOrigin}
                onChange={setCountryOfOrigin}
                options={["Česká republika", "Slovensko", "Polsko", "Německo"]}
              />

              <DropdownField
                label="Stát"
                placeholder="Stát"
                value={state}
                onChange={setState}
                options={["Praha", "Středočeský", "Jihočeský"]}
              />

              <div className="grid grid-cols-2 gap-[16px]">
                <InputField label="Město" placeholder="Město" value={city} onChange={setCity} />
                <InputField label="Číslo popisné" placeholder="Číslo popisné" value={houseNumber} onChange={setHouseNumber} />
              </div>

              <CheckboxField
                label="Chci zadat jinou korespondenční adresu"
                checked={differentAddress}
                onChange={setDifferentAddress}
              />

              <CheckboxField
                label="Jiný pojištěnec"
                checked={otherInsured}
                onChange={setOtherInsured}
              />
            </div>

            {/* Consent Section */}
            <div className="bg-[#F5F5F5] rounded-[12px] p-[24px] flex flex-col gap-[16px]">
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="#00A878" strokeWidth="2" fill="none"/>
                    <path d="M9 12L11 14L15 10" stroke="#00A878" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1A1A1A] text-[18px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                  Souhlas a potvrzení
                </p>
              </div>

              <CheckboxField
                label="Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednanou pojištění odpovídá vašim potřebám a přáním."
                checked={gdprConsent}
                onChange={setGdprConsent}
                description="*"
              />

              <CheckboxField
                label="Souhlasím se zpracováním osobních údajů v souladu s GDPR."
                checked={personalDataConsent}
                onChange={setPersonalDataConsent}
                description="*"
              />

              <CheckboxField
                label="Chci dostávat informace o novinkách a speciálních nabídkách"
                checked={newsConsent}
                onChange={setNewsConsent}
              />

              <CheckboxField
                label="Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace."
                checked={electronicConsent}
                onChange={setElectronicConsent}
              />
            </div>

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