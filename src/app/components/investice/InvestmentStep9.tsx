import { useState } from "react";
import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import { Calendar, DollarSign, Umbrella, MapPin, Shield } from "lucide-react";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

export default function InvestmentStep9() {
  const navigate = useNavigate();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthNumber, setBirthNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [differentAddress, setDifferentAddress] = useState(false);
  const [newsConsent, setNewsConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] relative shrink-0 w-full">
          <StepIndicator currentStep={9} totalSteps={9} />
          
          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[700px]">
            
            {/* Summary Section */}
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full justify-between">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                  <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Shrnutí</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Portfolio od Portu</p>
                  </div>
                </div>
              </div>
              
              <div className="content-stretch flex gap-[16px] items-center justify-start relative shrink-0 w-full flex-wrap">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <Umbrella className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Jednorázová investice
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <Calendar className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    10 let
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <DollarSign className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    2 000 Kč / měsíčně
                  </p>
                </div>
              </div>
            </div>
            
            {/* Name Fields */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Jméno</p>
                </div>
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#d60021] text-[14px]" style={{ fontWeight: 400 }}>
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <input
                type="text"
                placeholder="Jméno"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                style={{ fontWeight: 400 }}
              />
              <input
                type="text"
                placeholder="Příjmení"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                style={{ fontWeight: 400 }}
              />
            </div>
            
            {/* Birth Number */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-center justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Rodné číslo</p>
                </div>
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#d60021] text-[14px]" style={{ fontWeight: 400 }}>
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <input
                type="text"
                placeholder="123456712..."
                value={birthNumber}
                onChange={(e) => setBirthNumber(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                style={{ fontWeight: 400 }}
              />
            </div>
            
            {/* Contact Details */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Kontaktní údaje</p>
                </div>
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#d60021] text-[14px]" style={{ fontWeight: 400 }}>
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <input
                type="tel"
                placeholder="Telefon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                style={{ fontWeight: 400 }}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                style={{ fontWeight: 400 }}
              />
            </div>
            
            {/* Address */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Adresa</p>
                </div>
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center relative shrink-0 text-[#d60021] text-[14px]" style={{ fontWeight: 400 }}>
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Adresa"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] pr-[40px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                  style={{ fontWeight: 400 }}
                />
                <MapPin className="absolute right-[12px] top-[12px] size-[16px] text-[#94a3b8]" strokeWidth={2} />
              </div>
              
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] appearance-none"
                style={{ fontWeight: 400, backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
              >
                <option value="">Země původu</option>
                <option value="cz">Česká republika</option>
                <option value="sk">Slovensko</option>
                <option value="pl">Polsko</option>
              </select>
              
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] appearance-none"
                style={{ fontWeight: 400, backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
              >
                <option value="">Stát</option>
                <option value="praha">Praha</option>
                <option value="brno">Brno</option>
                <option value="ostrava">Ostrava</option>
              </select>
              
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <input
                  type="text"
                  placeholder="Město"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="bg-white h-[40px] relative rounded-[8px] shrink-0 flex-1 border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                  style={{ fontWeight: 400 }}
                />
                <input
                  type="text"
                  placeholder="Směrovací číslo"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                  className="bg-white h-[40px] relative rounded-[8px] shrink-0 flex-1 border border-[#e2e9f0] px-[12px] font-['Mona_Sans',sans-serif] text-[14px] text-[#1e1b2e] placeholder:text-[#94a3b8] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
                  style={{ fontWeight: 400 }}
                />
              </div>
              
              <label className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
                <input
                  type="checkbox"
                  checked={differentAddress}
                  onChange={(e) => setDifferentAddress(e.target.checked)}
                  className="size-[16px] rounded border-[#cbd5e1] text-[#3f2578] focus:ring-[#3f2578]"
                />
                <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#64748b] text-[14px]" style={{ fontWeight: 400 }}>
                  Chci zadat jinou korespondenční adresu
                </p>
              </label>
            </div>
            
            {/* Consent Section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full bg-[#f8f6fb] p-[24px] rounded-[12px] border border-[#e2d8f0]">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <Shield className="size-[20px] text-[#3f2578]" strokeWidth={2} />
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px]" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Souhlas a potvrzení</p>
                </div>
              </div>
              
              <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full" style={{ fontWeight: 400 }}>
                Odesláním formuláře souhlasíte se zpracováním osobních údajů v souladu s GDPR.*
              </p>
              
              <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#64748b] text-[13px] w-full" style={{ fontWeight: 400 }}>
                Souhlasím se zpracováním osobních údajů v souladu a GDPR.*
              </p>
              
              <label className="content-stretch flex gap-[8px] items-start relative shrink-0 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsConsent}
                  onChange={(e) => setNewsConsent(e.target.checked)}
                  className="size-[16px] mt-[2px] rounded border-[#cbd5e1] text-[#3f2578] focus:ring-[#3f2578]"
                />
                <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] flex-1" style={{ fontWeight: 400 }}>
                  Chci dostávat informace o novinkách a speciálních nabídkách.
                </p>
              </label>
              
              <label className="content-stretch flex gap-[8px] items-start relative shrink-0 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsConsent}
                  onChange={(e) => setTermsConsent(e.target.checked)}
                  required
                  className="size-[16px] mt-[2px] rounded border-[#cbd5e1] text-[#3f2578] focus:ring-[#3f2578]"
                />
                <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[14px] flex-1" style={{ fontWeight: 400 }}>
                  Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.
                </p>
              </label>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-[12px] w-full">
              <button
                type="button"
                onClick={() => navigate("/investice/krok-8")}
                className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer bg-white border border-[#e2e9f0]"
              >
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[#64748b] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.6]">Zpět</p>
                </div>
              </button>
              
              <button
                type="submit"
                className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] flex-1 cursor-pointer"
                style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}
              >
                <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>
                  <p className="leading-[1.6]">Sjednat a zaplatit</p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}