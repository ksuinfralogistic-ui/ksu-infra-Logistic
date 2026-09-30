import React from 'react';
import {
  ShieldCheck,
  Truck,
  Globe2,
  FolderKanban,
  Clock,
  MessageCircle,
  HardHat,
  Handshake,
  Sparkles,
} from 'lucide-react';

export const WhyPartnerKsu: React.FC = () => {
  const pillars = [
    {
      title: 'Reliable Coordination',
      desc: 'Dedicated dispatch controllers managing truck allocations, loading gate clearances, and driver scheduling around the clock.',
      icon: ShieldCheck,
    },
    {
      title: 'Safe Transportation',
      desc: 'Enclosed pneumatic and covered trailers, strict vehicular fitness routines, and safety-trained long-haul drivers.',
      icon: Truck,
    },
    {
      title: 'Pan India Reach',
      desc: 'Robust highway corridors connecting central India (Raipur) with eastern, northern, western, and southern industrial clusters.',
      icon: Globe2,
    },
    {
      title: 'Project-Oriented Approach',
      desc: 'Fleet allocation and civil workforce customized to client site milestones, weather considerations, and supply volumes.',
      icon: FolderKanban,
    },
    {
      title: 'On-Time Execution',
      desc: 'Proactive turnaround monitoring to ensure civil construction batching plants never face standby downtime.',
      icon: Clock,
    },
    {
      title: 'Transparent Communication',
      desc: 'Honest transit updates, uncompromised weighbridge reconciliation, and direct access to leadership whenever needed.',
      icon: MessageCircle,
    },
    {
      title: 'Infrastructure Support',
      desc: 'Dual-vertical capability: we supply the heavy civil materials and execute the roadway, bridge, and building construction.',
      icon: HardHat,
    },
    {
      title: 'Long-Term Partnership',
      desc: 'Focused on enduring relationships built on commercial integrity, dependable service, and shared nation-building growth.',
      icon: Handshake,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#060D17] via-[#0B192C] to-[#060D17] text-white relative overflow-hidden border-y border-[#D4AF37]/30">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F3C352] mb-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>The Value of Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white">
            WHY PARTNER WITH KSU?
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Eight operational commitments delivering commercial dependability, transparent contracts, and verified project execution.
          </p>
        </div>

        {/* 8 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37] hover:bg-white/8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-[#D4AF37]/40 flex items-center justify-center text-[#F3C352] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-base text-white mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  Standard 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
