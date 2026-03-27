import svgPaths from "./svg-x9z7j45il0";
import imgMingIconCarFill from "figma:asset/d1627ecc5ccc18d77d88bcbef11aabe8bbc10678.png";
import imgGeminiGeneratedImage20Xl8B20Xl8B20Xl1 from "figma:asset/d687bd0494c1fc5b7a15fab19241488848a79c2e.png";
import imgMingIconCarFill1 from "figma:asset/365911fcda6c1c916c637e400c7e3c290d9eb6dd.png";

function MingIconCarFill() {
  return (
    <div className="h-[174px] relative shrink-0 w-[225px]" data-name="ming_icon/car_fill">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.44%] left-[2.35%] max-w-none top-[-37.3%] w-[91.48%]" src={imgMingIconCarFill} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-[250px] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-end p-[12px] relative size-full">
          <MingIconCarFill />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path clipRule="evenodd" d={svgPaths.p17aa5480} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">Byt</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[250px] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-end p-[12px] relative size-full">
          <div className="h-[176px] relative shrink-0 w-[200px]" data-name="Gemini_Generated_Image_20xl8b20xl8b20xl 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[170.45%] left-0 max-w-none top-[-29.6%] w-full" src={imgGeminiGeneratedImage20Xl8B20Xl8B20Xl1} />
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="radio_button_fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <g id="Vector" />
                <path d={svgPaths.pbbdde00} fill="var(--fill-0, #64748B)" id="Vector_2" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center w-[min-content]">
            <p className="leading-[1.6]">Dům</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#64748b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MingIconCarFill1() {
  return (
    <div className="h-[172px] relative shrink-0 w-[201px]" data-name="ming_icon/car_fill">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[161.34%] left-[3.98%] max-w-none top-[-22.09%] w-[92.04%]" src={imgMingIconCarFill1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-[250px] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-end p-[12px] relative size-full">
          <MingIconCarFill1 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ming_icon/round_line">
            <div className="absolute inset-[8.33%]" data-name="vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path clipRule="evenodd" d={svgPaths.p17aa5480} fill="var(--fill-0, #E2E9F0)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">Chata, chalupa</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}