interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

export default function StepIndicator({ currentStep, totalSteps = 4 }: StepIndicatorProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0 w-full">
      <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-[4px] rounded-[2px] shrink-0 w-[32px] ${
              index < currentStep ? "bg-[#00A878]" : "bg-[#E5E5E5]"
            }`}
          />
        ))}
      </div>
      <p className="font-['Inter',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">
        Krok {currentStep} z {totalSteps}
      </p>
    </div>
  );
}
