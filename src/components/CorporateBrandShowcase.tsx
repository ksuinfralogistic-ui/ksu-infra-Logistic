import React from 'react';
import { Sparkles, Palette, Shield, Download, Eye } from 'lucide-react';
import { KsuLogo } from './KsuLogo';

interface CorporateBrandShowcaseProps {
  onViewMaterials?: () => void;
}

export const CorporateBrandShowcase: React.FC<CorporateBrandShowcaseProps> = ({ onViewMaterials }) => {
  const brandColors = [
    { name: 'Deep Navy Blue', hex: '#0B192C', desc: 'Trust & Corporate Strength' },
    { name: 'Royal Blue', hex: '#1D4ED8', desc: 'Logistics Mobility' },
    { name: 'Saffron / Bhagwa', hex: '#FF7722', desc: 'Cultural Roots & Energy' },
    { name: 'Metallic Gold', hex: '#D4AF37', desc: 'Premium Excellence' },
    { name: 'Pure White', hex: '#FFFFFF', desc: 'Clarity & Integrity' },
    { name: 'Warm Cream', hex: '#F8FAFC', desc: 'Subtle Background Harmony' },
  ];

  const handleScrollToMaterials = () => {
    if (onViewMaterials) {
      onViewMaterials();
    } else {
      const el = document.getElementById('corporate-materials');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            <Palette className="w-4 h-4 text-[#D4AF37]" />
            <span>Brand Standards &amp; Collateral</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            OUR CORPORATE IDENTITY
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            The visual identity and design system representing KSU Infra &amp; Logistic across visiting cards, corporate brochures, and official vendor credentials.
          </p>
        </div>

        {/* Horizontal Brand Showcase Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Brand Mark & Tagline */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Official Corporate Insignia
                  </span>
                  <span className="text-[11px] text-[#B8860B] font-semibold">
                    Registered Mark
                  </span>
                </div>

                <div className="py-4 flex justify-center">
                  <KsuLogo size="lg" showSubtitle={true} />
                </div>

                <p className="text-xs text-slate-600 text-center leading-relaxed mt-4">
                  The emblem incorporates the sacred temple spires, blooming golden lotus, saffron flag, and gold laurel wreath, flanked by the four core virtues: <em>Seva, Sanskar, Samarpan, Avsar</em>.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                  Brand Tagline
                </span>
                <p className="font-serif font-bold text-base text-[#0B192C]">
                  BETTER PEOPLE, STRONGER INDIA
                </p>
              </div>
            </div>

            {/* Right: Collateral Mockup Previews */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Visiting Card Front */}
                <div
                  onClick={handleScrollToMaterials}
                  className="bg-white p-3 rounded-xl border border-slate-200 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="aspect-16/9 rounded-lg overflow-hidden bg-slate-900 mb-2.5">
                    <img
                      src="/src/assets/images/ksu_card_front_1790800395359.jpg"
                      alt="Visiting Card Front"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-xs text-[#0B192C]">
                    Visiting Card (Front)
                  </h4>
                  <p className="text-[10px] text-slate-500">Director Credentials</p>
                </div>

                {/* Visiting Card Back */}
                <div
                  onClick={handleScrollToMaterials}
                  className="bg-white p-3 rounded-xl border border-slate-200 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="aspect-16/9 rounded-lg overflow-hidden bg-slate-900 mb-2.5">
                    <img
                      src="/src/assets/images/ksu_card_back_1790800404876.jpg"
                      alt="Visiting Card Back"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-xs text-[#0B192C]">
                    Visiting Card (Reverse)
                  </h4>
                  <p className="text-[10px] text-slate-500">Services &amp; Values</p>
                </div>

                {/* Brochure Pamphlet */}
                <div
                  onClick={handleScrollToMaterials}
                  className="bg-white p-3 rounded-xl border border-slate-200 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="aspect-16/9 rounded-lg overflow-hidden bg-slate-900 mb-2.5">
                    <img
                      src="/src/assets/images/ksu_corporate_pamphlet_1790800414822.jpg"
                      alt="Company Brochure"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-xs text-[#0B192C]">
                    Company Brochure
                  </h4>
                  <p className="text-[10px] text-slate-500">Corporate Pamphlet</p>
                </div>
              </div>

              {/* Brand Color Swatches */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Brand Color Palette
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {brandColors.map((color) => (
                    <div
                      key={color.hex}
                      className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center gap-2.5 shadow-2xs"
                    >
                      <span
                        className="w-6 h-6 rounded-md shrink-0 border border-slate-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="min-w-0">
                        <span className="font-semibold text-xs text-[#0B192C] block truncate">
                          {color.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {color.hex}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
