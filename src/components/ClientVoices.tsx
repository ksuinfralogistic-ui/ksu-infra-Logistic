import React from 'react';
import { Quote, Star, Building, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ClientVoices: React.FC = () => {
  const testimonials = [
    {
      partnerType: 'Thermal Power Generation Group',
      department: 'Fuel & Flyash Evacuation Logistics',
      quote:
        'KSU Infra & Logistic maintained round-the-clock dedicated fleet availability during our peak flyash evacuation cycle. Zero loading delays, transparent weighbridge reporting, and disciplined drivers made them our most dependable haulage partner.',
      location: 'Central India Corridor',
      scope: 'Bulk Flyash Transportation',
      initials: 'TP',
    },
    {
      partnerType: 'National Highway EPC Consortium',
      department: 'Roadway & Bridge Project Division',
      quote:
        'When paving machinery and site crews are mobilized, any logistics bottleneck causes costly delays. KSU coordinated aggregate and bulk supply directly to our batching stations without a single hour of idle time.',
      location: 'Interstate Highway Package',
      scope: 'Civil Materials & Earthworks',
      initials: 'NH',
    },
    {
      partnerType: 'Integrated Cement & Clinker Manufacturer',
      department: 'Supply Chain & Raw Materials Procurement',
      quote:
        'Inter-state bulk raw material transit requires strict compliance, digital documentation, and real-time tracking. KSU’s dispatch coordinators provide proactive updates and seamless coordination across state border checkpoints.',
      location: 'Pan India Industrial Link',
      scope: 'Industrial Dry Bulk Freight',
      initials: 'CM',
    },
    {
      partnerType: 'Heavy Industrial Estate Developer',
      department: 'Infrastructure Contracting & Site Works',
      quote:
        'Director Kripa Shanker Upadhyay brings personal accountability and deep local knowledge to every project. Their civil works team completed structural foundations and internal site roadways within planned milestones.',
      location: 'Raipur Industrial Region',
      scope: 'Turnkey Civil Execution',
      initials: 'IE',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Industry Feedback &amp; Verification
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            CLIENT VOICES &amp; TRUST
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Direct operational feedback from thermal power complexes, national highway contractors, cement manufacturers, and civil engineering partners.
          </p>
        </div>

        {/* 4 Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0B192C] text-[#F3C352] flex items-center justify-center font-serif font-bold text-sm border border-[#D4AF37]/40 shadow-xs">
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#0B192C]">
                        {item.partnerType}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.department}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                  <span className="text-xs font-semibold text-slate-400 ml-2">
                    Verified Partner Feedback
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Footer Meta */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scope: {item.scope}</span>
                </div>
                <span className="text-[11px] text-[#B8860B] font-semibold">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification & Partner Callout */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Partnering on government civil tenders or looking for bulk logistics fleet placement? We provide verifiable past performance references upon request.
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B192C] hover:bg-[#1D4ED8] text-white font-bold text-xs whitespace-nowrap transition-colors"
          >
            <span>Request References</span>
          </a>
        </div>
      </div>
    </section>
  );
};
