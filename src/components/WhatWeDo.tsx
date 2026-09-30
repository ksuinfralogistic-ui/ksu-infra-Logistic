import React from 'react';
import {
  Truck,
  Building,
  HardHat,
  Boxes,
  Layers,
  Radio,
  ArrowRight,
} from 'lucide-react';

interface WhatWeDoProps {
  onLearnMore?: (sectionId: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onLearnMore }) => {
  const tiles = [
    {
      id: 'transport',
      title: 'TRANSPORTATION',
      desc: 'Nationwide commercial haulage connecting central Indian manufacturing hubs to all states with a dedicated heavy vehicle fleet.',
      icon: Truck,
      targetSection: 'logistics',
    },
    {
      id: 'infra',
      title: 'INFRASTRUCTURE',
      desc: 'Highways, expressway corridors, elevated bridges, site leveling, and comprehensive municipal utility developments.',
      icon: Building,
      targetSection: 'infra',
    },
    {
      id: 'civil',
      title: 'CIVIL PROJECTS',
      desc: 'Turnkey contract execution for government tenders (PWD / municipal) and private commercial building projects.',
      icon: HardHat,
      targetSection: 'infra',
    },
    {
      id: 'bulk',
      title: 'BULK MATERIAL MOVEMENT',
      desc: 'Specialized pneumatic tanker haulage for thermal power flyash, bulk cement, aggregate gravel, and mineral slag.',
      icon: Boxes,
      targetSection: 'logistics',
    },
    {
      id: 'support',
      title: 'PROJECT SUPPORT',
      desc: 'On-site material inventory synchronization, stage-gate planning, and stringent safety & quality coordination.',
      icon: Layers,
      targetSection: 'services',
    },
    {
      id: 'management',
      title: 'LOGISTICS MANAGEMENT',
      desc: 'Round-the-clock satellite GPS tracking, optimized vehicle turnaround, weighbridge audits, and transit compliance.',
      icon: Radio,
      targetSection: 'logistics',
    },
  ];

  const handleTileClick = (target: string) => {
    if (onLearnMore) {
      onLearnMore(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="what-we-do" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Operations At A Glance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            WHAT WE DO
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Six synchronized operational pillars powering industrial supply chains and modern civil infrastructure projects across India.
          </p>
        </div>

        {/* 6 Service Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.id}
                className="bg-slate-50/60 p-6 rounded-xl border border-slate-200 hover:border-[#D4AF37] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B192C] group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors mb-5 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0B192C] mb-2.5 tracking-wide group-hover:text-[#1D4ED8] transition-colors">
                    {tile.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {tile.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#B8860B] uppercase">
                    Core Capability
                  </span>
                  <button
                    type="button"
                    onClick={() => handleTileClick(tile.targetSection)}
                    className="text-xs font-bold text-[#0B192C] group-hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
