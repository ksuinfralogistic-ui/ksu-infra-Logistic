import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, MapPin, ChevronDown, Truck, HardHat } from 'lucide-react';
import { KsuLogo } from './KsuLogo';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A1428]"
    >
      {/* Background Ambient Grid & Soft Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#060D17]/95" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Statement & Lead Initiations */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Logo Lockup in Hero */}
            <div className="inline-block p-2 rounded-xl bg-white/5 border border-[#D4AF37]/30 backdrop-blur-xs">
              <KsuLogo size="md" showSubtitle={false} className="text-white" />
            </div>

            {/* Core Values Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#F3C352]">
              <span className="uppercase">Seva</span>
              <span className="text-[#FF7722]" aria-hidden="true">•</span>
              <span className="uppercase">Sanskar</span>
              <span className="text-[#FF7722]" aria-hidden="true">•</span>
              <span className="uppercase">Samarpan</span>
              <span className="text-[#FF7722]" aria-hidden="true">•</span>
              <span className="uppercase">Avsar</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.1] text-balance">
              BUILDING CONNECTIONS <br />
              <span className="gold-gradient-text">FOR A STRONGER INDIA</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              From Roads to Growth, From Transport to Development, <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#F5E6BE]">We Keep India Moving.</span>
            </p>

            {/* Trust Statement */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-1.5 text-[#F3C352]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="tracking-wide font-bold">PAN INDIA SERVICE</span>
              </div>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF7722]" />
                <span>Headquarters: Raipur, Chhattisgarh</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#what-we-do"
                onClick={(e) => {
                  if (onExploreClick) {
                    e.preventDefault();
                    onExploreClick();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-[#0B192C] bg-[#D4AF37] hover:bg-[#F3C352] active:bg-[#B8860B] shadow-lg hover:shadow-xl transition-all duration-200 group uppercase tracking-wider"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onContactClick) {
                    e.preventDefault();
                    onContactClick();
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 backdrop-blur-xs transition-colors uppercase tracking-wider"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20discuss%20a%20business%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-colors uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Motto Footprint */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              <p className="italic font-serif text-slate-300">
                &ldquo;Reliable Movement. Strong Infrastructure. Better Tomorrow.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Premium Composite Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl bg-[#0B192C] group">
              <img
                src="/src/assets/images/hero_infra_logistics_1790799085240.jpg"
                alt="Freight Truck and Elevated Highway Bridge Construction"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              {/* Subtle Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-transparent to-transparent opacity-80" />

              {/* Floating Verified Trust Cards */}
              <div className="absolute top-4 left-4 bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-3 flex items-center gap-2.5 shadow-lg">
                <div className="p-2 rounded-lg bg-blue-500/20 text-[#D4AF37]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">
                    Vertical 01
                  </span>
                  <span className="text-xs font-serif font-bold text-white">
                    Logistics &amp; Transport
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-3 flex items-center gap-2.5 shadow-lg">
                <div className="p-2 rounded-lg bg-orange-500/20 text-[#FF7722]">
                  <HardHat className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">
                    Vertical 02
                  </span>
                  <span className="text-xs font-serif font-bold text-white">
                    Infra Projects &amp; Civil Works
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Gold Corner Accents */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-tr-xl" />
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-bl-xl" />
          </div>
        </div>
      </div>

      {/* Down Scroll Button */}
      <a
        href="#business"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400 hover:text-[#D4AF37] transition-colors"
        aria-label="Scroll to Business Verticals"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1 text-slate-400">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};
