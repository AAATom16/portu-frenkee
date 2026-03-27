interface StepIndicatorProps {
  currentStep: 1 | 2 | 3 | 4 | 5;
}

function Step({ isActive }: { isActive: boolean }) {
  return (
    <div 
      className={`h-[4px] rounded-[2px] shrink-0 w-[32px] ${isActive ? 'bg-[#00A878]' : 'bg-[#E5E5E5]'}`}
    />
  );
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative w-full">
      <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full">
        <Step isActive={currentStep >= 1} />
        <Step isActive={currentStep >= 2} />
        <Step isActive={currentStep >= 3} />
        <Step isActive={currentStep >= 4} />
        <Step isActive={currentStep >= 5} />
      </div>
      <p className="font-['Inter',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">
        Krok {currentStep} z 5
      </p>
    </div>
  );
}
