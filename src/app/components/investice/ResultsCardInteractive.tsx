import svgPaths from "../../../imports/svg-ytmktftqhb";

interface ResultsCardInteractiveProps {
  onBack: () => void;
  onStartInvesting: () => void;
  oneTimeInvestment?: number;
  monthlyDeposit?: number;
  years?: number;
  riskLevel?: number;
}

function LucideTrendingUp() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M16 7H22V13" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13253c0} stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Optimistic({ amount, percentage }: { amount: string; percentage: string }) {
  return (
    <div className="bg-[#f0fdf4] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[20px] relative w-full">
          <LucideTrendingUp />
          <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap">Optimistický</p>
          <p className="font-['Inter',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[#15803d] text-[20px] text-center whitespace-nowrap">{amount}</p>
          <p className="font-['Inter',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#15803d] text-[11px] text-center whitespace-nowrap">{percentage}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bbf7d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function FeaturedBadge() {
  return (
    <div className="bg-[rgba(0,168,120,0.09)] content-stretch flex items-center overflow-clip px-[8px] py-[3px] relative rounded-[20px] shrink-0">
      <p className="font-['Inter',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00A878] text-[10px] whitespace-nowrap" style={{ fontWeight: 700 }}>Nejpravděpodobnější</p>
    </div>
  );
}

function LucideTarget() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.pace200} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} stroke="var(--stroke-0, #00A878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Expected({ amount, percentage }: { amount: string; percentage: string }) {
  return (
    <div className="bg-[#f0faf7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center px-[20px] py-[24px] relative w-full">
          <FeaturedBadge />
          <LucideTarget />
          <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00A878] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>Očekávaný</p>
          <p className="font-['Inter',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00A878] text-[24px] text-center whitespace-nowrap" style={{ fontWeight: 800 }}>{amount}</p>
          <p className="font-['Inter',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00A878] text-[11px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>{percentage}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#00A878] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_4px_0px_rgba(0,168,120,0.08),0px_4px_16px_0px_rgba(0,168,120,0.19)]" />
    </div>
  );
}

function LucideTrendingDown() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M16 17H22V11" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 17L13.5 8.5L8.5 13.5L2 7" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Pessimistic({ amount, percentage }: { amount: string; percentage: string }) {
  return (
    <div className="bg-[#fef2f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[20px] relative w-full">
          <LucideTrendingDown />
          <p className="font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">Pesimistický</p>
          <p className="font-['Inter',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[#dc2626] text-[20px] text-center whitespace-nowrap">{amount}</p>
          <p className="font-['Inter',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#dc2626] text-[11px] text-center whitespace-nowrap">{percentage}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ScenarioCards({ optimistic, expected, pessimistic }: { 
  optimistic: { amount: string; percentage: string };
  expected: { amount: string; percentage: string };
  pessimistic: { amount: string; percentage: string };
}) {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full">
      <Optimistic amount={optimistic.amount} percentage={optimistic.percentage} />
      <Expected amount={expected.amount} percentage={expected.percentage} />
      <Pessimistic amount={pessimistic.amount} percentage={pessimistic.percentage} />
    </div>
  );
}

function LucideWallet() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p2949e900} stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22e64900} stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DepositInfo({ totalDeposit, oneTime, monthly, years }: { totalDeposit: string; oneTime: string; monthly: string; years: number }) {
  const yearText = years === 1 ? 'rok' : years < 5 ? 'roky' : 'let';
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 w-full">
      <LucideWallet />
      <p className="font-['Inter',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#94a3b8] text-[13px] whitespace-pre">{`Celkový vklad: ${totalDeposit}  (${oneTime} + ${monthly}/rok × ${years} ${yearText})`}</p>
    </div>
  );
}

function Gl({ top }: { top: number }) {
  return <div className="absolute bg-[#f1f5f9] h-px left-[55px] w-[650px]" style={{ top: `${top}px` }} />;
}

