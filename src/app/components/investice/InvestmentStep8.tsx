import { useNavigate } from "react-router";
import NavbarHeaderShared from "../NavbarHeader";
import StepIndicator from "./StepIndicator";
import svgPaths from "../../../imports/svg-7ladxo5ouf";
import { TrendingUp, Target, TrendingDown, Wallet, ArrowLeft, Rocket, Calendar, DollarSign, Umbrella } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[48px] text-[#00A878] text-center tracking-[-1.5px] w-full" style={{ fontWeight: 700 }}>
        <p className="leading-none">Investiční kalkulačka</p>
      </div>
    </div>
  );
}

// Chart data for 10 years
const chartData = [
  { year: 'Dnes', optimistic: 100000, expected: 100000, pessimistic: 100000, deposit: 100000 },
  { year: '2 roky', optimistic: 280000, expected: 250000, pessimistic: 230000, deposit: 220000 },
  { year: '5 let', optimistic: 580000, expected: 500000, pessimistic: 450000, deposit: 400000 },
  { year: '8 let', optimistic: 1020000, expected: 850000, pessimistic: 650000, deposit: 580000 },
  { year: '10 let', optimistic: 1450000, expected: 1120000, pessimistic: 820000, deposit: 700000 },
];

export default function InvestmentStep8() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/investice/krok-7");
  };

  const handleStartInvesting = () => {
    navigate("/investice/krok-9");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        <NavbarHeaderShared activeTab="investice" />
        <HeadingContainer />
        
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[80px] pt-[24px] px-[24px] relative shrink-0 w-full">
          <StepIndicator currentStep={8} totalSteps={9} />
          
          {/* Section Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[800px]">
            <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px]" style={{ fontWeight: 700 }}>
              <p className="leading-[1.6]">Nastavení investice</p>
            </div>
          </div>
          
          {/* Results Card */}
          <div className="bg-white relative rounded-[16px] shrink-0 w-full max-w-[800px]">
            <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip p-[40px] relative rounded-[inherit] w-full">
              
              {/* Summary Header */}
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full justify-between">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                  <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Shrnutí</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f2578] text-[18px] text-center whitespace-nowrap" style={{ fontWeight: 700 }}>
                    <p className="leading-[1.6]">Slavia Komplex</p>
                  </div>
                </div>
              </div>
              
              {/* Investment Details */}
              <div className="content-stretch flex gap-[16px] items-center justify-start relative shrink-0 w-full flex-wrap">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <Umbrella className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Komplexní péče
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <Calendar className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    3 měsíce
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <Calendar className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Datum
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <DollarSign className="size-[18px] text-[#3f2578]" strokeWidth={2} />
                  <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3f2578] text-[14px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    5 104 Kč
                  </p>
                </div>
              </div>
              
              {/* Scenario Cards */}
              <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full">
                {/* Optimistic Card */}
                <div className="bg-[#f0fdf4] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
                  <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-center p-[20px] relative w-full">
                      <TrendingUp className="size-[24px] text-[#15803d]" strokeWidth={2} />
                      <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#15803d] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                        Optimistický
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#15803d] text-[20px] text-center whitespace-nowrap" style={{ fontWeight: 800 }}>
                        1 450 000 Kč
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#15803d] text-[11px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                        ~10,2 % p.a.
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#bbf7d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
                
                {/* Expected Card (Featured) */}
                <div className="bg-[#f8f6fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
                  <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-center px-[20px] py-[24px] relative w-full">
                      <div className="bg-[rgba(124,58,237,0.09)] content-stretch flex items-center overflow-clip px-[8px] py-[3px] relative rounded-[20px] shrink-0">
                        <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7c3aed] text-[10px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                          Nejpravděpodobnější
                        </p>
                      </div>
                      <Target className="size-[24px] text-[#7c3aed]" strokeWidth={2} />
                      <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7c3aed] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                        Očekávaný
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7c3aed] text-[24px] text-center whitespace-nowrap" style={{ fontWeight: 800 }}>
                        1 120 000 Kč
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7c3aed] text-[11px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                        ~7,2 % p.a.
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-[#7c3aed] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_4px_0px_rgba(124,58,237,0.08),0px_4px_16px_0px_rgba(124,58,237,0.19)]" />
                </div>
                
                {/* Pessimistic Card */}
                <div className="bg-[#fef2f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
                  <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-center p-[20px] relative w-full">
                      <TrendingDown className="size-[24px] text-[#dc2626]" strokeWidth={2} />
                      <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                        Pesimistický
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#dc2626] text-[20px] text-center whitespace-nowrap" style={{ fontWeight: 800 }}>
                        820 000 Kč
                      </p>
                      <p className="font-['Mona_Sans',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#dc2626] text-[11px] text-center whitespace-nowrap" style={{ fontWeight: 600 }}>
                        ~2,8 % p.a.
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>
              
              {/* Deposit Info */}
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 w-full">
                <Wallet className="size-[16px] text-[#94a3b8]" strokeWidth={2} />
                <p className="font-['Mona_Sans',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#94a3b8] text-[13px]" style={{ fontWeight: 500 }}>
                  Celkový vklad: 700 000 Kč  (100 000 Kč + 60 000 Kč/rok × 10 let)
                </p>
              </div>
              
              {/* Chart */}
              <div className="bg-white h-[380px] relative rounded-[16px] shrink-0 w-full">
                <div className="overflow-clip relative rounded-[inherit] size-full p-[20px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorOptimistic" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22C55E" stopOpacity={0.75}/>
                          <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.75}/>
                          <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPessimistic" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#EF4444" stopOpacity={0.75}/>
                          <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="0" stroke="#f1f5f9" vertical={false} />
                      <XAxis 
                        dataKey="year" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Mona_Sans' }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Mona_Sans' }}
                        tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e9f0',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontFamily: 'Mona_Sans'
                        }}
                        formatter={(value) => `${Number(value).toLocaleString('cs-CZ')} Kč`}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="optimistic" 
                        stroke="#22C55E" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorOptimistic)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="expected" 
                        stroke="#7C3AED" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorExpected)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="pessimistic" 
                        stroke="#EF4444" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorPessimistic)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
              </div>
              
              {/* Chart Legend */}
              <div className="content-stretch flex gap-[24px] items-start justify-center overflow-clip relative shrink-0 w-full">
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
                  <div className="bg-[#22c55e] h-[3px] rounded-[2px] shrink-0 w-[20px]" />
                  <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Optimistický
                  </p>
                </div>
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
                  <div className="bg-[#7c3aed] h-[3px] rounded-[2px] shrink-0 w-[20px]" />
                  <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Očekávaný
                  </p>
                </div>
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
                  <div className="bg-[#ef4444] h-[3px] rounded-[2px] shrink-0 w-[20px]" />
                  <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Pesimistický
                  </p>
                </div>
                <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
                  <div className="bg-[#cbd5e1] h-px shrink-0 w-[20px]" />
                  <p className="font-['Mona_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    Vklad
                  </p>
                </div>
              </div>
              
              {/* Disclaimer */}
              <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#94a3b8] text-[11px] text-center w-full" style={{ fontWeight: 400 }}>
                Upozornění: Zobrazené hodnoty jsou pouze odhadem na základě historických dat. Skutečné výnosy se mohou lišit. Investice na kapitálových trzích jsou spojeny s rizikem.
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.05)]" />
          </div>
          
          {/* Action Buttons */}
          <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full max-w-[800px]">
            {/* Back Button - Navigate to step 7 */}
            <button
              onClick={() => navigate("/investice/krok-7")}
              className="bg-white h-[48px] relative rounded-[12px] shrink-0 cursor-pointer px-[20px]"
            >
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                  Zpět
                </p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </button>
            
            {/* Edit Parameters Button */}
            <button
              onClick={handleBack}
              className="bg-white h-[48px] relative rounded-[12px] shrink-0 flex-1 cursor-pointer"
            >
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <ArrowLeft className="size-[20px] text-[#3f2578]" strokeWidth={2} />
                <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#3f2578] text-[16px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                  Upravit parametry
                </p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2e9f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </button>
            
            {/* Start Investing Button */}
            <button
              onClick={handleStartInvesting}
              className="h-[48px] relative rounded-[12px] shrink-0 flex-1 cursor-pointer content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px]"
              style={{ backgroundImage: "linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}
            >
              <p className="font-['Mona_Sans',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>
                Začít investovat
              </p>
              <Rocket className="size-[20px] text-white" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}