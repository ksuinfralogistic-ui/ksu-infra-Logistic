import React from 'react';
import { Truck, HardHat, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface LeadChoiceSectionProps {
  onSelectOption: (serviceType: string) => void;
}

export const LeadChoiceSection: React.FC<LeadChoiceSectionProps> = ({ onSelectOption }) => {
  const handleOptionQuote = (service: string) => {
    onSelectOption(service);
    const formEl = document.getElementById('contact');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  const transportWhatsApp =
    'https://wa.me/919039038221?text=' +
    encodeURIComponent('Hello KSU Infra & Logistic, I am interested in your transportation services. Please contact me.');

  const infraWhatsApp =
    'https://wa.me/919039038221?text=' +
    encodeURIComponent('Hello KSU Infra & Logistic, I have an infrastructure/civil project requirement. Please contact me.');

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Direct Project Initiation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            START YOUR NEXT PROJECT WITH US
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Choose your requirement below for dedicated executive assistance, direct fleet allocation, or tender contracting review.
          </p>
        </div>

        {/* Two Large Choices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Choice 1: Transportation */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#1D4ED8] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-6 group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors shadow-2xs">
                <Truck className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1">
                Fleet &amp; Freight Haulage
              </span>

              <h3 className="text-2xl font-serif font-bold text-[#0B192C] mb-3">
                NEED TRANSPORTATION?
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Dedicated commercial tankers, flyash carriers, and multi-axle bulk trailers ready for immediate deployment across central India and pan-India corridors.
              </p>

              <ul className="space-y-2 mb-8 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Flyash &amp; thermal power bulk movement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Real-time GPS tracking &amp; dedicated coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>On-time dispatch with zero idle turnaround</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleOptionQuote('Logistics & Transportation')}
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B192C] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wide transition-colors shadow-sm"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={transportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs uppercase tracking-wide transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919039038221"
                className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wide transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B192C]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Choice 2: Infrastructure */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF7722] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF7722] flex items-center justify-center mb-6 group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors shadow-2xs">
                <HardHat className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7722] block mb-1">
                Civil Contracts &amp; Construction
              </span>

              <h3 className="text-2xl font-serif font-bold text-[#0B192C] mb-3">
                HAVE AN INFRA PROJECT?
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Turnkey civil engineering, roadway construction, elevated bridge structures, and government/private contract execution with engineering oversight.
              </p>

              <ul className="space-y-2 mb-8 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7722]" />
                  <span>State &amp; central government civil tender execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7722]" />
                  <span>Roads, expressways, bridges &amp; building works</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7722]" />
                  <span>Integrated site material supply coordination</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleOptionQuote('Infrastructure Project')}
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B192C] hover:bg-[#FF7722] text-white font-bold text-xs uppercase tracking-wide transition-colors shadow-sm"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={infraWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs uppercase tracking-wide transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919039038221"
                className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wide transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B192C]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
