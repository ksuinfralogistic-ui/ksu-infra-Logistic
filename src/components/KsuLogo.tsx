import React from 'react';

interface KsuLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const KsuLogo: React.FC<KsuLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const dimensions = {
    sm: { width: 42, height: 42, textClass: 'text-sm' },
    md: { width: 54, height: 54, textClass: 'text-base' },
    lg: { width: 72, height: 72, textClass: 'text-xl' },
    xl: { width: 110, height: 110, textClass: 'text-2xl' },
  }[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full overflow-hidden shadow-md border border-[#D4AF37]/50 bg-[#0B192C]"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <img
          src="/src/assets/images/ksu_logo_emblem_1790799170080.jpg"
          alt="KSU Infra & Logistic Emblem"
          className="w-full h-full object-cover scale-105"
          onError={(e) => {
            // High-fidelity fallback SVG if image fails
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <svg viewBox="0 0 100 100" class="w-full h-full p-1" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#0B192C" stroke="#D4AF37" stroke-width="2"/>
                  <path d="M50 14 L55 28 L62 29 L57 34 L59 42 L50 37 L41 42 L43 34 L38 29 L45 28 Z" fill="#FF7722"/>
                  <circle cx="50" cy="50" r="28" fill="#071220" stroke="#AA8222" stroke-width="1.5"/>
                  <text x="50" y="55" text-anchor="middle" font-family="'Cinzel', serif" font-weight="900" font-size="16" fill="#F3C352">KSU</text>
                  <text x="50" y="68" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="6" fill="#FFFFFF" letter-spacing="1">INFRA &amp; LOGISTIC</text>
                  <path d="M22 68 Q50 82 78 68" stroke="#D4AF37" stroke-width="2" fill="none"/>
                </svg>
              `;
            }
          }}
        />
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-serif tracking-wider font-extrabold uppercase text-[#0B192C] leading-none ${dimensions.textClass}`}>
            KSU
          </span>
          <span className="font-serif tracking-widest text-[#1D4ED8] font-bold text-xs uppercase sm:text-sm">
            INFRA &amp; LOGISTIC
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-widest text-[#B8860B] font-semibold uppercase mt-0.5">
            Better People, Stronger India
          </span>
        )}
      </div>
    </div>
  );
};
