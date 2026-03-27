export default function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full" data-name="Page Header">
      <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Step Indicator">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div 
            key={index}
            className={`${index < currentStep ? 'bg-[#00A878]' : 'bg-[#E5E5E5]'} h-[4px] rounded-[2px] shrink-0 w-[32px]`}
          />
        ))}
      </div>
      <p className="font-['Inter',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#666666] text-[12px] whitespace-nowrap">
        Krok {currentStep} z {totalSteps}
      </p>
    </div>
  );
}
