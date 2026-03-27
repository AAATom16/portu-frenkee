import { Link as RouterLink } from "react-router";
import { ArrowRight } from "lucide-react";

const linkClass =
  "flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-['Inter',sans-serif] text-[15px] font-medium text-white no-underline backdrop-blur-sm hover:bg-white/15";

export default function HeroSectionMobile() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-['Inter',sans-serif] text-[32px] font-bold leading-tight tracking-tight text-white">
          Finance jednoduše
        </h1>
        <p className="font-['Inter',sans-serif] text-[16px] leading-snug text-white/80">
          Bez chytáků a otravných schůzek
        </p>
      </div>
      <p className="text-center font-['Inter',sans-serif] text-[14px] text-white/70">
        Vyberte produkt a sjednejte ho online během pár minut.
      </p>
      <nav className="flex flex-col gap-2" aria-label="Rychlé produkty">
        <RouterLink to="/auto/krok-1" className={linkClass}>
          <span>Pojištění aut</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
        <RouterLink to="/cestovani/krok-1" className={linkClass}>
          <span>Cestovní pojištění</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
        <RouterLink to="/zivotni/krok-1" className={linkClass}>
          <span>Životní pojištění</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
        <RouterLink to="/majetek/krok-1" className={linkClass}>
          <span>Pojištění majetku</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
        <RouterLink to="/investice/krok-1" className={linkClass}>
          <span>Investice</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
        <RouterLink to="/mazlicici/krok-1" className={linkClass}>
          <span>Mazlíčci</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
        <RouterLink to="/cizinci/krok-1" className={linkClass}>
          <span>Cizinci</span>
          <ArrowRight className="size-5 shrink-0 text-[#00a878]" strokeWidth={2} />
        </RouterLink>
      </nav>
    </div>
  );
}
