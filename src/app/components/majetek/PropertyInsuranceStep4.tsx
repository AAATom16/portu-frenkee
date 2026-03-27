import { useState } from "react";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import Frame from "../../../imports/Frame25-43-1179";
import UpravidNabidkuModalOverlay from "./UpravidNabidkuModalOverlay";

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="heading_container">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Online pojištění majetku</p>
      </div>
    </div>
  );
}

export default function PropertyInsuranceStep4() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full min-h-screen">
      <NavbarHeaderShared activeTab="majetek" />
      <HeadingContainer />
      <div className="w-full mt-[24px]">
        <StepIndicator currentStep={4} totalSteps={7} />
      </div>
      <div className="w-full pb-[80px]">
        <Frame onEditOffer={() => setIsModalOpen(true)} />
      </div>

      {isModalOpen && (
        <UpravidNabidkuModalOverlay onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}