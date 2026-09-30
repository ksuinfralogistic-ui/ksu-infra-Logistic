import React from 'react';
import { Truck, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';

interface BusinessVerticalsProps {
  onSelectVertical: (vertical: 'logistics' | 'infra') => void;
}

export const BusinessVerticals: React.FC<BusinessVerticalsProps> = ({ onSelectVertical }) => {
  const logisticsServices = [
    'Flyash Transportation',
    'Bulk Material Transportation',
    'Industrial Transportation',
    'Pan India Transportation',
    'Dedicated Fleet Operations',
    'GPS Tracking & Telemetry',
    'Safe & On-Time Delivery',
    'Customized Logistics Solutions',
  ];

  const infraServices = [
    'Government Civil Projects',
    'Private Civil Projects',
    'Road Projects & Highways',
    'Bridge Projects & Flyovers',
    'Building Projects',
    'Infrastructure Development',
    'Site Development',
    'Project Execution',
  ];

  return (
    <section id="business" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            The Two Pillars of KSU
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            OUR BUSINESS
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Operating as an integrated enterprise with two powerhouse operational divisions: moving industrial commodities across the nation and executing critical civil infrastructure.
          </p>
        </div>

        {/* Two Large Visually Equal Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Panel 1: Logistics & Transportation */}
          <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#1D4ED8] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Header */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/logistics_fleet_highway_1790799098665.jpg"
                alt="Freight Truck on Highway"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />

              {/* Tagline Badge */}
              <div className="absolute top-5 left-5 bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl px-4 py-2 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-serif font-bold uppercase tracking-wider text-white">
                  Vertical 01
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F3C352] block mb-1">
                  TAGLINE: RELIABLE MOVEMENT.
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  LOGISTICS &amp; TRANSPORTATION
                </h3>
              </div>
            </div>

            {/* Panel Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Reliable and efficient transportation solutions for bulk materials and industrial logistics across India. Dedicated commercial fleet, live satellite GPS tracking, and specialized flyash handling.
                </p>

                <div className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span>Key Offerings</span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {logisticsServices.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => onSelectVertical('logistics')}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1D4ED8] transition-colors shadow-sm group/btn uppercase tracking-wider"
              >
                <span>EXPLORE LOGISTICS</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#D4AF37]" />
              </button>
            </div>
          </div>

          {/* Panel 2: Infra Projects & Construction */}
          <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#FF7722] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Header */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/infra_bridge_construction_1790799116380.jpg"
                alt="Bridge Crane and Infrastructure Construction"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />

              {/* Tagline Badge */}
              <div className="absolute top-5 left-5 bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl px-4 py-2 flex items-center gap-2">
                <HardHat className="w-4 h-4 text-[#FF7722]" />
                <span className="text-xs font-serif font-bold uppercase tracking-wider text-white">
                  Vertical 02
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F3C352] block mb-1">
                  TAGLINE: STRONG INFRASTRUCTURE.
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  INFRA PROJECTS &amp; CONSTRUCTION
                </h3>
              </div>
            </div>

            {/* Panel Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Infrastructure and civil construction solutions for government and private sector projects. Expert execution of roads, elevated bridges, structural civil buildings, and site development.
                </p>

                <div className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF7722]" />
                  <span>Key Offerings</span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {infraServices.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FF7722] shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => onSelectVertical('infra')}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs font-bold text-white bg-[#0B192C] hover:bg-[#FF7722] transition-colors shadow-sm group/btn uppercase tracking-wider"
              >
                <span>EXPLORE INFRA PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
