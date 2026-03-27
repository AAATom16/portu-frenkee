import NavbarHeaderShared from "./NavbarHeader";

export default function Cizinci() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="cizinci" />
      
      <div className="flex flex-col items-center gap-[32px] max-w-[800px] mt-[80px]">
        <h1 
          className="font-['Inter',sans-serif] text-[48px] text-center leading-[1.2] text-[#1A1A1A]"
          style={{ fontWeight: 800 }}
        >
          Pojištění pro cizince
        </h1>
        
        <p className="font-['Inter',sans-serif] text-[18px] text-[#666666] text-center leading-[1.6]">
          Připravujeme pro vás speciální pojistné produkty určené pro cizince v České republice.
          Brzy zde najdete zdravotní pojištění, cestovní pojištění a další služby.
        </p>
        
        <div className="bg-gradient-to-br from-[#00A878]/10 to-[#00A878]/5 rounded-[16px] p-[48px] text-center">
          <p className="font-['Inter',sans-serif] text-[24px] text-[#1A1A1A] mb-[16px]" style={{ fontWeight: 700 }}>
            Již brzy
          </p>
          <p className="font-['Inter',sans-serif] text-[16px] text-[#64748b]">
            Pracujeme na této sekci. Děkujeme za trpělivost.
          </p>
        </div>
      </div>
    </div>
  );
}