function XAxis() {
  return (
    <div className="absolute content-stretch flex font-['Inter',sans-serif] items-start justify-between leading-[normal] left-[55px] not-italic overflow-clip text-[#94a3b8] text-[11px] top-[345px] w-[650px] whitespace-nowrap">
      <p className="relative shrink-0">Dnes</p>
      <p className="relative shrink-0">2 roky</p>
      <p className="relative shrink-0">5 let</p>
      <p className="relative shrink-0">8 let</p>
      <p className="relative shrink-0">10 let</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[57.5px] top-[50.5px]">
      <div className="absolute h-[250.5px] left-[57.5px] top-[52px] w-[646px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 646 250.5">
          <path d={svgPaths.p23673870} fill="url(#paint0_linear_160_498)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_160_498" x1="323" x2="323" y1="45.5" y2="155.5">
              <stop stopColor="#22C55E" stopOpacity="0.75" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[252px] left-[57.5px] top-[50.5px] w-[646px]">
        <div className="absolute inset-[-0.59%_-0.21%_-0.79%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 647.51 255.476">
            <path d={svgPaths.p39f8a00} stroke="var(--stroke-0, #22C55E)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[57.5px] top-[121px]">
      <div className="absolute h-[181.5px] left-[57.5px] top-[121px] w-[646px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 646 181.5">
          <path d={svgPaths.pc53e580} fill="url(#paint0_linear_160_512)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_160_512" x1="323" x2="323" y1="-23.5" y2="159">
              <stop stopColor="#00A878" stopOpacity="0.75" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[181.228px] left-[57.5px] top-[121.5px] w-[646px]">
        <div className="absolute inset-[-0.95%_-0.16%_-1.1%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 647.087 184.941">
            <path d={svgPaths.p1ba16c8} stroke="var(--stroke-0, #00A878)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[57.5px] top-[211px]">
      <div className="absolute h-[91.5px] left-[57.5px] top-[211px] w-[646px]">
        <div className="absolute inset-[-2.07%_0_-2.19%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 646.645 95.3932">
            <path d={svgPaths.p2db35300} stroke="var(--stroke-0, #EF4444)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[91.5px] left-[57.5px] top-[211px] w-[646px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 646 91.5">
          <path d={svgPaths.p1c47c700} fill="url(#paint0_linear_160_516)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_160_516" x1="323" x2="323" y1="0" y2="91.5">
              <stop stopColor="#EF4444" stopOpacity="0.75" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChartArea() {
  return (
    <div className="bg-white h-[380px] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Gl top={30} />
        <Gl top={98} />
        <Gl top={166} />
        <Gl top={234} />
        <Gl top={302} />
        <p className="absolute font-['Inter',sans-serif] leading-[normal] left-[8px] not-italic text-[#94a3b8] text-[11px] top-[23px] whitespace-nowrap">1,5M</p>
        <p className="absolute font-['Inter',sans-serif] leading-[normal] left-[8px] not-italic text-[#94a3b8] text-[11px] top-[91px] whitespace-nowrap">1,0M</p>
        <p className="absolute font-['Inter',sans-serif] leading-[normal] left-[8px] not-italic text-[#94a3b8] text-[11px] top-[159px] whitespace-nowrap">0,5M</p>
        <p className="absolute font-['Inter',sans-serif] leading-[normal] left-[8px] not-italic text-[#94a3b8] text-[11px] top-[227px] whitespace-nowrap">0</p>
        <XAxis />
        <Group2 />
        <Group1 />
        <Group />
        <div className="absolute left-[699px] size-[8px] top-[47px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #22C55E)" r="4" />
          </svg>
        </div>
        <div className="absolute left-[699px] size-[8px] top-[118px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #00A878)" r="4" />
          </svg>
        </div>
        <div className="absolute left-[699px] size-[8px] top-[207px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #EF4444)" r="4" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Cl1Line() {
  return <div className="bg-[#22c55e] h-[3px] rounded-[2px] shrink-0 w-[20px]" />;
}

function Cl() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
      <Cl1Line />
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Optimistický</p>
    </div>
  );
}

function Cl2Line() {
  return <div className="bg-[#00A878] h-[3px] rounded-[2px] shrink-0 w-[20px]" />;
}

function Cl1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
      <Cl2Line />
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Očekávaný</p>
    </div>
  );
}

