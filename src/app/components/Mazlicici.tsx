import NavbarHeaderShared from "./NavbarHeader";
import { useNavigate } from "react-router";

export default function Mazlicici() {
  const navigate = useNavigate();

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="mazlicici" />
      
      <div className="flex flex-col items-center gap-[32px] max-w-[800px] mt-[80px]">
        <h1 
          className="font-['Inter',sans-serif] text-[48px] text-center leading-[1.2] text-[#1A1A1A]"
          style={{ fontWeight: 800 }}
        >
          Pojištění mazlíčků
        </h1>
        
        <p className="font-['Inter',sans-serif] text-[18px] text-[#666666] text-center leading-[1.6]">
          Ochraňte své čtyřnohé přátele komplexním pojištěním. 
          Pojistěte zdraví vašeho psa nebo kočky již od 77 Kč měsíčně.
        </p>
        
        <button
          onClick={() => navigate("/mazlicici/krok-1")}
          className="content-stretch flex gap-[8px] h-[56px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878]"
        >
          <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
            <p className="leading-[1.6]">Začít kalkulaci</p>
          </div>
        </button>

        <div className="bg-gradient-to-br from-[#00A878]/10 to-[#00A878]/5 rounded-[16px] p-[32px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <div className="text-[32px]">🐕</div>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                Psi
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#64748b]">
                Komplexní pojištění pro všechna plemena
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-[12px]">
              <div className="text-[32px]">🐈</div>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                Kočky
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#64748b]">
                Ochrana zdraví vašich kočičích miláčků
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-[12px]">
              <div className="text-[32px]">💰</div>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
                Od 77 Kč
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#64748b]">
                Dostupné ceny pro každého majitele
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}