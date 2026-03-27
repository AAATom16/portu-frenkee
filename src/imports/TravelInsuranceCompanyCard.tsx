import svgPaths from "./svg-vcoq9stcvb";
import imgAxaLogoSvg1 from "figma:asset/c5a01fa47581bcec815ffc178674c5998b800d75.png";

function Frame() {
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Krytí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">100 mil./ 100 mil.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úraz</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Celá posádka</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">40 000 Kč</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Poškožení zvěří</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Roční nájezd</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">do 12 500 Km</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center w-full whitespace-nowrap">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">Úrazové pojištění</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.6]">400 000 Kč</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
      <Frame1 />
      <Frame8 />
      <Frame2 />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame25() {
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

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Skla</p>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">limit 15 000 kč, spoluúčast 10%</span>
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

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Připojištění</p>
      </div>
      <Frame17 />
    </div>
  );
}

function BackgroundShadow1() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 310 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Rozšířená asistence</p>
      </div>
      <Frame26 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Limit 100 000 Kč</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34c759] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">+ 732 Kč</p>
      </div>
      <div className="bg-[#3f2578] content-stretch flex h-[22.5px] items-center justify-end overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow2 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Střez se zvěří</p>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[14px] text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Limit 100 000 Kč</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Území Evropy a Turecka</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame28 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function BackgroundShadow3() {
  return <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] shrink-0 size-[18px]" data-name="Background+Shadow" />;
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="bg-[#e2e9f0] content-stretch flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] shrink-0 w-[40.5px]" data-name="toggle">
        <BackgroundShadow3 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c7cae] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">Živelná rizika</p>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#b2a8c9] text-[14px] text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Limit 100 000 Kč, spoluúčast 10%</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <ul>
          <li className="list-disc ms-[21px]">
            <span className="leading-none">Území Evropy a Turecka</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[4px] relative w-full">
        <Frame11 />
        <Frame13 />
        <Frame14 />
        <Frame15 />
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

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[12px] relative w-full">
          <Frame4 />
          <Frame9 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 0.4">
                <line id="Line 6" stroke="var(--stroke-0, #3F2578)" strokeOpacity="0.5" strokeWidth="0.4" x2="376" y1="0.2" y2="0.2" />
              </svg>
            </div>
          </div>
          <Frame19 />
          <Radio />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] items-center justify-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3f2578] text-[18px]">
        <p className="leading-[1.6]">698 Kč / měsíčně</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#64748b] text-[14px]">
        <p className="leading-[1.6]">7 023 Kč celkem</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#edf2f7] h-[135px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative size-full">
          <Frame5 />
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

export default function TravelInsuranceCompanyCard() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-white gap-[10px] items-center justify-center relative rounded-[12px] size-full to-white" data-name="Travel insurance_company card">
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame12 />
      <Frame3 />
    </div>
  );
}