function Cl3Line() {
  return <div className="bg-[#ef4444] h-[3px] rounded-[2px] shrink-0 w-[20px]" />;
}

function Cl2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
      <Cl3Line />
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Pesimistický</p>
    </div>
  );
}

function Cl4Line() {
  return <div className="bg-[#cbd5e1] h-px shrink-0 w-[20px]" />;
}

function Cl3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
      <Cl4Line />
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Vklad</p>
    </div>
  );
}

function ChartLegend() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <Cl />
      <Cl1 />
      <Cl2 />
      <Cl3 />
    </div>
  );
}

function LucideArrowLeft() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p33f6b680} stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.8333 10H4.16667" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <LucideArrowLeft />
        <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1A1A1A] text-[16px] whitespace-nowrap" style={{ fontWeight: 700 }}>Upravit parametry</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </button>
  );
}

function LucideRocket() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p30d40500} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d659980} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p82e2000} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p15f6b600} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CtaButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex flex-[1_0_0] gap-[8px] h-[48px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity bg-[#00A878] shadow-[0px_4px_9.2px_0px_rgba(0,168,120,0.4)]"
    >
      <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>Začít investovat</p>
      <LucideRocket />
    </button>
  );
}

function ButtonRow({ onBack, onStartInvesting }: { onBack: () => void; onStartInvesting: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <BackButton onClick={onBack} />
      <CtaButton onClick={onStartInvesting} />
    </div>
  );
}

// Helper function to calculate returns
function calculateReturns(totalDeposit: number, years: number, riskLevel: number) {
  // Base return rates based on risk level (simplified)
  const expectedRate = 0.05 + (riskLevel * 0.005); // 5% to 10%
  const optimisticRate = expectedRate + 0.03;
  const pessimisticRate = expectedRate - 0.02;

  const expected = Math.round(totalDeposit * Math.pow(1 + expectedRate, years));
  const optimistic = Math.round(totalDeposit * Math.pow(1 + optimisticRate, years));
  const pessimistic = Math.round(totalDeposit * Math.pow(1 + pessimisticRate, years));

  return { expected, optimistic, pessimistic, expectedRate, optimisticRate, pessimisticRate };
}

function formatCurrency(amount: number): string {
  return amount.toLocaleString('cs-CZ') + ' Kč';
}

function formatPercentage(rate: number): string {
  return '~' + (rate * 100).toFixed(1).replace('.', ',') + ' % p.a.';
}

export default function ResultsCardInteractive({ 
  onBack, 
  onStartInvesting,
  oneTimeInvestment = 100000,
  monthlyDeposit = 5000,
  years = 10,
  riskLevel = 7
}: ResultsCardInteractiveProps) {
  const totalDeposit = oneTimeInvestment + (monthlyDeposit * 12 * years);
  const { expected, optimistic, pessimistic, expectedRate, optimisticRate, pessimisticRate } = 
    calculateReturns(totalDeposit, years, riskLevel);

  return (
    <div className="bg-white relative rounded-[16px] w-full max-w-[800px]">
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <ScenarioCards 
          optimistic={{ amount: formatCurrency(optimistic), percentage: formatPercentage(optimisticRate) }}
          expected={{ amount: formatCurrency(expected), percentage: formatPercentage(expectedRate) }}
          pessimistic={{ amount: formatCurrency(pessimistic), percentage: formatPercentage(pessimisticRate) }}
        />
        <DepositInfo 
          totalDeposit={formatCurrency(totalDeposit)}
          oneTime={formatCurrency(oneTimeInvestment)}
          monthly={formatCurrency(monthlyDeposit * 12)}
          years={years}
        />
        <ChartArea />
        <ChartLegend />
        <p className="font-['Inter',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#94a3b8] text-[11px] text-center w-full">Upozornění: Zobrazené hodnoty jsou pouze odhadem na základě historických dat. Skutečné výnosy se mohou lišit. Investice na kapitálových trzích jsou spojeny s rizikem.</p>
        <ButtonRow onBack={onBack} onStartInvesting={onStartInvesting} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}