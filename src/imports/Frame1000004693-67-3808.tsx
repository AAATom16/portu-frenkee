import svgPaths from "./svg-nal9jy1t60";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";

function Input1() {
  return (
    <div className="bg-[#3f2578] content-stretch flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="input">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[1.6]">Měsíčně</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">kvartálně</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">ročně</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0" data-name="input">
      <div className="content-stretch flex gap-[24px] h-full items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[inherit]">
        <Input1 />
        <Frame75 />
        <Frame74 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Display_Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Frekvence plateb</p>
      </div>
      <Input />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.6]">Upravit nabídku</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/settings_6_line">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p17c79800} fill="var(--fill-0, white)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame51 />
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[#3f2578] content-stretch flex flex-col items-start p-[10px] relative rounded-[8px] shrink-0" data-name="Summary">
      <Frame17 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[24px] h-[50px] items-center relative shrink-0">
      <Frame79 />
      <Summary />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Dostupné nabídky</p>
      </div>
      <Frame78 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úmrtí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">100 000 Kč</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Invalidita konstantní</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p>
          <span className="leading-[1.6]">{`500tis. `}</span>
          <span className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic">(pro III. st.)</span>
        </p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[1.6]">{`5 mil. `}</span>
          <span className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic">(pro III. st.)</span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Invalidita klesající</p>
      </div>
      <Frame26 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Závažných nemocí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">300 000 kč</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Trvalé následky</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">700 000 kč</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame4 />
      <Frame24 />
      <Frame5 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 310 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Sporty</p>
      </div>
      <Frame54 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Squash - celostátní a mezinárodní úrovně</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Smluvní servis bez spoluúčasti</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Frame47 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame46 />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 110 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Hospitalizace</p>
      </div>
      <Frame55 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Limit dnů</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[4px] relative w-full">
        <Frame38 />
        <Frame40 />
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame7 />
          <Frame25 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="408" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame48 />
          <Radio />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          <Frame8 />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame39 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úmrtí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">100 000 Kč</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Invalidita konstantní</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p>
          <span className="leading-[1.6]">{`500tis. `}</span>
          <span className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic">(pro III. st.)</span>
        </p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[1.6]">{`5 mil. `}</span>
          <span className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic">(pro III. st.)</span>
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Invalidita klesající</p>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Závažných nemocí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">300 000 kč</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Trvalé následky</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">700 000 kč</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame30 />
      <Frame11 />
      <Frame32 />
      <Frame12 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 310 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow2 />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Sporty</p>
      </div>
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Squash - celostátní a mezinárodní úrovně</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Smluvní servis bez spoluúčasti</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame57 />
      <Frame60 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame56 />
    </div>
  );
}

function BackgroundShadow3() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 110 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow3 />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Hospitalizace</p>
      </div>
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Limit dnů</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame62 />
      <Frame64 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[4px] relative w-full">
        <Frame42 />
        <Frame43 />
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame9 />
          <Frame28 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="408" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame53 />
          <Radio1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          <Frame14 />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame41 />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[71px]" data-name="AXA_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogoSvg1} />
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">AXA Comfort premium</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úmrtí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">100 000 Kč</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Invalidita konstantní</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p>
          <span className="leading-[1.6]">{`500tis. `}</span>
          <span className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic">(pro III. st.)</span>
        </p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[1.6]">{`5 mil. `}</span>
          <span className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] not-italic">(pro III. st.)</span>
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Invalidita klesající</p>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Závažných nemocí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">300 000 kč</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Trvalé následky</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">700 000 kč</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame35 />
      <Frame18 />
      <Frame37 />
      <Frame19 />
    </div>
  );
}

function BackgroundShadow4() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 310 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow4 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Sporty</p>
      </div>
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Squash - celostátní a mezinárodní úrovně</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Smluvní servis bez spoluúčasti</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame68 />
      <Frame70 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame67 />
    </div>
  );
}

function BackgroundShadow5() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 110 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow5 />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Hospitalizace</p>
      </div>
      <Frame76 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Limit dnů</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame73 />
      <Frame77 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[4px] relative w-full">
        <Frame66 />
        <Frame71 />
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="radio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[2px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#321e60] text-[14px] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ming_icon/information_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p13035d50} fill="var(--fill-0, #94A3B8)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame15 />
          <Frame33 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="408" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame65 />
          <Radio2 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#edf2f7] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative w-full">
          <Frame21 />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="primary" style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(101, 81, 147) 0%, rgb(101, 81, 147) 100%)" }}>
            <div className="flex flex-col font-['Mona_Sans_VF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInsuranceCompanyCard2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame44 />
      <Frame20 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <TravelInsuranceCompanyCard />
      <TravelInsuranceCompanyCard1 />
      <TravelInsuranceCompanyCard2 />
    </div>
  );
}

export default function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      <Frame2 />
      <Frame27 />
    </div>
  );
}