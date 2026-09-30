import React from 'react';
import {
  Navigation,
  Globe2,
  Clock,
  HardHat,
  Users2,
  MessageCircle,
  FolderKanban,
  ShieldCheck,
} from 'lucide-react';

export const WhyKsuSection: React.FC = () => {
  const reasons = [
    {
      title: 'Reliable Movement',
      desc: 'Consistent vehicular availability and dependable bulk transportation pipelines minimizing transit disruptions.',
      icon: Navigation,
    },
    {
      title: 'Pan India Network',
      desc: 'Extensive transit corridors interconnecting central India with key northern, western, eastern, and southern industrial hubs.',
      icon: Globe2,
    },
    {
      title: 'Safe & On-Time Delivery',
      desc: 'Disciplined turnaround management and strict route scheduling ensuring cargo arrives securely and on time.',
      icon: Clock,
    },
    {
      title: 'Infrastructure Support',
      desc: 'Holistic capability handling both civil construction requirements and the bulk material logistics needed to power them.',
      icon: HardHat,
    },
    {
      title: 'Dedicated Coordination',
      desc: 'Assigned single-point coordinators managing vehicle dispatches, loading clearances, and real-time site liaison.',
      icon: Users2,
    },
    {
      title: 'Transparent Communication',
      desc: 'Honest updates on route timelines, clear weighbridge reconciliation, and direct access to leadership.',
      icon: MessageCircle,
    },
    {
      title: 'Project-Oriented Approach',
      desc: 'Flexible mobilization tailored around project stage gates, seasonal demand peaks, and client constraints.',
      icon: FolderKanban,
    },
    {
      title: 'Quality & Safety Focus',
      desc: 'Committed adherence to road safety, vehicle maintenance standards, and construction site safety protocols.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-ksu" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            The KSU Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            WHY CHOOSE KSU?
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Built on trust, operational discipline, and dedicated coordination to keep industrial supply chains and civil projects moving forward.
          </p>
        </div>

        {/* 8 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-[#D4AF37]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1D4ED8] mb-4 shadow-2xs">
                    <Icon className="w-6 h-6 text-[#0B192C]" />
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0B192C] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[11px] font-semibold text-[#B8860B]">
                  Pillar {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
