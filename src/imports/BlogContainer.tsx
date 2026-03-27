import imgAssetContainer from "figma:asset/62705b6b2087101b64a78090a500eebd723c1352.png";
import imgAssetContainer1 from "figma:asset/f70435bcf7991d4ed5926ba0649eca60a1bc3029.png";
import imgAssetContainer2 from "figma:asset/81122c4bb6fb1fb421142996465f3c07ab9564c4.png";
import imgAssetContainer3 from "figma:asset/5434394919a8c1467f3fc63592fb9a0c4070ce1e.png";
import imgAssetContainer4 from "figma:asset/b097dfb25881eed12a02e58e6f53d99c9a9c8eca.png";

function AssetContainer() {
  return (
    <div className="h-[484px] relative rounded-[12px] shrink-0 w-full" data-name="asset_container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgAssetContainer} />
      </div>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3f2578] w-full" data-name="heading_container">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.6]">Cestovní pojištění do zahraničí online: Srovnání 2026</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.6]">6/21/19</p>
      </div>
    </div>
  );
}

function BlogItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-center min-h-px min-w-px relative self-stretch" data-name="blog_item">
      <AssetContainer />
      <HeadingContainer />
    </div>
  );
}

function AssetContainer1() {
  return (
    <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[120px]" data-name="asset_container">
      <div aria-hidden="true" className="absolute inset-0 rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgAssetContainer1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 rounded-[12px]" />
    </div>
  );
}

function HeadingContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#3f2578]" data-name="heading_container">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.6]">Co je pojištění odpovědnosti a co všechno nabízí</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.6]">7/18/17</p>
      </div>
    </div>
  );
}

function BlogItem1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="blog_item">
      <AssetContainer1 />
      <HeadingContainer1 />
    </div>
  );
}

function AssetContainer2() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[120px]" data-name="asset_container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgAssetContainer2} />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeadingContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#3f2578]" data-name="heading_container">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.6]">Jak danit hypotéku?</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.6]">1/15/12</p>
      </div>
    </div>
  );
}

function BlogItem2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="blog_item">
      <AssetContainer2 />
      <HeadingContainer2 />
    </div>
  );
}

function AssetContainer3() {
  return (
    <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[120px]" data-name="asset_container">
      <div aria-hidden="true" className="absolute inset-0 rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgAssetContainer3} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 rounded-[12px]" />
    </div>
  );
}

function HeadingContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#3f2578]" data-name="heading_container">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.6]">Srovnáni pojištění pro cizince v roce 2026</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.6]">10/28/12</p>
      </div>
    </div>
  );
}

function BlogItem3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="blog_item">
      <AssetContainer3 />
      <HeadingContainer3 />
    </div>
  );
}

function AssetContainer4() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[120px]" data-name="asset_container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgAssetContainer4} />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function HeadingContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center leading-[0] min-h-px min-w-px not-italic relative text-[#3f2578]" data-name="heading_container">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[1.6]">Jak funguje pojistka na blbost?</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.6]">5/7/16</p>
      </div>
    </div>
  );
}

function BlogItem4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="blog_item">
      <AssetContainer4 />
      <HeadingContainer4 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[546px] items-center min-h-px min-w-px relative" data-name="column">
      <BlogItem1 />
      <BlogItem2 />
      <BlogItem3 />
      <BlogItem4 />
    </div>
  );
}

export default function BlogContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative size-full" data-name="blog_container">
      <BlogItem />
      <Column />
    </div>
  );
}