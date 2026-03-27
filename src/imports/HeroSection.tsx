import { ArrowRight } from "lucide-react";
import HeroSectionMobile from "./HeroSectionMobile";
import svgPaths from "./svg-kykr9cm1ks";
import imgImageCestovniPojisteniLetadlo from "figma:asset/c6bcaf904c43ec4ea7442797b069b6b4d837279b.png";
import imgImage from "figma:asset/44e9acd510943127be51513f55c5258d35f26fac.png";
import imgChatGptImageMar272026091329Am1 from "figma:asset/c085d3f2816be64027ac0ed34c49d8a4c3b4ba3f.png";
import imgImage1 from "figma:asset/bc1a960162708984bf13965294f9a7418f0f4b84.png";
import imgImage2 from "figma:asset/ad34a28e8485c2c67614d813d7f146e99a03e493.png";
import imgChatGptImageMar272026090418Am1 from "figma:asset/3148fab26dd9a412e05d2207288aaa6a6e565957.png";
import imgChatGptImageMar272026082205AmPng2 from "figma:asset/f82e6209f7c23390542fa8c0ad354194700f6ff3.png";

function Container() {
  return <div className="absolute h-[1148px] left-0 top-0 w-[1447px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="h-[144px] relative shrink-0 w-[391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[72px] left-[225.5px] not-italic text-[72px] text-center text-white top-0 tracking-[-1px] w-[421px]">Finance jednoduše</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[144px] items-start justify-center left-0 top-0 w-[391px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[196.36px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center top-[-0.5px] whitespace-nowrap">Bez chytáků a otravných schůzek</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start justify-center left-[30px] top-[152px] w-[391px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function HeadingContainer() {
  return (
    <div className="absolute h-[184px] left-0 top-[40px] w-[391px]" data-name="HeadingContainer">
      <Container2 />
      <Container3 />
    </div>
  );
}

function TextContainre() {
  return (
    <div className="absolute h-[264px] left-[-16px] top-0 w-[407px]" data-name="TextContainre">
      <HeadingContainer />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[39.594px] relative shrink-0 w-[216.633px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.6px] left-0 not-italic text-[36px] text-white top-0 whitespace-nowrap">Pojištění aut</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.594px] items-start justify-center left-0 top-0 w-[216.633px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[225.023px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Jednoduché online sjednání.</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[225.023px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Ušetřete čas a peníze!</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start justify-center left-0 top-[47.59px] w-[225.023px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function HeadingContainer1() {
  return (
    <div className="absolute h-[95.594px] left-[24px] top-[24px] w-[405px]" data-name="HeadingContainer1">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-[305.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.6px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">Chci povinné ručení + havarijní pojištění</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.594px] items-start justify-center left-[20px] top-[11.2px] w-[305.234px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#00a878] h-[48px] left-0 overflow-clip rounded-[12px] top-[56px] w-[345.234px]" data-name="Link">
      <Container7 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[8.805px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6094 8.80469">
        <path d={svgPaths.p33697f80} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.805px] items-start left-[7px] top-[9px] w-[13.609px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[13.805px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3984 13.8047">
        <path d={svgPaths.p2086cf00} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.805px] items-start left-[7px] top-[25.2px] w-[14.398px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute bg-[#00a878] h-[48px] left-0 overflow-clip top-0 w-[28px]" data-name="Image">
      <Container9 />
      <Container10 />
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[343px]" data-name="ImageFill">
      <Image />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[85.781px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[15px] whitespace-nowrap">Zadejte SPZ</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-start justify-center left-0 top-0 w-[85.781px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[18px] left-[129.11px] opacity-50 overflow-clip top-[15px] w-[85.781px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip rounded-[10px] top-0 w-[343px]" data-name="Container">
      <ImageFill />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute border border-[#cbd5e1] border-solid h-[50px] left-[-1px] rounded-[11px] top-[-1px] w-[345px]" data-name="Container" />;
}

function Input() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[10px] top-0 w-[343px]" data-name="Input">
      <Container8 />
      <Container13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[104px] left-[24px] top-[143.59px] w-[345.234px]" data-name="Frame12">
      <Link />
      <Input />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[298px] relative shrink-0 w-full" data-name="Container">
      <HeadingContainer1 />
      <Frame />
    </div>
  );
}

function BentoCell() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[300px] items-start left-0 p-px rounded-[12px] top-0 w-[455px]" data-name="BentoCell">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <Container4 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[79.188px] relative shrink-0 w-[232px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.6px] left-0 not-italic text-[36px] text-white top-[0.19px] w-[187px]">Cestovní pojištění</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[79.188px] items-start justify-center left-0 top-0 w-[232px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[232px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Se slevou až 50%!</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[87.19px] w-[232px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function HeadingContainer2() {
  return (
    <div className="absolute h-[111.188px] left-[24px] top-[126.81px] w-[232px]" data-name="HeadingContainer2">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#00a878] text-[16px] text-center top-[-1px] whitespace-nowrap">Spočítat</p>
      </div>
    </div>
  );
}

function ButtonGhost() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[2px] w-[65.211px]" data-name="ButtonGhost">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[18.5px] relative shrink-0 w-[24px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <ArrowRight className="text-[#00a878] size-[18px]" strokeWidth={2} />
      </div>
    </div>
  );
}

function ButtonGhost1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[73.21px] py-[2.75px] size-[24px] top-[2px]" data-name="ButtonGhost">
      <Paragraph10 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[28px] left-[24px] rounded-[6px] top-[246px] w-[97.211px]" data-name="Link">
      <ButtonGhost />
      <ButtonGhost1 />
    </div>
  );
}

function ImageCestovniPojisteniLetadlo() {
  return (
    <div className="absolute h-[345px] left-[73px] shadow-[0px_8px_56px_0px_rgba(0,0,0,0.35)] top-[-120px] w-[230px]" data-name="Image (Cestovní pojištění letadlo)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCestovniPojisteniLetadlo} />
    </div>
  );
}

function BentoCell1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[300px] left-[479px] rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] top-0 w-[282px]" data-name="BentoCell1">
      <HeadingContainer2 />
      <Link1 />
      <ImageCestovniPojisteniLetadlo />
    </div>
  );
}

function BentoRow() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[761px]" data-name="BentoRow">
      <BentoCell />
      <BentoCell1 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[118.781px] relative shrink-0 w-[232px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.6px] left-0 not-italic text-[36px] text-white top-0 w-[219px]">Pojištění pro firmy a OSVČ</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[118.781px] items-start justify-center left-0 top-0 w-[232px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function HeadingContainer3() {
  return (
    <div className="absolute h-[118.781px] left-[24px] top-[119.22px] w-[232px]" data-name="HeadingContainer3">
      <Container18 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#00a878] text-[16px] text-center top-[-1px] whitespace-nowrap">Spočítat</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[2px] w-[65.211px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[18.5px] relative shrink-0 w-[24px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <ArrowRight className="text-[#00a878] size-[18px]" strokeWidth={2} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[73.21px] py-[2.75px] size-[24px] top-[2px]" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function ButtonGhost2() {
  return (
    <div className="absolute h-[28px] left-[24px] rounded-[6px] top-[246px] w-[97.211px]" data-name="ButtonGhost1">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[298px] left-0 top-0 w-[280px]" data-name="Container">
      <HeadingContainer3 />
      <ButtonGhost2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[298px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function BentoCell2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[300px] items-start left-0 p-px rounded-[12px] top-0 w-[282px]" data-name="BentoCell2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <Container16 />
    </div>
  );
}

function Container24() {
  return <div className="h-[171.797px] shrink-0 w-full" data-name="Container" />;
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[171.797px] items-start left-[24px] overflow-clip top-[-76.98px] w-[232px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[79.188px] relative shrink-0 w-[232px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.6px] left-0 not-italic text-[36px] text-white top-[0.19px] w-[196px]">Pojištění majetku</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[79.188px] items-start justify-center left-0 top-0 w-[232px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[48px] relative shrink-0 w-[232px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] w-[220px]">Stačí pár kliknutí a můžete v klidu spát!</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start justify-center left-0 top-[87.19px] w-[232px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#00a878] text-[16px] text-center top-[-1px] whitespace-nowrap">Spočítat</p>
      </div>
    </div>
  );
}

function ButtonGhost3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[2px] w-[65.211px]" data-name="ButtonGhost2">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[18.5px] relative shrink-0 w-[24px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <ArrowRight className="text-[#00a878] size-[18px]" strokeWidth={2} />
      </div>
    </div>
  );
}

function ButtonGhost4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[73.21px] py-[2.75px] size-[24px] top-[2px]" data-name="ButtonGhost2">
      <Paragraph17 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[28px] left-0 rounded-[6px] top-[143.19px] w-[97.211px]" data-name="Link">
      <ButtonGhost3 />
      <ButtonGhost4 />
    </div>
  );
}

function HeadingContainer4() {
  return (
    <div className="absolute h-[171.188px] left-[24px] top-[102.81px] w-[232px]" data-name="HeadingContainer4">
      <Container25 />
      <Container26 />
      <Link2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[298px] left-0 top-0 w-[280px]" data-name="Container">
      <Container23 />
      <HeadingContainer4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[298px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function BentoCell3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[300px] items-start left-0 p-px rounded-[12px] top-[324px] w-[282px]" data-name="BentoCell3">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <Container21 />
    </div>
  );
}

function Center() {
  return (
    <div className="absolute h-[624px] left-0 top-0 w-[282px]" data-name="Center">
      <BentoCell2 />
      <BentoCell3 />
    </div>
  );
}

function BottomLeft() {
  return (
    <div className="absolute h-[624px] left-0 top-0 w-[282px]" data-name="BottomLeft">
      <Center />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-[53.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25.6px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">Vybrat</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.594px] items-start justify-center left-[20px] top-[11.2px] w-[53.141px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#00a878] h-[48px] left-0 overflow-clip rounded-[12px] top-[119.19px] w-[93.141px]" data-name="Link">
      <Container29 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[79.188px] relative shrink-0 w-[225px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.6px] left-0 not-italic text-[36px] text-white top-[0.19px] w-[187px]">Životní pojištění</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[79.188px] items-start justify-center left-0 top-0 w-[225px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[225px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Životko, které dává smysl</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[87.19px] w-[225px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function HeadingContainer5() {
  return (
    <div className="absolute h-[167.188px] left-[24px] top-[106.81px] w-[225px]" data-name="HeadingContainer5">
      <Link3 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[282px] relative shrink-0 w-[185px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[114.89%] left-[-17.57%] max-w-none top-0 w-[116.76%]" src={imgImage} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[282px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[282px] items-start left-[257px] overflow-clip top-[-8px] w-[172px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[298px] left-0 top-0 w-[453px]" data-name="Container">
      <HeadingContainer5 />
      <Container32 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[298px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
    </div>
  );
}

function BentoCell4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[300px] items-start left-0 p-px rounded-[12px] top-0 w-[455px]" data-name="BentoCell4">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <Container27 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[79.188px] relative shrink-0 w-[165.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.6px] left-0 not-italic text-[36px] text-white top-0 w-[159px]">Pojištění mazlíčků</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[79.188px] items-start justify-center left-0 top-0 w-[165.5px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function HeadingContainer6() {
  return (
    <div className="absolute h-[79.188px] left-[24px] top-[15.91px] w-[165.5px]" data-name="HeadingContainer6">
      <Container36 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[143px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-[143px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[143px] items-start left-[24px] overflow-clip top-[103.09px] w-[165.5px]" data-name="Container">
      <div className="h-[153px] relative shrink-0 w-[166px]" data-name="ChatGPT Image Mar 27, 2026, 09_13_29 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.75%] left-0 max-w-none top-[-29.62%] w-full" src={imgChatGptImageMar272026091329Am1} />
        </div>
      </div>
      <Container38 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#00a878] text-[16px] text-center top-[-1px] whitespace-nowrap">Spočítat</p>
      </div>
    </div>
  );
}

function ButtonGhost5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[2px] w-[65.211px]" data-name="ButtonGhost3">
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[18.5px] relative shrink-0 w-[24px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <ArrowRight className="text-[#00a878] size-[18px]" strokeWidth={2} />
      </div>
    </div>
  );
}

function ButtonGhost6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[73.21px] py-[2.75px] size-[24px] top-[2px]" data-name="ButtonGhost3">
      <Paragraph23 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[28px] left-[24px] rounded-[6px] top-[254.09px] w-[97.211px]" data-name="Link">
      <ButtonGhost5 />
      <ButtonGhost6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[298px] left-0 top-0 w-[213.5px]" data-name="Container">
      <HeadingContainer6 />
      <Container37 />
      <Link4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[298px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function BentoCell5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[300px] items-start left-0 p-px rounded-[12px] top-0 w-[215.5px]" data-name="BentoCell5">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <Container34 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[108.891px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[108.891px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[108.891px] items-start left-[24px] overflow-clip top-[24px] w-[165.5px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[66px] relative shrink-0 w-[165.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[33px] left-0 not-italic text-[30px] text-white top-[0.5px] w-[162px]">Pojištění pro cizince</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[66px] items-start justify-center left-0 top-0 w-[165.5px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function HeadingContainer7() {
  return (
    <div className="absolute h-[66px] left-0 top-0 w-[165.5px]" data-name="HeadingContainer7">
      <Container42 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[33px] not-italic text-[#00a878] text-[16px] text-center top-[-1px] whitespace-nowrap">Spočítat</p>
      </div>
    </div>
  );
}

function ButtonGhost7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-[2px] w-[65.211px]" data-name="ButtonGhost4">
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[18.5px] relative shrink-0 w-[24px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <ArrowRight className="text-[#00a878] size-[18px]" strokeWidth={2} />
      </div>
    </div>
  );
}

function ButtonGhost8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[73.21px] py-[2.75px] size-[24px] top-[2px]" data-name="ButtonGhost4">
      <Paragraph26 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[28px] left-0 rounded-[6px] top-[70px] w-[97.211px]" data-name="Link">
      <ButtonGhost7 />
      <ButtonGhost8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[98px] left-[24px] top-[176px] w-[165.5px]" data-name="Frame13">
      <HeadingContainer7 />
      <Link5 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[298px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Frame1 />
    </div>
  );
}

function BentoCell6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[300px] items-start left-[239.5px] p-px rounded-[12px] top-0 w-[215.5px]" data-name="BentoCell6">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <Container39 />
    </div>
  );
}

function BottomRight1() {
  return (
    <div className="absolute h-[300px] left-0 top-[324px] w-[455px]" data-name="BottomRight1">
      <BentoCell5 />
      <BentoCell6 />
    </div>
  );
}

function BottomRight() {
  return (
    <div className="absolute h-[624px] left-[306px] top-0 w-[455px]" data-name="BottomRight">
      <BentoCell4 />
      <BottomRight1 />
    </div>
  );
}

function BentoRow1() {
  return (
    <div className="absolute h-[624px] left-0 top-[324px] w-[761px]" data-name="BentoRow1">
      <BottomLeft />
      <BottomRight />
      <div className="absolute h-[165px] left-[2px] top-[270px] w-[266px]" data-name="ChatGPT Image Mar 27, 2026, 09_04_18 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[254.42%] left-[-0.05%] max-w-none top-[-60.18%] w-[105.31%]" src={imgChatGptImageMar272026090418Am1} />
        </div>
      </div>
      <div className="absolute h-[219px] left-[15px] top-[-57px] w-[285px]" data-name="ChatGPT Image Mar 27, 2026, 08_22_05 AM.png 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[194.89%] left-0 max-w-none top-[-45.55%] w-full" src={imgChatGptImageMar272026082205AmPng2} />
        </div>
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="absolute h-[948px] left-[439px] top-0 w-[761px]" data-name="BentoGrid">
      <BentoRow />
      <BentoRow1 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="absolute h-[948px] left-[42px] top-[200px] w-[1200px]" data-name="ContentContainer">
      <TextContainre />
      <BentoGrid />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1148px] left-[247px] top-0 w-[1323px]" data-name="Container">
      <ContentContainer />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#2D1B4E]" data-name="HeroSection">
      <div className="block lg:hidden w-full px-4 pb-10 pt-6">
        <HeroSectionMobile />
      </div>
      <div className="relative hidden min-h-[600px] w-full overflow-x-auto lg:block" data-name="HeroSectionDesktop">
        <div className="relative min-w-[1323px]">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}