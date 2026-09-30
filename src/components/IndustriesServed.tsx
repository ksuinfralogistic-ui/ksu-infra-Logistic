import React from 'react';
import {
  Factory,
  Building,
  Waypoints,
  HardHat,
  Boxes,
  Truck,
  Landmark,
  Building2,
  ArrowRight,
} from 'lucide-react';

export const IndustriesServed: React.FC = () => {
  const industries = [
    {
      title: 'Flyash Industry',
      desc: 'Thermal power plants, flyash export, cement blending units, and eco-friendly brick manufacturers.',
      icon: Factory,
    },
    {
      title: 'Construction Industry',
      desc: 'Commercial builders, residential townships, institutional projects, and ready-mix concrete batching plants.',
      icon: Building,
    },
    {
      title: 'Infrastructure Projects',
      desc: 'National and state highways, elevated expressways, bridges, airport expansion, and bypass roads.',
      icon: Waypoints,
    },
    {
      title: 'Civil Contractors',
      desc: 'Subcontracting support, fleet augmentation, equipment coordination, and material logistics for EPCs.',
      icon: HardHat,
    },
    {
      title: 'Industrial Projects',
      desc: 'Steel plants, mineral processing complexes, chemical industries, and manufacturing facilities.',
      icon: Boxes,
    },
    {
      title: 'Bulk Material Movement',
      desc: 'Aggregates, crushed sand, clinker, gypsum, slag, and industrial dry powders moving across state lines.',
      icon: Truck,
    },
    {
      title: 'Government Projects',
      desc: 'Public works departments (PWD), municipal corporations, irrigation initiatives, and state road authorities.',
      icon: Landmark,
    },
    {
      title: 'Private Projects',
      desc: 'Private commercial developments, logistics parks, factory sites, and industrial site preparation.',
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Market Sectors
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            INDUSTRIES WE SERVE
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Delivering robust freight logistics and civil engineering solutions tailored to the stringent demands of core economic sectors.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B192C] group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0B192C] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">Pan India</span>
                  <a
                    href="#contact"
                    className="text-[#0B192C] group-hover:text-[#1D4ED8] font-semibold flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
