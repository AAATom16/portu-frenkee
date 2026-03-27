interface StepIndicatorProps {
  currentStep: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  totalSteps?: 3 | 8 | 9;
}

function Step({ isActive }: { isActive: boolean }) {
  return (
    <div 
      className={`h-[4px] rounded-[2px] shrink-0 w-[32px] ${isActive ? 'bg-[#00A878]' : 'bg-[#E5E5E5]'}`}
    />
  );
}

export default function StepIndicator({ currentStep, totalSteps = 3 }: StepIndicatorProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative w-full">
      <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <Step key={index} isActive={currentStep >= index + 1} />
        ))}
      </div>
      <p className="font-['Inter',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">
        Krok {currentStep} z {totalSteps}
      </p>
    </div>
  );
}
