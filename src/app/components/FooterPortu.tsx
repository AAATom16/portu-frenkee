import svgPaths from "../../imports/svg-c69enyrdrn";

export function FooterPortu() {
  return (
    <div className="content-stretch relative flex w-full flex-col items-center overflow-clip bg-[#2D1B4E] pt-10 sm:pt-12">
      <div className="max-w-[1200px] w-full px-4 sm:px-6 md:px-[24px] py-10 md:py-[64px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 items-start mb-10 md:mb-[48px]">
          {/* Left Column - Brand */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col items-start leading-none">
              <span className="font-['Inter',sans-serif] text-[36px] text-[#00A878]" style={{ fontWeight: 800 }}>
                Portu
              </span>
              <span className="font-['Inter',sans-serif] text-[14px] text-white/60" style={{ fontWeight: 400, letterSpacing: "0.02em" }}>
                powered by Frenkee
              </span>
            </div>
            <p className="font-['Inter',sans-serif] leading-[1.7] text-white/70 text-[16px]">
              Provozovatel portálu Frenkee je společnost InSureMe.com s.r.o. zapsaná v registru ČNB jako Samostatný zprostředkovatel dle zákona o distribuci pojištění a zajištění a Samostatný zprostředkovatel banky dle zákona o spotřebitelském úvěru
            </p>
          </div>

          {/* Column 2 - Zákaznický servis */}
          <div className="flex flex-col gap-[14px]">
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Zákaznický servis</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Obchodní podmínky</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Spolupracující instituce</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Licence a certifikace</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Ochrana osobních údajů</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Reklamační řád</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Zpětná vazba</p>
            <p className="font-['Inter',sans-serif] leading-[1.9] text-[#1A1A1A] text-[14px] whitespace-normal md:whitespace-nowrap pb-[2px] w-fit border-b-2 border-transparent hover:border-[#00A878] hover:text-[#00A878] transition-colors cursor-pointer text-white">Whistleblowing</p>
          </div>

          {/* Right Column - Contact */}
          <div className="flex flex-col gap-[14px]">
            <p className="font-['Inter',sans-serif] font-bold leading-[1.6] text-white text-[15px] whitespace-nowrap">Buďte v kontaktu</p>
            
            {/* Contact Card */}
            <div className="relative rounded-[12px] w-full" style={{ backgroundImage: "linear-gradient(-73.762deg, #00A878 1.3604%, #007a57 99.929%)" }}>
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="flex flex-col gap-[16px] p-[20px]">
                  {/* Phone 1 */}
                  <div className="flex gap-[10px] items-center">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath="url(#clip0_phone)" id="lucide/phone">
                          <path d={svgPaths.p3302df00} id="Vector" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_phone">
                            <rect fill="white" height="18" width="18" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px] text-white whitespace-nowrap">+420 226 633 522</p>
                  </div>

                  {/* Phone 2 */}
                  <div className="flex gap-[10px] items-center">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath="url(#clip0_phone2)" id="lucide/phone">
                          <path d={svgPaths.p3302df00} id="Vector" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_phone2">
                            <rect fill="white" height="18" width="18" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px] text-white whitespace-nowrap">+420 790 421 030</p>
                  </div>

                  {/* Hours */}
                  <p className="font-['Inter',sans-serif] leading-[1.5] text-[#d9d3e4] text-[12px] whitespace-nowrap">Po – Pá (09:00 – 17:00)</p>

                  {/* Email */}
                  <div className="flex gap-[10px] items-center">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="lucide/mail">
                          <path d={svgPaths.p97bb7c0} id="Vector" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p1b122e80} id="Vector_2" stroke="#00A878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[14px] text-white whitespace-nowrap">info@frenkee.cz</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-[12px] items-start pt-[4px]">
                    {/* Instagram */}
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_instagram)" id="lucide/instagram">
                          <path d={svgPaths.p4b98700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p2815c980} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_instagram">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    {/* LinkedIn */}
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="lucide/linkedin">
                          <path d={svgPaths.p1bcdee00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p25677470} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>

                    {/* Facebook */}
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="lucide/facebook">
                          <path d={svgPaths.p30c8d680} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-[48px]">
          <div className="relative rounded-[16px] w-full" style={{ backgroundImage: "linear-gradient(-84.8207deg, #00A878 0%, #007a57 99.198%)" }}>
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="flex w-full flex-col gap-6 px-6 py-8 sm:px-8 sm:py-9 lg:flex-row lg:items-center lg:justify-between lg:px-[48px] lg:py-[36px]">
                {/* Newsletter Text */}
                <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
                  <p className="font-['Inter',sans-serif] leading-[1.3] text-[20px] sm:text-[22px] text-white">Nenechte si ujít novinky a tipy</p>
                  <p className="font-['Inter',sans-serif] leading-[1.6] text-[#d9d3e4] text-[14px]">Přihlaste se k odběru a dostávejte praktické rady o pojištění přímo do schránky.</p>
                </div>

                {/* Newsletter Form */}
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
                  <div className="bg-[rgba(0,0,0,0)] h-[48px] relative rounded-[10px] w-full sm:min-w-[200px] sm:max-w-[260px] lg:w-[260px]">
                    <div className="flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
                      <p className="font-['Inter',sans-serif] leading-[1.6] text-[#d9d3e4] text-[14px] whitespace-nowrap">váš@email.cz</p>
                    </div>
                    <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                  <div className="bg-white flex h-[48px] items-center justify-center overflow-clip px-[28px] rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.08)]">
                    <p className="font-['Inter',sans-serif] leading-[1.6] text-[#00A878] text-[14px] whitespace-nowrap">Odebírat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-[32px]">
          <div className="bg-white/20 h-px w-full" />
        </div>

        {/* Bottom Row - Copyright */}
        <div className="flex items-center justify-center">
          <p className="font-['Inter',sans-serif] leading-[1.9] text-white/70 text-[14px] text-center px-2">© 2026 Frenkee.cz All rights reserved</p>
        </div>
      </div>
    </div>
  );
}